import React from 'react';
import Header from './../Header/Header';
import styles from './Error.module.scss';
import error from './../../Assets/Images/error.png';

const Error = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<section className={styles.error}>
					<img
						className={styles.error__img}
						src={error}
						alt='Error image'
						width={500}
						height={194}
					/>
					<h2 className={styles.error__heading}>
						Page not found - 404
					</h2>
					<p className={styles.error__text}>
						This page not found (deleted or never exists).Try a
						phrase in search box or back to home and start again.
					</p>
					<a className={styles.error__link} href='./../../index.js'>
						TAKE ME HOME!
					</a>
				</section>
			</div>
		</>
	);
};

export default Error;
