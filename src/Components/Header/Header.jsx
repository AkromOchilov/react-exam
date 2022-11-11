import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './../../Assets/Images/logo.svg';
import search from './../../Assets/Images/search.svg';
import getData from './../../Lib/getData';
import hamburger from './../../Assets/Images/hamburger.svg';
import './Header.css';

const Header = () => {
	const [category, setCategory] = useState([]);
	let [open, setOpen] = useState(false);

	let handle = async () => {
		let data = await getData();
		setCategory(data);
	};

	useEffect(() => {
		handle();
	}, []);

	let openMenu = () => {
		setOpen(!open);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__inner}>
					<a className={styles.header__logo}>
						<img
							className={styles.header__logo__img}
							src={logo}
							alt='Logo image'
							width={210}
							height={58}
						/>
					</a>

					<nav className={styles.header__nav}>
						<ul className={`header__list ${open && 'activate'}`}>
							{category.length > 0 &&
								category.map((category) => (
									<li
										key={category.id}
										className={styles.header__item}>
										<Link
											to={'/category/' + category.id}
											className={styles.header__link}>
											{category.name}
										</Link>
									</li>
								))}
						</ul>
					</nav>

					<div className={styles.header__search__container}>
						<form className={styles.header__form}>
							<input
								className={styles.header__input}
								type={'text'}
								placeholder={'Search'}
								name={'headerSearch'}
							/>
							<button className={styles.header__btn}>
								<img
									src={search}
									alt='Search icon'
									width={16}
									height={16}
								/>
							</button>
						</form>
					</div>

					<button
						className={styles.hamburger}
						onClick={() => openMenu}>
						<img src={hamburger} alt='Hamburger' />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
