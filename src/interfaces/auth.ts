export interface signupParams {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword?: string;
  email: string;
  callback?: () => void;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}
