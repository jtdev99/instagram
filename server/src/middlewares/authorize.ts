import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { TResponseDto } from "../types";

// ? Define authorize middlewares function
const authorize = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        // TODO: Get token from header authentication request
        const authorizationStr = req.headers.authorization;
        const token = authorizationStr.split(" ")[1];

        // TODO: Check token is valid
        if (!token) {
            const responseDto: TResponseDto<null> = {
                status: false,
                msg: "No token provided!",
                data: null,
            };

            return res.status(401).json(responseDto);
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

            if (!decoded) {
                const responseDto: TResponseDto<null> = {
                    status: false,
                    msg: "Invalid token provided!",
                    data: null,
                };

                return res.status(403).json(responseDto);
            }

            // TODO Get profile information
            req["accountId"] = decoded["id"];
            req["role"] = decoded["role"];

            // TODO Get value passed from authorize middleware function
            const rolesList = [...roles];

            if (rolesList.length > 0) {
                // TODO Check role when passed value to authorize middleware function
                const isPermission = rolesList.includes(decoded["role"]);

                // TODO Return bad request when can't access method
                if (!isPermission) {
                    const responseDto: TResponseDto<null> = {
                        status: false,
                        msg: "Access denied!",
                        data: null,
                    };

                    return res.status(400).json(responseDto);
                }
            }

            next();
        } catch (error) {
            const responseDto: TResponseDto<null> = {
                status: false,
                msg: "Something went wrong!",
                data: null,
            };

            return res.status(500).json(responseDto);
        }
    };
};

export default authorize;
