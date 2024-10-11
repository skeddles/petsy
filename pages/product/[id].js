import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react';
import BuyButton from '../../app/buy-button.tsx';

export default function Product() {
	const router = useRouter()
	const {id} = router.query
	let [count, incCount] = useState(0);

	function clickedBuy() {
		incCount(count+1);
		console.log(count);
	}

	return (<>
		<Head>
			<title>{id + '- Petsy'}</title>
		</Head>
		<h1>Product: {id}</h1>
		<BuyButton />
	</>)
}
