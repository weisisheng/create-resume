export interface StyleObject {
	header: Styles
	footer: Styles
	heading: Styles
	title: Styles
	titleMargin: Styles
	subtitle: Styles
	subtitleMargin: Styles
	listExtra: Styles
	listExtraMargin: Styles
	bold: Styles
	skillMargin: Styles
	listMargin: Styles
	soloListMargin: Styles
	skillRating: {
		// ellipse or rect
		type: string
		width: number
		height: number
		x: number
		y: number
		// only for rect
		radius?: number
	}
  [key: string]: Styles | object
}

export interface Styles {
	color?: string
	margin?: number[]
	bold?: boolean
	alignment?: string
	fontSize?: number
	lineHeight?: number
}

export interface Font {
  name: string
  headingSize: number
  titleSize: number
  subtitleSize: number
  defaultSize: number
}

export interface Colors {
  primary: string
  secondary: string
  accent: string
  [key: string]: string
}

export enum PageSizes {
	A4 = 'A4',
	LETTER = 'LETTER',
	LEGAL = 'LEGAL',
}