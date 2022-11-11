import React from 'react';
import styles from './Footer.module.scss';
import logo from './../../Assets/Images/footer.svg';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__inner}>
					<a className={styles.footer__logo__link}>
						<img
							src={logo}
							alt={'Footer logo'}
							className={styles.footer__logo}
							width={182}
							height={70}
						/>
					</a>

					<div className={styles.footer__nav}>
						<div className={styles.footer__socials}>
							<h3 className={styles.footer__socials__title}>
								Fight with me on:
							</h3>
							<ul className={styles.footer__list}>
								<li className={styles.footer__list__item}>
									<a
										href='https://twitter.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Twitter
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://instagram.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Instagram
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://telegram.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Telegram
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://youtube.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										You Tube
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://figma.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Figma
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.footer__socials}>
							<h3 className={styles.footer__socials__title}>
								What i have done:
							</h3>
							<ul className={styles.footer__list}>
								<li className={styles.footer__list__item}>
									<a
										href='https://twitter.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Xalq kutubxonasi
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://twitter.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Websitee
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://twitter.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Website
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://playmarket.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Play market
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://appstore.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										App store
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.footer__socials}>
							<h3 className={styles.footer__socials__title}>
								Contact
							</h3>
							<ul className={styles.footer__list}>
								<li className={styles.footer__list__item}>
									<a
										href='https://appstore.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Blog
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://appstore.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Dribbble
									</a>
								</li>
								<li className={styles.footer__list__item}>
									<a
										href='https://appstore.com'
										className={styles.footer__list__link}
										target={'_blank'}>
										Behance
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
