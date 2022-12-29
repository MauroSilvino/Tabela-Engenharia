export interface ICreateUserTokenDTO {
  userId: number;
  expiresDate: Date;
  token: string;
}
