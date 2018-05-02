export class Menu {
	display: string;
	href: string;
	tooltip: string;

	constructor(dis: string, href: string, tt: string) {
		this.display = dis;
		this.href = href;
		this.tooltip = tt;
	}
}