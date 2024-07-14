import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <header>
        <h1>JieunSeo</h1>
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
            <a href="/">Home</a>
            <a
              href="/src/assets/etc/CV_Jieun Seo.pdf"
              target="__blank"
              title="open CV.pdf"
            >
              CV
            </a>
            <a href="/work-experience">Work Experience</a>
            <a href="/research-experience">Research Experience</a>
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
              <a href="/">Home</a>
            </li>
            <li>
              <a
                href="/src/assets/etc/CV_Jieun Seo.pdf"
                target="__blank"
                title="open CV.pdf"
              >
                CV
              </a>
            </li>
            <li>
              <a href="/work-experience">Work Experience</a>
            </li>
            <li>
              <a href="/research-experience">Research Experience</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
