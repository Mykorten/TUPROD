const MOBILE_BREAKPOINT = 640;

export function useIsMobile() {
	return window.innerWidth < MOBILE_BREAKPOINT;
}