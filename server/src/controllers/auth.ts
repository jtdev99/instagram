import { Request, Response } from "express";

class AuthController {
    /**
     * @Method POST
     * @Url http://localhost:port/api/v1/auth/register @Or http://domain/api/v1/auth/register
     * @Description Register a new account
     */
    public async register(req: Request, res: Response) {}

    /**
     * @Method POST
     * @Url http://localhost:port/api/v1/auth/register @Or http://domain/api/v1/auth/register
     * @Description Login with existing account
     */
    public async login(req: Request, res: Response) {}
}

const authController = new AuthController();

export default authController;
