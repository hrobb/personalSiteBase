'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Icons} from '@/app/ui/icons';
import clsx from 'clsx';

// Links to appear in the header layout
const links = [
	{ name: 'Home', href: '/', icon: Icons.home },
	{ name: 'Experience', href: '/experience', icon: Icons.experience },
	{ name: 'Projects', href: '/projects', icon: Icons.projects },
	{ name: 'Skills', href: '/skills', icon: Icons.skills },
	{ name: 'About Me', href: '/aboutme', icon: Icons.aboutme },
  ];

export default function Navlinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex w-full sm:w-32 items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium transition transition-colors hover:bg-sky-100/70 hover:text-blue-600/70 sm:h-12 sm:p-2 sm:px-3',
							pathname === link.href ? 'bg-gray-400/10' : 'bg-transparent'
						)}
					>
						<LinkIcon className="w-8" />
						<p className="">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}