import { UserImplementation } from "../../repositories/implementation/UserImplementation";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const userImplementation = new UserImplementation();

const deleteUserUseCase = new DeleteUserUseCase(userImplementation);
 
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController, deleteUserUseCase }