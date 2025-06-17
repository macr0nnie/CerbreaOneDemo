export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  office_location: string;
  jobTitle: string;
  department: string;
  hireDate: Date;
  employement_type: string;
  client: string;
  isActive: boolean;
  role: UserRole;
}

export enum UserRole {
  Admin = 'admin',
  HR = 'hr',
  Employee = 'employee',
}
