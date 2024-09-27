export const apiFetch = async (url: string, options: RequestInit = {}): Promise<any> => {
    const access_token = localStorage.getItem('access_token');

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
        ...(access_token && { Authorization: `Bearer ${access_token}`}),
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    return response.json();
}