import React from "react";

function Footer() {
  const FooterYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary footer-center">
      <div>
        <span className="foot"></span>
        <span className="te">
          GIT FINDER &copy; All Fucking Right's Reserved {FooterYear}
        </span>
        <span className="foot"></span>
      </div>
    </footer>
  );
}

export default Footer;
