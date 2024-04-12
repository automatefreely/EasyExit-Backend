import prisma from '../config/db.config.js';
import {
    response_200,
    response_204,
    response_500
} from '../utils/responseCodes.js';
import { hash } from 'bcrypt';
import ROLE from '../utils/role.js';

export async function getProfile(req, res) {
    try {
        const { email, role } = req.user;
        const profile = await prisma.user.findUnique({
            where: {
                email: email,
                [role]: {
                    organization: {
                        name: true,
                        unrestrictedStartTime: true,
                        unrestrictedEndTime: true
                    }
                }
            },
            select: {
                email: true,
                name: true
            }
        });

        const formattedData = {
            name: profile.name,
            email: profile.email,
            organization: profile[role].organization.name,
            unrestrictedStartTime:
                profile[role].organization.unrestrictedStartTime,
            unrestrictedEndTime: profile[role].organization.unrestrictedEndTime,
            role: role
        };

        return response_200(res, 'Profile fetched successfully', formattedData);
    } catch (error) {
        return response_500(res, 'Error fetching profile', error);
    }
}

export async function updateProfile(req, res) {
    try {
        const { email, role } = req.user;
        let { name, password, organizationId, email: newEmail, phoneNumber } = req.body;
        let profileImg = req?.file
            ? `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
            : null;

        if (profileImg) {
            const imageUpload = await cloudinary.v2.uploader.upload(
                profileImg,
                {
                    resource_type: 'image',
                    folder: 'profile',
                    format: 'png',
                    allowed_formats: ['png', 'jpg', 'jpeg'],
                    overwrite: true,
                    public_id: `${Date.now()}-profile-${req.userId}`
                }
            );
            profileImg = imageUpload.secure_url;
        }
        if (password) {
            password = await hash(password, 10);
        }

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                ...(name && { name: name }),
                ...(password && { password: password }),
                ...(newEmail && { email: newEmail }),
                ...(phoneNumber && { phoneNumber: phoneNumber }),
                ...(profileImg && { profileImg: profileImg }),
                ...((organizationId && role === ROLE.peoples) && {
                    [role]: {
                        update: {
                            organization: {
                                connect: {
                                    id: organizationId
                                }
                            }
                        }
                    }
                })
            }
        });

        return response_204(res, 'Profile updated successfully');
    } catch (error) {
        return response_500(res, 'Error updating profile', error);
    }
}

export async function deleteProfile(req, res) {
    try {
        const { email } = req.user;
        await prisma.user.delete({
            where: {
                email: email
            }
        });

        return response_204(res, 'Profile deleted successfully');
    } catch (error) {
        return response_500(res, 'Error deleting profile', error);
    }
}

export async function getOrganizations(req, res) {
    try {
        const organizations = await prisma.organization.findMany({
            where: {
                name: {
                    contains: req.query?.name || ''
                }
            },
            select: {
                id: true,
                name: true
            },
            take: 5
        });
        return response_200(
            res,
            'Organizations fetched successfully',
            organizations
        );
    } catch (error) {
        return response_500(res, 'Error fetching organizations', error);
    }
}
