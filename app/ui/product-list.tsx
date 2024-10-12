
import { fetchProducts } from '../product/fetch-products';
import { ProductThumbnail } from '../ui/product-thumbnail';

export async function ProductList() {

	const products = await fetchProducts();

	return (<div className="flex flex-wrap max-w-4xl mx-auto mt-8">
		{products.map((product, i) => {
            return (
				<ProductThumbnail product={product} key={i}/>
			);
		})}
	</div>)
}