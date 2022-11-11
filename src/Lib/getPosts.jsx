const getPosts = async (id) => {
	try {
		let rawData = await fetch(
			`https://63566a79a2d1844a97742c99.mockapi.io/category/${id}`,
		);
		let data = await rawData.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getPosts;
