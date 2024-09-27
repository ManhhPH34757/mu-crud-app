import React, { useEffect, useState } from 'react';

interface User {
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

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        alert('Failed to fetch users');
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Quản Lý Người Dùng</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ Tên</th>
            <th>Tuổi</th>
            <th>Giới Tính</th>
            <th>Số Điện Thoại</th>
            <th>Địa Chỉ</th>
            <th>Email</th>
            <th>Tên Đăng Nhập</th>
            <th>Quyền</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.full_name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone_number}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
