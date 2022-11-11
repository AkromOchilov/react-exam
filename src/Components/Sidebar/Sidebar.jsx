import React from 'react';
import styles from './Sidebar.module.scss';
import facebook from './../../Assets/Images/facebook.svg';
import github from './../../Assets/Images/github.svg';
import twitter from './../../Assets/Images/twitter.svg';
import linkedin from './../../Assets/Images/linkedin.svg';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h2 className={styles.sidebar__title}>What i do!</h2>
			<p className={styles.sidebar__text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
				aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
				rutrum augue erat ac eros. Cras ultricies mattis convallis.
			</p>

			<button className={styles.sidebar__btn}>Explore me</button>

			<ul className={styles.sidebar__list}>
				<li className={styles.sidebar__item}>
					<a
						href='https://facebook.com'
						className={styles.sidebar__link}
						target={'_blank'}
						rel={'noreferrer'}>
						<img
							src={facebook}
							alt='Facebook logo'
							className={styles.sidebar__img}
							width={20}
							height={20}
						/>
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a
						href='https://github.com'
						className={styles.sidebar__link}
						target={'_blank'}
						rel={'noreferrer'}>
						<img
							src={github}
							alt='Github logo'
							className={styles.sidebar__img}
							width={20}
							height={20}
						/>
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a
						href='https://twitter.com'
						className={styles.sidebar__link}
						target={'_blank'}
						rel={'noreferrer'}>
						<img
							src={twitter}
							alt='Twitter logo'
							className={styles.sidebar__img}
							width={20}
							height={20}
						/>
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a
						href='https://linked.com'
						className={styles.sidebar__link}
						target={'_blank'}
						rel={'noreferrer'}>
						<img
							src={linkedin}
							alt='Linkedin logo'
							className={styles.sidebar__img}
							width={20}
							height={20}
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
