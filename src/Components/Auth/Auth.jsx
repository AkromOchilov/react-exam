import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
	let navigator = useNavigate();
	const [token, setToken] = useState(localStorage.getItem('token'));

	useEffect(() => {
		if (!token) {
			navigator('/login');
		}
	}, [token]);

	return <>{children}</>;
};

export default Auth;
