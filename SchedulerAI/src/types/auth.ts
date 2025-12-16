export type UserRole = "Owner" | "Employee";
export type UserStatus = "active" | "inactive";

export interface AuthUser {
  user_id: string;
  auth_uid: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
}

export interface AuthResponse {
  session: any;
  profile: AuthUser;
} 