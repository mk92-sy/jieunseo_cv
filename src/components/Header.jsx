export default function Header() {
  return (
    <header>
      <h1>JieunSeo</h1>
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
    </header>
  );
}
