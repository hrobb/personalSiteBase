import Link from 'next/link';
import { ReactIcons } from '../icons';
import { IconType } from 'react-icons';


export default function Footer() {
	const GithubIcon: IconType = ReactIcons.githubLogo;
	const githubLink = "https://www.github.com";

	const LinkedInIcon: IconType = ReactIcons.linkedInLogo;
	const linkedInLink = "https://www.linkedin.com";

	return (
		<footer className='p-6 bg-gray-300 border-t border-black'>
			<div className='flex justify-between items-center'>
				<p className='pl-4'>Copyright © {new Date().getFullYear()}</p>
				<div className='flex gap-4 pr-4'>
					<a href={githubLink} className='cursor-pointer'>
						<GithubIcon className='h-8 w-8'/>
					</a>
					<a href={linkedInLink} className='cursor-pointer'>
						<LinkedInIcon className='h-8 w-8 cursor-pointer'/>
					</a>
				</div>
			</div>
		</footer>
	);
}