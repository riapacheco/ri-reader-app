
export interface IAuthUser {
  uid?: string | number;
  email?: string;
  phone?: number;
  provider?: string;
  created?: Date;
  last_sign_in?: Date;
}

export interface IUser extends IAuthUser {
  id?: number;
  book_id?: number; // FK
  auth_user_id?: string | number; // FK
  full_name?: string;
  is_subscribed?: boolean;
  payment_interval?: string;
  avatar?: string;
}