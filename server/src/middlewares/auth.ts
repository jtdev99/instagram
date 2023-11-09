import { NextFunction, Request, Response } from "express";
import { TRegisterReqDto } from "../types";

class AuthMiddleware {
    /**
     * @Method POST
     * @Url http://localhost:port/api/v1/auth/register @Or http://domain/api/v1/auth/register
     * @Description Register a new account
     */
    public async register(req: Request, res: Response, next: NextFunction) {
        const { email, username }: TRegisterReqDto = req.body;
    }

    /**
     * @Method POST
     * @Url http://localhost:port/api/v1/auth/register @Or http://domain/api/v1/auth/register
     * @Description Login with existing account
     */
    public async login(req: Request, res: Response, next: NextFunction) {}
}

const authMiddleware = new AuthMiddleware();

export default authMiddleware;
