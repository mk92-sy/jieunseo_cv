import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
useState;
export default function Footer() {
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  return (
    <>
      <ul className="shortcut">
        <li
          onMouseEnter={() => {
            setPhone(true);
          }}
          onMouseLeave={() => {
            setPhone(false);
          }}
        >
          {phone && <span>Phone</span>}
          <a href="tel:010-8261-7785">
            <PhoneAndroidIcon />
          </a>
        </li>
        <li
          onMouseEnter={() => {
            setEmail(true);
          }}
          onMouseLeave={() => {
            setEmail(false);
          }}
        >
          {email && <span>E-mail</span>}
          <a href="mailto:dms31875@gmail.com">
            <EmailIcon />
          </a>
        </li>
      </ul>
      <footer>
        <p className="copyright">© 2024 by jieun seo</p>
      </footer>
    </>
  );
}
