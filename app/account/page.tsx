
import {authOptions} from '../api/auth/[...nextauth]/route'
import {getServerSession} from 'next-auth/next';
import {AccountPage} from './account-page'

export default async function Account() {
	const session = await getServerSession(authOptions);

	return (<>
		{session ? (
			<AccountPage session={session} />
		) : (
			<div className="page">
			<p>You are not signed in.</p>
			</div>
		)}
	</>);
}
