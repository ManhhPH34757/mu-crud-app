import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const authApi = 'http://localhost:5000/login';
        const response = await fetch(authApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('access_token', data.access_token);
            navigate('/dashboard');
        } else {
            console.error('Login fail: ', data.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )

}