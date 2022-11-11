import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Content.module.scss';
import getPosts from './../../Lib/getPosts';
import dayjs from 'dayjs';
import { Context } from './../Context/Locatization';
import arrowLeft from './../../Assets/Images/left.svg';
import arrowRight from './../../Assets/Images/right.svg';

const Content = () => {
	let { id } = useContext(Context);
	console.log(id);
	let [info, setInfo] = useState([]);
	console.log(info);

	let [article, setArticle] = useState(null);

	let handle = async (id) => {
		let data = await getPosts(id + '/posts');
		setInfo(data);
	};

	useEffect(() => {
		handle(id);
	}, [id]);

	return (
		<div className={styles.content}>
			<h1 className={styles.content__heading}>Recent posts</h1>
			<div className={styles.content__wrapper}>
				{info.length > 0 &&
					info.map((item) => {
						return (
							<Link
								to={`/category/${item.categoryId}/${item.id}`}
								key={item.id}
								className={styles.content__news}
								onClick={() => setArticle(info[item.id])}>
								<div className={styles.content__news__header}>
									<time className={styles.content__time}>
										{dayjs(item.createdAt).format(
											'MMMM D, YYYY',
										)}
									</time>
									<span className={styles.content__category}>
										{item.id}
									</span>
								</div>
								<h3 className={styles.content__news__title}>
									{item.title}
								</h3>
								<p className={styles.content__news__text}>
									{item.description}
								</p>
								<time className={styles.content__news__time}>
									{item.readTime} minutes read
								</time>
							</Link>
						);
					})}

				<div className={styles.content__pagination}>
					<button className={styles.content__btn}>
						<img src={arrowLeft} alt={'left arrow'} />
					</button>
					<a href='/'>1</a>
					<a href='/'>2</a>
					<a href='/'>3</a>
					<a href='/'>4</a>
					<a href='/'>5</a>
					<button className={styles.content__btn}>
						<img src={arrowRight} alt={'right arrow'} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
