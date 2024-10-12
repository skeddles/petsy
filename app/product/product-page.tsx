import Image from 'next/image';
import {Button} from '../ui/button';

export function ProductPage({product}: {product: any}) {
	return (
		<div className="max-w-4xl mx-auto mt-8">
			<h1>{product.name}</h1>
			<div className="flex">
				<Image
					src={"/"+product.thumbnail}
					width={600}
					height={500}
					alt="{product.name}"
					className="w-[600px] h-2xl rounded-xl object-cover"
				/>
				<div>
					<div className="font-bold text-2xl">${product.price}</div>
					<p>{product.description}</p>
					<div className="flex justify-center items-center mt-4">
						<Button>Buy Now</Button>
						<Button>Add to Cart</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
