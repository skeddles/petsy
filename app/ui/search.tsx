

import { GrFormSearch } from "react-icons/gr";

export function Search () {
	return (
		<div className="m-4 border-2 p-2 rounded-xl flex-grow relative">
			<input type="text" placeholder="Search Petsy" className="pl-10 focus:outline-none" />
			<GrFormSearch size="32" color="grey" className="absolute left-3 top-1/2 -translate-y-1/2"/> 
		</div>
	);
}