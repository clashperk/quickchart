declare module '@clashperk/chartgen' {
	export function render(
		width: number,
		height: number,
		backgroundColor: string,
		devicePixelRatio: number,
		chart: any,
		buffer: Buffer
	): Promise<Buffer>
}
