// import { uuid } from "uuidv4";

export class User {
    public username: string;
    public email: string;

    constructor(props: User){
        Object.assign(props);
    }
}