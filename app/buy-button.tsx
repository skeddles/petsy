'use client';

import { useState } from 'react';

export default function BuyButton() {
	let [count, incCount] = useState(0);

	function clickedBuy() {
		incCount(count+1);
		console.log(count);
	}

	return (<>
		<button onClick={clickedBuy}>Count {count}</button>
	</>)
}
