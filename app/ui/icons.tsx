// Lucide
import {
	Zap,
	House,
	ScrollText,
	BookCheck,
	CircleUserRound,
	X,
	Copy,
	ChevronLeft,
	ChevronRight
} from "lucide-react"

export const Icons = {
	sampleLogo: Zap,
	home: House,
	experience: ScrollText,
	skills: BookCheck,
	aboutme: CircleUserRound,
	close: X,
	copy: Copy,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
}

// React Icons
import {IconType} from 'react-icons';

import {
	DiHtml5,
	DiCss3,
	DiMysql
} from "react-icons/di"

import {
	SiJavascript,
	SiPython,
	SiMicrosoftonenote,
	SiPostman
} from "react-icons/si"

// New type to make them indexable
export type ReactIconsType = {
	[key: string]: IconType;
}

export const ReactIcons: ReactIconsType = {
	htmlLogo: DiHtml5,
	cssLogo: DiCss3,
	jsLogo: SiJavascript,
	sqlLogo: DiMysql,
	pythonLogo: SiPython,
	documentation: SiMicrosoftonenote,
	postman: SiPostman
}