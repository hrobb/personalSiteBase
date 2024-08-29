'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Icons} from '@/app/ui/icons';
import clsx from 'clsx';

// Links to appear in the header layout
const links = [
	{ name: 'Home', href: '/', icon: Icons.home },
	{ name: 'Experience', href: '/experience', icon: Icons.experience},
	{ name: 'Skills', href: '/skills', icon: Icons.skills},
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
							'flex w-full items-center justify-center gap-2 rounded-sm bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100/70 hover:text-blue-600/70 sm:h-14 sm:p-2 sm:px-3',
							{
							'bg-gray-200': pathname === link.href
							},
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