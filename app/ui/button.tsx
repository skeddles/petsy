"use client";

export function Button (props: { children: React.ReactNode}) {
	return (
		<button 
			className="
				rounded-lg text-gray-800 font-bold px-4 py-2 m-2
				hover:bg-gray-200 
				transition-all
				"
			// onClick={()=>props.onClick()}
		>
			{props.children}
		</button>
	)
}