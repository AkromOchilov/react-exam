import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Header from './../Header/Header';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';

const Layout = () => {
	let { categoryId } = useParams();
	return (
		<>
			<Header />
			{categoryId ? <Outlet /> : <Main />}
			<Footer />
		</>
	);
};

export default Layout;
