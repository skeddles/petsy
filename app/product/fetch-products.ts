import { sql } from '@vercel/postgres';

type ProductsTable = {
	id: string;
	name: string;
	slug: string;
	price: number;
	thumbnail: string;
	description: string;
};


export async function fetchProducts() {
	try {
		const products = await sql<ProductsTable>`
			SELECT name, price, slug, thumbnail
			FROM products
		`;

		return products.rows;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch products.');
	}
}