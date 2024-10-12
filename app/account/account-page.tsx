
import Link from "next/link";

export function AccountPage ({session}) {
	return <div className="page">
		<h1>{session?.user?.name}'s Account</h1>
		<p>You are signed in! </p>
		<Link href="/api/auth/signout" className="button">Sign Out</Link>
	</div>
}