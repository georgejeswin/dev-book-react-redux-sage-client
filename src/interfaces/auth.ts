export interface signupParams {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword?: string;
  email: string;
  callback?: () => void;
}
