import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './../Login/Login';
import Main from './../Main/Main';
import SinglePage from './../SinglesPage/SinglePage';
import Layout from './../Layout/Layout';
import Error from './../Error/Error';

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Login />} />
				<Route path={'/category'} element={<Layout />}>
					<Route path={':categoryId'} element={<Main />}></Route>
					<Route
						path={':categoryId/:id'}
						element={<SinglePage />}></Route>
				</Route>
				<Route path={'*'} element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
