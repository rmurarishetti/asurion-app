/**
 * Root Layout Component
 * 
 * This component serves as the root layout for the application, incorporating global styles,
 * navigation, and footer components. It is designed to wrap around the main content of each page.
 * 
 * Imports:
 * - Inter font from Google Fonts via the next/font/google package for typography.
 * - Global CSS styles to ensure consistent styling across the application.
 * - Navbar and Footer components to provide consistent navigation and footer across pages.
 * 
 * Constants:
 * - `inter`: Initializes the Inter font with specific subsets (e.g., "latin") for optimized loading.
 * 
 * Metadata:
 * - `metadata`: Contains site-wide metadata such as the title and description, useful for SEO.
 * 
 * Component Structure:
 * - `RootLayout`: A functional component that takes `children` as props, allowing it to wrap around
 *   any page content.
 * - The component structure includes HTML and body tags, which is unusual for React components and
 *   might be specific to Next.js or a particular setup. Typically, React components do not include
 *   these tags directly.
 * - Inside the body, it renders the Navbar component at the top, followed by the main content
 *   (`children`), and the Footer component at the bottom.
 * 
 * Usage:
 * - This layout component is intended to be used as a wrapper for pages in a Next.js application,
 *   providing a consistent layout structure including the header (Navbar) and footer (Footer).
 * - The `children` prop is used to render the specific content of each page within the main layout.
 * 
 * Notes:
 * - The use of raw HTML tags (`<html>`, `<body>`) directly in a React component is unconventional
 *   and typically handled by Next.js in the `_document.js` file. This approach may be specific to
 *   the project's setup or an illustrative example.
 * - The className on the div wrapping the Navbar uses template literals without variables, which
 *   could be simplified or is possibly a placeholder for future dynamic styling.
 */
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asurion.",
  description: "Protection Plans for Phones, Tablets and Laptops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body>
        <div className={``}>
          <div className={`$xl:max-w-full w-full`}>
            <Navbar />
          </div>
        </div>

        <main>{children}</main>
        <Footer />
      </body>
      </UserProvider>
    </html>
  );
}
