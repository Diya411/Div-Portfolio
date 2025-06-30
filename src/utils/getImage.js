const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg}', {
	eager: true,
});

export const getImage = (relativePath) => {
	const key = `../assets/${relativePath}`;
	return images[key]?.default || '';
};
