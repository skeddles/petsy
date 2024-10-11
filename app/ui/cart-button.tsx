import { GrCart } from "react-icons/gr";
import Link from "next/link";

export function CartButton () {
	return (
		<Link href="/cart" className="
			rounded-lg text-gray-800 font-bold px-4 py-2 m-2
			hover:bg-gray-200 
			transition-all
		">
				<GrCart size="32" color="grey" />
		</Link>
	);
}
