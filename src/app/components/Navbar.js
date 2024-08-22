/**
 * Navbar Component
 *
 * Overview:
 * The Navbar component is a React functional component designed for use in a Next.js application. It utilizes client-side rendering for optimal performance and user experience. The component displays a navigation bar at the top of the page, including a logo and a set of navigational links defined in the `NavLinks` constant. The navbar's appearance and behavior are responsive, adapting to different screen sizes.
 *
 * Key Features:
 * - Dynamic Route Highlighting: Utilizes the `usePathname` hook from Next.js to determine the current route and highlight the corresponding navigation link.
 * - Responsive Design: Tailored to adapt to various screen sizes using Tailwind CSS, including specific styles for small screens (e.g., `sm:flex hidden`).
 * - Custom Logo Display: Incorporates an Image component from Next.js to display a custom logo, enhancing brand visibility.
 * - External Style Reference: Uses a `styles` object imported from "../constants/styles" for consistent styling across components.
 * - Hover Effects: Navigation links change color on hover, improving user interaction and visual feedback.
 *
 * Implementation Details:
 * - The component structure begins with a `<header>` tag, indicating its role as a page header.
 * - A `<nav>` element is used to define the navigation area, applying Tailwind CSS classes for styling and layout, including responsiveness and fixed positioning at the top of the viewport.
 * - The logo is rendered using the Next.js Image component for optimized loading and performance. It is placed inside a flex container alongside the site title, which is linked to the homepage using the Next.js Link component.
 * - Navigation links are dynamically generated from the `NavLinks` constant, each wrapped in a `<li>` element. These links are styled conditionally based on the current route, highlighting the active link.
 * - Conditional styling is also applied to the bottom border of the active navigation link, providing a visual cue to indicate the current page.
 *
 * Usage:
 * This component is intended for use as a global navigation bar in a Next.js web application. It provides users with easy access to different sections of the site, enhancing the overall navigation experience.
 *
 **/

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../constants/styles";
import { usePathname } from "next/navigation";
import { NavLinks } from "../constants";
import { Icon } from "../../../public";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const currentRoute = usePathname();
  const { user, isLoading } = useUser();

  return (
    <header>
      <div className={``}>
        <nav
          className={`${styles.paddingX} xl:max-w-full w-full fixed top-0 flex justify-between py-4 items-center navbar z-30 bg-transparent px-12`}
        >
          <div className={`w-1/2 flex justify-start`}>
            <Link href={"/"}>
              <Image src={Icon} alt="logo" className="w-[54px] h-[52px]" />
            </Link>
          </div>
          <ul className="list-none sm:flex hidden justify-end flex-1 pr-1">
            {NavLinks.slice(0, user ? 1 : NavLinks.length).map((nav, i) => (
              <li
                key={nav.id}
                className={`font-playfair font-normal cursor-pointer text-[14px] ${
                  i === NavLinks.length - 1 ? "mr-0" : "mr-10"
                } text-[#292929] hover:text-[#FFFFFF] mr-10 ${
                  currentRoute === `/#${nav.id}`
                    ? "border-b-4 border-black"
                    : "border-b-4 border-transparent"
                }`}
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
            {user && (
              <li className="font-playfair font-normal cursor-pointer items-center text-[14px] text-[#292929] hover:text-[#FFFFFF] mr-10">
                <Link href={"/user/"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li className="font-playfair font-normal cursor-pointer text-[14px] text-[#292929] hover:text-[#FFFFFF]">
                <Link href={"/api/auth/logout"}>Sign Out</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
