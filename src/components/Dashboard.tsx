import React, { useEffect, useState } from 'react';
import { apiFetch } from '../api/api';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiFetch('http://localhost:5000/protected-data');
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
