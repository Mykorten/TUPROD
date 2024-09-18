export function MainLoadingScreen({ progress }: { progress: number }) {
	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black z-50">
			<img className={`w-36 cursor-pointer mx-8 md:mx-0 transition-all duration-500 ${progress === 100 ? 'opacity-50' : 'opacity-100'} animate-pulse`} src="/logo.png" alt="Logo" />
		</div>
	);
}