export function MainTitle({ title }: { title: string }) {
	return (
		<h1
			className="text-gray-200 duration-500 font-display text-2xl md:text-7xl hover:text-gray-300 relative z-10 whitespace-nowrap"
			style={{ fontFamily: "Phonk" }}
		>
			{title}
		</h1>
	);
}