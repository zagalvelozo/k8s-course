import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserDTO";


export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: IUpdateUserRequestDTO) {

        const userAlreadyExist = await this.usersRepository.findByEmail(data.email);
        
        if (!userAlreadyExist) {
            throw new Error("User Do Not Exist.");
        }

        const user = new User(data);

        await this.usersRepository.update(user);

        // this.mailProvider.sendMail({
        //     to: {
        //         name: data.name,
        //         email: data.email
        //     },
        //     from: {
        //         name: 'Zagal',
        //         email: 'no-reply@zagal.com'
        //     },
        //     subject: 'Welcome',
        //     body: '<p>Now you can login to out platform</p>'
        // });
    }
}
