import React from 'react';
import styles from './Main.module.scss';
import Sidebar from './../Sidebar/Sidebar';
import Content from './../Content/Content';

const Main = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Sidebar />
				<Content />
			</main>
		</div>
	);
};

export default Main;
