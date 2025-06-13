export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole; // e.g., 'admin', 'user', etc.
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
    Admin = 'admin',
    HR = 'hr',
    Employee = 'employee' 
}