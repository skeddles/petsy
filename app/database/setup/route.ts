import { db } from '@vercel/postgres';

const client = await db.connect();

const placeholderProducts = [
	{
		id: '76d65c26-f784-44a2-ac19-586678f7c2f3',
		name: 'Pre-chewed Tennis Ball',
		slug: 'pre-chewed-tennis-ball',
		price: 5.99,
		thumbnail: 'ball.jpg',
		description: 'A tennis ball that has been pre-chewed for your convenience.'
	},
	{
		id: 'f7b3b3b3-1b3b-4b3b-8b3b-3b3b3b3b3b3b',
		name: 'A Bone I Found',
		slug: 'a-bone-i-found',
		price: 29.99,
		thumbnail: 'bone.jpg',
		description: 'A bone that I found in the yard. It is very good.'
	},
	{
		id: '3b3b3b3b-3b3b-3b3b-3b3b-3b3b3b3b3b3b',
		name: 'Fresh Hairball',
		slug: 'fresh-hairball',
		price: 49.99,
		thumbnail: 'hairball.jpg',
		description: 'A fresh hairball, harvested this morning.'
	},
	{
		id: '3b3b3b3b-3b3b-3b3b-3b3b-3b3bbb3b3b3b',
		name: 'Stick',
		slug: 'stick',
		price: 99.99,
		thumbnail: 'stick.jpg',
		description: 'A stick. It is a good stick.'
	}
];

async function createProducts () {
	await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await client.sql`
		CREATE TABLE IF NOT EXISTS products (
		id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		price DECIMAL(10, 2) NOT NULL,
		slug VARCHAR(255) NOT NULL,
		thumbnail VARCHAR(255) NOT NULL,
		description TEXT
		);
	`;

	const insertedUsers = await Promise.all(
		placeholderProducts.map(async (product) => {
			return client.sql`
			INSERT INTO products (id, name, slug, price, thumbnail, description)
			VALUES (${product.id}, ${product.name}, ${product.slug}, ${product.price}, ${product.thumbnail}, ${product.description})
			ON CONFLICT (id) DO NOTHING;
		  `;
		}),
	);

	return insertedUsers;
}


export async function GET() {

	try {
	  await client.sql`BEGIN`;
	  const addedProducts = await createProducts();
	  await client.sql`COMMIT`;
  
	  return Response.json({ message: 'Database seeded successfully', addedProducts });
	} catch (error) {
	  await client.sql`ROLLBACK`;
	  console.error('Failed to setup database:', error);
	  return Response.json({ error }, { status: 500 });
	}
  }
  