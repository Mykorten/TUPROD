export function PageDisplay({ children, footer }: { children: React.ReactNode, footer: React.ReactNode }) {
		return (
			<div className="bg-black min-h-screen overflow-hidden flex flex-col justify-between pb-48">
					<div className="flex-grow overflow-hidden">
							{children}
					</div>
					{footer}
			</div>
	);
}