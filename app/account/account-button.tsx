
import Link from "next/link";


export function AccountButton ({session}) {
	return <Link 
		href="/account"
		className="text-sm font-bold text-gray-600 button"
		>
	

		{session?.user?.name}
	</Link>
}