import { UserImplementation } from "../../repositories/implementation/UserImplementation";
import { GetAllUserController } from "./GetAllUserController";
import { GetAllUserUseCase } from "./GetAllUserUseCase";

const userImplementation = new UserImplementation();

const getAllUserUseCase = new GetAllUserUseCase(userImplementation);
 
const getAllUserController = new GetAllUserController(getAllUserUseCase);

export { getAllUserController }