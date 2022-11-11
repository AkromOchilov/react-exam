import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SinglePage.module.scss';
import dayjs from 'dayjs';
import getPosts from './../../Lib/getPosts';

const SinglePage = () => {
	let { categoryId } = useParams();
	console.log(categoryId);
	let { id } = useParams();
	id = Number(id);
	console.log(id);
	let [info, setInfo] = useState([]);

	let handle = async (id) => {
		let data = await getPosts(id + '/posts');
		setInfo(data);
	};

	useEffect(() => {
		handle(categoryId);
	}, [categoryId]);

	return (
		<section className={styles.single}>
			<div className={styles.container}>
				<div className={styles.single__left}>
					<button className={styles.single__left__like}>
						{info[id - 0].likes}
					</button>
					<button className={styles.single__left__share}>
						{info[id - 0].shares}
					</button>
				</div>
				<div className={styles.single__content}>
					<span className={styles.single__category}>
						{info[id - 0].categoryId}
					</span>
					<h2 className={styles.single__title}>
						{info[id - 0].title}
					</h2>
					<div className={styles.single__times}>
						<time className={styles.single__created}>
							{dayjs(info[id - 0].createdAt).format(
								'MMMM D, YYYY',
							)}
						</time>
						<time className={styles.single__read}>
							{info[id - 0].readTime} minutes read
						</time>
					</div>
					<img
						src={info[id - 0].image}
						alt={info[id - 0].description}
						className={styles.single__img}
						width={736}
						height={352}
					/>
					<p className={styles.single__text}>
						{info[id - 0].content}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SinglePage;
