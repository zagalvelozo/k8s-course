import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { getAllUserController } from "./useCases/GetAllUsers";
import { updateUserController } from "./useCases/UpdateUser";


const router = Router()

router.get('/users', (request, response) => {
    return getAllUserController.handle(request, response);
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.delete('/users/:uuid', (request, response) => {
    return deleteUserController.handle(request, response);
});

router.put('/users/:uuid', (request, response) => {
    return updateUserController.handle(request, response);
});

router.get('/', (request, response) => {
    response.json(request.headers);
});


export { router }