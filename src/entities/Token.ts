export class Token {
    public token_type: string;
    public expires_in: number;
    public access_token: string;

    constructor(token_type: string, expires_in: number, access_token: string){
        this.token_type = token_type;
        this.expires_in = expires_in;
        this.access_token = access_token;
    }
}
