import { UserImplementation } from "../../repositories/implementation/UserImplementation";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const userImplementation = new UserImplementation();

const updateUserUseCase = new UpdateUserUseCase(userImplementation);
 
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController }