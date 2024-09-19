export function MainTitle({ title, isLoading }: { title: string, isLoading: boolean }) {
	return (
		<h1
			className={`text-gray-200 duration-500 hover:drop-shadow-main-title font-display text-2xl md:text-7xl hover:text-gray-300 relative z-10 whitespace-nowrap ${isLoading ? "animate-pulse" : ""}`}
			style={{ fontFamily: "Phonk" }}
		>
			{title}
		</h1>
	);
}