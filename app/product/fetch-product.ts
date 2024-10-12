import { sql } from '@vercel/postgres';

type ProductsTable = {
	id: string;
	name: string;
	slug: string;
	price: number;
	thumbnail: string;
	description: string;
};


export async function fetchProduct() {
	try {
		const products = await sql<ProductsTable>`
			SELECT id, name, price, slug, thumbnail, description
			FROM products
			LIMIT 1
		`;

		return products.rows[0];
	} catch (error) {
		console.error('Failed to fetch single product:', error);
		throw new Error('Failed to fetch product.');
	}
}

export async function fetchProductBySlug(slug:string) {
	try {
		const products = await sql<ProductsTable>`
			SELECT id, name, price, slug, thumbnail, description
			FROM products
			WHERE slug = ${slug}
			LIMIT 1
		`;

		return products.rows[0];
	} catch (error) {
		console.error('Failed to fetch single product:', error);
		throw new Error('Failed to fetch product.');
	}
}