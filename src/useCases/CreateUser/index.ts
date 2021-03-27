import { UserImplementation } from "../../repositories/implementation/UserImplementation";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userImplementation = new UserImplementation();

const createUserUseCase = new CreateUserUseCase(userImplementation);
 
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase }