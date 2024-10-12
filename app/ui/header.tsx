
import Link from "next/link";
import { Search } from "./search";
import { Button } from "./button";
import { CartButton } from "./cart-button";
import { AccountButton } from "../account/account-button";
// import {signIn} from 'next-auth';

import {authOptions} from '../api/auth/[...nextauth]/route'
import {getServerSession} from 'next-auth/next';

export async function SiteHeader () {
	const session = await getServerSession(authOptions);
	
	return (
		<header className="flex my-2 mx-auto max-w-4xl items-center">

				<Link href="/" className="text-4xl text-brand font-bold mr-4">
					Petsy
				</Link>


			<Search />
			{session ? (<>
				<CartButton />
				<AccountButton session={session} />
			</>) : (<>
				<a href="/api/auth/signin" className="button">Sign In</a>
				<CartButton />
			</>)}

		</header>
	);
}