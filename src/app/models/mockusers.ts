export interface MockEmployeeData {
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
}
import { User, UserRole } from './user';

export const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '(267) 555-1234',
    office_location: 'Malvern, PA',
    jobTitle: 'Senior Developer',
    department: 'Engineering',
    hireDate: new Date('2022-03-15'),
    employement_type: 'Full-time',
    client: 'Internal',
    isActive: true,
    role: UserRole.Employee
  },
  {
    id: 2,
    firstName: 'Jamie',
    lastName: 'Chen',
    email: 'jamie.chen@example.com',
    phone: '(267) 555-2345',
    office_location: 'Malvern, PA',
    jobTitle: 'UX Designer',
    department: 'Design',
    hireDate: new Date('2021-08-10'),
    employement_type: 'Full-time',
    client: 'Internal',
    isActive: true,
    role: UserRole.Employee
  },
  {
    id: 3,
    firstName: 'Taylor',
    lastName: 'Wilson',
    email: 'taylor.wilson@example.com',
    phone: '(267) 555-3456',
    office_location: 'London, UK',
    jobTitle: 'Product Manager',
    department: 'Product',
    hireDate: new Date('2020-05-22'),
    employement_type: 'Full-time',
    client: 'Internal',
    isActive: true,
    role: UserRole.Employee
  },
  {
    id: 4,
    firstName: 'Sam',
    lastName: 'Rodriguez',
    email: 'sam.rodriguez@example.com',
    phone: '(267) 555-4567',
    office_location: 'Malvern, PA',
    jobTitle: 'Backend Developer',
    department: 'Engineering',
    hireDate: new Date('2023-01-15'),
    employement_type: 'Contract',
    client: 'PharmaCorp',
    isActive: true,
    role: UserRole.Employee
  },
  {
    id: 5,
    firstName: 'Jordan',
    lastName: 'Smith',
    email: 'jordan.smith@example.com',
    phone: '(267) 555-5678',
    office_location: 'Malvern, PA',
    jobTitle: 'HR Manager',
    department: 'Human Resources',
    hireDate: new Date('2019-11-05'),
    employement_type: 'Full-time',
    client: 'Internal',
    isActive: true,
    role: UserRole.HR
  },
  {
    id: 6,
    firstName: 'Casey',
    lastName: 'Johnson',
    email: 'casey.johnson@example.com',
    phone: '(267) 555-6789',
    office_location: 'London, UK',
    jobTitle: 'System Administrator',
    department: 'IT',
    hireDate: new Date('2020-08-19'),
    employement_type: 'Full-time',
    client: 'Internal',
    isActive: false,
    role: UserRole.Employee
  },
  {
    id: 7,
    firstName: 'Robin',
    lastName: 'Lee',
    email: 'robin.lee@example.com',
    phone: '(267) 555-7890',
    office_location: 'Malvern, PA',
    jobTitle: 'CTO',
    department: 'Executive',
    hireDate: new Date('2018-04-10'),
    employement_type: 'Full-time',
    client: 'Internal',
    isActive: true,
    role: UserRole.Admin
  }
];

export const currentUser: User = mockUsers[0]; // Alex Morgan