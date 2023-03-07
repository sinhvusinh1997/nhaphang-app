export interface TLogin {
  UserName: string;
  Password: string;
}

export interface TRegister {
  UserName: string;
  FullName: string;
  Email: string;
  Phone: number;
  Password: string;
  PasswordConfirmed: boolean;
}

export interface TForgetPassword {
  Email: string;
}
