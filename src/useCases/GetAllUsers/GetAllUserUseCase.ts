import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetAllUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute() {
        return await this.usersRepository.getAll();
    }
}
