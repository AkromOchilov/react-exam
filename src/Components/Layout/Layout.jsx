import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Layout = () => {
	let navigator = useNavigate();
	let storage = window.localStorage;
	return (
		<>
			{storage.getItem('token') ? (
				<>
					<Header />
					<Outlet />
					<Footer />
				</>
			) : (
				navigator('/login')
			)}
		</>
	);
};

export default Layout;
