export interface ITokenProvider{
    getToken(options: any): Promise<Token>
}
