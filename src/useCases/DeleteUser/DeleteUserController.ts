import { Request, Response } from "express";
import {  DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController{
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{

        const { email } = request.params;
        
        try {
            await this.deleteUserUseCase.execute({
                email
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error.'
            });
        }
    }
}