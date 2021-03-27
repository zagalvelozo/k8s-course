import { User } from "../entities/User";

export interface IUsersRepository{
    findByEmail(email: string): Promise <User>;
    save(user: User): Promise <void>;
    update(user: User): Promise <void>;
    delete(email: string): Promise <void>;
    getAll(): Promise<User[]>;
}