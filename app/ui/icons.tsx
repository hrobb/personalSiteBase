// Lucide
import {
	Zap,
	House,
	ScrollText,
	BookCheck,
	CircleUserRound,
	X,
	Copy,
	Code,
	Calendar,
	MapPin,
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
	code: Code,
	timeframe: Calendar,
	location: MapPin,
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
	SiGithub,
	SiLinkedin,
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
	githubLogo: SiGithub,
	linkedInLogo: SiLinkedin,
	htmlLogo: DiHtml5,
	cssLogo: DiCss3,
	jsLogo: SiJavascript,
	sqlLogo: DiMysql,
	pythonLogo: SiPython,
	documentation: SiMicrosoftonenote,
	postman: SiPostman
}