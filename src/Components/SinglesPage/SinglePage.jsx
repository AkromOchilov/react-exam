import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SinglePage.module.scss';
import dayjs from 'dayjs';
import getPosts from './../../Lib/getPosts';

const SinglePage = () => {
	let { categoryId } = useParams();
	let url = useParams();
	let [info, setInfo] = useState([]);
	console.log(info);

	let handle = async (id) => {
		let data = await getPosts(id + '/posts');
		let one = {};
		data.forEach((item) => {
			if (item.id === url.id) {
				one = item;
			}
		});
		setInfo(one);
	};

	useEffect(() => {
		handle(categoryId);
	}, [categoryId]);

	return (
		<section className={styles.single}>
			<div className={styles.container}>
				<div className={styles.single__left}>
					<button className={styles.single__left__like}>
						{info.likes}
					</button>
					<button className={styles.single__left__share}>
						{info.shares}
					</button>
				</div>
				<div className={styles.single__content}>
					<span className={styles.single__category}>
						{info.categoryId}
					</span>
					<h2 className={styles.single__title}>{info.title}</h2>
					<div className={styles.single__times}>
						<time className={styles.single__created}>
							{dayjs(info.createdAt).format('MMMM D, YYYY')}
						</time>
						|
						<time className={styles.single__read}>
							{info.readTime} minutes read
						</time>
					</div>
					<img
						src={info.image}
						alt={info.description}
						className={styles.single__img}
						width={736}
						height={352}
					/>
					<p className={styles.single__text}>{info.content}</p>
				</div>
			</div>
		</section>
	);
};

export default SinglePage;
