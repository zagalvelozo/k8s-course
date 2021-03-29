import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";


export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: ICreateUserRequestDTO) {

        const userAlreadyExist = await this.usersRepository.findByEmail(data.email);
        
        if (userAlreadyExist) {
            throw new Error("User Already Exist.");
        }

        const user =  new User(data);

        await this.usersRepository.save(user);

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
