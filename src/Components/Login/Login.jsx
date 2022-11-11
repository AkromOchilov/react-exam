import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import logo from './../../Assets/Images/logo.svg';

const Login = () => {
	let mailRef = useRef();
	let passRef = useRef();
	let navigator = useNavigate();

	let setToken = async (user) => {
		let data = await fetch(`https://reqres.in/api/login`, {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(user),
		});

		data = await data.json();
		if (data.token && data.token !== 'null') {
			window.localStorage.setItem('token', data.token);
			navigator('/category');
		}
	};

	let handleClick = () => {
		let user = {
			email: mailRef.current.value,
			password: passRef.current.value,
		};

		setToken(user);
	};

	return (
		<section className={styles.login}>
			<div className={styles.login__header}>
				<a className={styles.login__link} href={'/'}>
					<img
						className={styles.login__logo}
						src={logo}
						alt={'Logo'}
						width={210}
						height={58}
					/>
				</a>
			</div>

			<div className={styles.login__content}>
				<h2 className={styles.login__heading}>
					Sahifamga xush kelibsiz! Pulli kontentni o'qish uchun
					tizimga kiring.
				</h2>

				<div className={styles.login__box}>
					<h3 className={styles.login__title}>Login</h3>
					<input
						ref={mailRef}
						className={styles.login__input}
						type='text'
						placeholder={'Login'}
					/>
					<input
						ref={passRef}
						className={styles.login__input}
						type='text'
						placeholder={'Password'}
					/>
					<button
						className={styles.login__submit}
						onClick={() => handleClick()}
						type={'submit'}>
						Submit
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
