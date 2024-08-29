"use client";

import { useEffect, useState } from "react";
import Navlinks from "./navlinks";
import {Icons} from "../icons";

export default function Header() {
	const [nav,setNav] = useState(false);
	const [slide,triggerSlide] = useState(false);
	const SiteLogo = Icons.sampleLogo;
	const NavOpen = Icons.chevronLeft;
	const NavClose = Icons.close;

	const handleSideMenu = () => {
		setNav(!nav);
		triggerSlide(true);

		setTimeout(() => {
			triggerSlide(false);
		}, 500);
	}

	// Be sure to turn off the nav if window is expanded
	const handleResize = () => {
		if (window.innerWidth >= 640) {
			setNav(false);
		}
	}

	// Listener for window resizing
	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	})

	return (
		<header className="bg-gray-200">
			<div className="h-full px-4 flex flex-row items-center justify-between sm:justify-center">
				<div className="flex p-4">
					<SiteLogo className="w-10 h-10"/>
				</div>
			
				<div className="hidden sm:flex flex-row grow items-center justify-center">
					<Navlinks/>
				</div>

				<div
					onClick={handleSideMenu}
					className="p-4 sm:hidden"
				>
					{nav ? <NavClose className="w-10 h-10" /> : <NavOpen className="w-10 h-10" />}
				</div>
			</div>
			{nav && (
				<div className={`${slide ? 'animate-slide-in-from-above pointer-events-none cursor-default' : ''}`}>
					<Navlinks/>
				</div>
			)}
		</header>
	);
}