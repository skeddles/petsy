import { db } from '@vercel/postgres';

const client = await db.connect();

async function destroy () {
	const result = {
		products: await client.sql`DROP TABLE IF EXISTS products`
	};

	return result;
}


export async function GET() {

	try {
	  await client.sql`BEGIN`;
	  const results = await destroy();
	  await client.sql`COMMIT`;
  
	  return Response.json({ message: 'Database destroyed successfully', results });
	} catch (error) {
	  await client.sql`ROLLBACK`;
	  console.error('Failed to destroy database:', error);
	  return Response.json({ error }, { status: 500 });
	}
  }
  