"use client";

import { useParams } from 'next/navigation';
import { fetchProductBySlug } from '../fetch-product';
import { Suspense } from 'react';
import {ProductPage} from '../product-page';

export default async function Page() {
	const urlParams = useParams();
	const slug = Array.isArray(urlParams.slug) ? urlParams.slug[0] : urlParams.slug;
	const product = await fetchProductBySlug(slug);

	if (!product) {
		return <div className="page"><h1>Product Not Found</h1></div>;
	}

	return (
		<Suspense fallback={"loading"}>
        	<ProductPage product={product} />
     	</Suspense>
	);
}
