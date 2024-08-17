'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Icons} from '@/app/ui/icons';
import clsx from 'clsx';

// Links to appear in the header layout
const links = [
	{ name: 'Home', href: '/', icon: Icons.home },
	{ name: 'Experience', href: '/experience', icon: Icons.experience},
	{ name: 'About Me', href: '/aboutme', icon: Icons.aboutme },
  ];

export default function Header() {
	const pathname = usePathname();

	return (
		<header>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
				<Link
					key={link.name}
					href={link.href}
					className={clsx(
						'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
						{
						'bg-sky-100 text-blue-600': pathname === link.href,
						},
					)}
				>
					<LinkIcon className="w-6" />
					<p className="hidden md:block">{link.name}</p>
				</Link>
				);
			})}
		</header>
	);
}