import { IUsersRepository } from "../../repositories/IUsersRepository";
import IDeleteUserRequestDTO from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: IDeleteUserRequestDTO) {
        const deleteUser = await this.usersRepository.delete(data.email);
    }
}
