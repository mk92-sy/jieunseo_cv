import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <header>
        <h1>Jieun Seo</h1>
        {!isDesktop ? (
          <>
            <button
              className="btn-toggle"
              onClick={() => {
                setIsOpenMobileMenu(true);
              }}
              aria-label="open menu"
            >
              <MenuRoundedIcon />
            </button>
          </>
        ) : (
          <nav className="nav">
            <Link to="/">Home</Link>
            <a
              href="/src/assets/etc/cv.pdf"
              target="__blank"
              title="open CV.pdf"
            >
              CV
            </a>
            <Link to="/work">Work Experience</Link>
            <Link to="/research">Research Experience</Link>
          </nav>
        )}
      </header>
      {isOpenMobileMenu && !isDesktop && (
        <nav className="mobile-nav">
          <button
            className="btn-toggle"
            onClick={() => {
              setIsOpenMobileMenu(false);
            }}
            aria-label="closed menu"
          >
            <CloseRoundedIcon />
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="/src/assets/etc/cv.pdf"
                target="__blank"
                title="open CV.pdf"
              >
                CV
              </a>
            </li>
            <li>
              <Link to="/work">Work Experience</Link>
            </li>
            <li>
              <Link to="/research">Research Experience</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
