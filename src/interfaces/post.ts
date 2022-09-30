export interface Post {
  title: string;
  description: string;
  image?: string;
  user?: User;
  id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
}
