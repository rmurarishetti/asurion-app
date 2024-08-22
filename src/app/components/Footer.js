/**
 * Footer Component
 * 
 * Overview:
 * The Footer component is a React functional component designed to render the footer section of a web application. It is client-side rendered, optimizing performance and user experience. The component is structured to include multiple sections such as "About" and "Company", each containing a list of navigational links.
 * 
 * Key Features:
 * - Responsive Design: Utilizes Tailwind CSS for styling, ensuring the footer is responsive and adapts well to various screen sizes.
 * - Modular Structure: Organized into distinct sections for "About" and "Company", making it easy to expand with additional content or links.
 * - Hover Effects: Links within the footer have hover effects, enhancing the user interface and making the footer visually interactive.
 * 
 * Implementation Details:
 * - The component is wrapped in a `<div>` element, with the `<footer>` tag nested inside. This semantic HTML5 tag is used to represent the footer content of the document or section.
 * - Tailwind CSS classes are extensively used for styling, including setting the text color, width, margin, padding, and flexbox properties for layout and alignment.
 * - Each section within the footer (e.g., "About", "Company") is contained in a `<div>` with a set width and padding, ensuring a consistent layout across different sections.
 * - The section titles are marked up with `<h2>` tags, indicating their importance in the document structure and aiding in accessibility.
 * - Navigation links within each section are organized in a `<nav>` element containing a list (`<ul>`), where each item (`<li>`) holds a link (`<a>`). This structure is beneficial for SEO and improves the website's navigation accessibility.
 * - The links are styled to change color on hover, providing visual feedback to the user.
 * 
 * Usage:
 * This component is intended to be used as the footer for a web application or website. It provides essential navigational links and information about the company in a structured and visually appealing manner.
 * 
 * Example Use Case:
 * In a corporate website, the Footer component could include sections for "About" with links to company news and team introductions, and "Company" with links to regulatory information and other corporate resources. This setup helps users navigate to important information about the company directly from the footer.
 */
"use client";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-800 w-4/5 mx-auto inter">
        <div className="container px-5 pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-gray-900 text-base mb-3">
                About
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Company News
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Meet the Team
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-gray-900 text-base mb-3">
                Company
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Regulatory
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Careers
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-gray-900 text-base mb-3">
                Investor Information
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Investors
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Investor Relations
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-gray-900 text-base mb-3">
                Media
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Roadmap
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
        <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />
        <div className="flex items-center mx-auto text-gray-600 container justify-center md:justify-between py-2">
          <div>
            <span className="font-normal">© 2024 SecuriTrade.</span>
          </div>
          <a
            className="items-center gap-2 hidden md:flex"
            href="#"
            rel="noopener noreferrer"
          >
            <span className="border-b border-transparent hover:border-[#000000] focus-visible:border-[#000000] transition ease-in-out delay-50 duration-100">
              Learn More
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
