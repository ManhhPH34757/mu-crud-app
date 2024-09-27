export interface User {
    id: string;
    full_name: string;
    age: number;
    gender: string;
    phone_number: string;
    address: string;
    email: string;
    username: string;
    role: 'ADMIN' | 'USER';
  }