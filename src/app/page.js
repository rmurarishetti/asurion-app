/**
 * Home Page Component
 *
 * This component serves as the Home page for the application. It utilizes the `Hero` component
 * to display the main content or introductory section of the page.
 *
 * Structure:
 * - The Home component is a functional component that returns a JSX structure.
 * - It wraps the `Hero` component within a `main` HTML element.
 * - The `main` element is styled using Tailwind CSS classes to achieve a flexible,
 *   minimum-height column layout with content justified between the top and bottom,
 *   a transparent background, and bottom padding.
 *
 * Usage:
 * - This component is intended to be used as the main landing page of the application.
 * - It can be further expanded by adding additional sections or components below the `Hero` component.
 */
import Hero from "./components/Hero";
import Business from "./components/Business";
import styles from "./constants/styles";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="flex flex-col min-h-min justify-between bg-transparent pb-10">
      <Hero />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Pricing  />
        </div>
      </div>
    </main>
  );
}
