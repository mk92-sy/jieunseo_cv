import ProfileImage from "../assets/images/profile.jpeg";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
export default function MainPage() {
  return (
    <>
      <section className="hello">
        <div className="d-flex">
          <div className="left">
            <img src={ProfileImage} alt="profile image" />
          </div>
          <div className="right">
            <div className="sticky-title">
              <h2>Jieun Seo</h2>
              <h3>Clinical Research Associate</h3>
            </div>
            <h3 className="sticky-sub-title mt-2 mb-1">
              <WavingHandRoundedIcon />
              &nbsp;SUMMARY
            </h3>
            <p>
              Jieun has 2 year and 4 months experience in Clinical Research
              Associate with Dt&SanoMedics and Dt&CRO. Jieun has worked across a
              range of therapeutic areas including Hepatobiliary and Pancreatic
              Surgery, Dermatology, Burn Surgery and Oncology.
            </p>
            <p>
              Before working as a CRA, Jieun worked as a Registered Nurse at
              Pediatric Intensive Care Unit, Diabetic Mellitus Education Center
              and Artificial Kidney Unit.{" "}
            </p>
            <p className="mb-3">
              Jieun has good communication skill that makes her effectively
              interact with Study team members and site staffs. In addition, her
              adaptability, integrity, and persistence are one of the great
              advantages of working as a CRA.
            </p>
            <h3 className="sticky-sub-title mt-2 mb-1">
              <DriveFileRenameOutlineRoundedIcon />
              &nbsp;Skills
            </h3>
            <ul className="list mb-3">
              <li>Phase Ⅱ, Ⅲ, Ⅳ, Medical Device study</li>
              <li>
                <strong>Therapeutic areas</strong>: Hepatobiliary and Pancreatic
                Surgery (Liver Transplantation), Dermatology (Mid-face Volume,
                Nasolabial Fold), Burn surgery (Second-degree Burn), Oncology
                (Prostate Cancer)
              </li>
              <li>EDC Systems: CRScube, Medidata</li>
            </ul>
            <h3 className="sticky-sub-title mt-2 mb-1">
              <SchoolRoundedIcon />
              &nbsp;Education
            </h3>
            <ul className="list mb-3">
              <li>
                Degree - Bachelor Hanyang University / Seoul Department of
                Nursing Mar 2013 – Feb 2017
              </li>
            </ul>
            <h3 className="sticky-sub-title mt-2 mb-1">
              <BadgeRoundedIcon />
              &nbsp;License
            </h3>
            <ul className="list mb-3">
              <li>Registered Nurse 377144, Korea</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
