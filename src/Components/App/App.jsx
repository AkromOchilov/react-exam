import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Login from './../Login/Login';
import Main from './../Main/Main';
import Auth from './../Auth/Auth';
import SinglePage from './../SinglesPage/SinglePage';
import Layout from './../Layout/Layout';
import Error from './../Error/Error';

function App() {
	console.log(window.location.href);
	let url = useParams();
	console.log(url);
	return (
		<>
			<Routes>
				<Route index element={<Login />} />
				<Route
					path={'/category'}
					element={
						<Auth>
							<Layout />
						</Auth>
					}>
					<Route path={':categoryId/*'} element={<Main />} />
					<Route path={':categoryId/:id'} element={<SinglePage />} />
				</Route>
				<Route path={'/login'} element={<Login />} />
				<Route path={'*'} element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
