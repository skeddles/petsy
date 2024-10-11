
import Link from "next/link";
import { Search } from "./search";
import { Button } from "./button";
import { CartButton } from "./cart-button";


export function SiteHeader () {
	return (
		<header className="flex my-2 mx-auto max-w-4xl items-center">
			<h1 className="text-4xl text-brand font-bold mr-4">
				<Link href="/">
					Petsy
				</Link>
			</h1>

			<Search />
			<Button>Sign in</Button>
			<CartButton />
		</header>
	);
}