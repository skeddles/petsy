import Image from 'next/image'
import Link from 'next/link'

interface Product {
	name: string;
	price: number;
	slug: string;
	thumbnail: string;
	description: string;
}

export function ProductThumbnail({ product }: { product: Product }) {
	return (
		<Link href={"/product/"+product.slug}
			className=""
		>
		<div className="w-64 m-4 hover:bg-gray-200 p-4 rounded-lg border-b-2 hover:border-gray-300 transition-all">
			<Image
				src={"/"+product.thumbnail}
				width={256}
				height={256}
				alt={"Buy "+product.name+" on Petsy"}
				className="rounded-lg"
			/>
			<h2>{product.name}</h2>
			<div className="font-bold">${product.price}</div>
		</div>
		</Link>
	)
}