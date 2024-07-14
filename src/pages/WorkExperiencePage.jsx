import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function WorkExperiencePage() {
  return (
    <>
      <section>
        <h2 className="mt-3 mb-1 sticky-title">Work Experience</h2>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Clinical Research Associate (Mar 2022 - Current)</h3>
              <h4 className="mt-2">Dt&SanoMedics, Dt&CRO - Seoul</h4>
              <ul className="list mt-2 mb-3">
                <li>
                  Communicate with PM, CRM, other CRAs, Sponsor and site staff
                  as appropriate.
                </li>
                <li>
                  Work in a timely manner in accordance with the agreed budget
                  under the supervision of PM/LM.
                </li>
                <li>
                  Ensure that all required documentation is in place and
                  maintained during study.
                </li>
                <li>
                  Prepare and submit IRB amendment and ensure that IRB is
                  updated regarding protocol amendments, SAE, PD, etc
                </li>
                <li>
                  <strong>
                    Conduct pre-study, study initiation, study monitoring, and
                    study close-out visits.
                  </strong>
                </li>
                <li>Participate and support in audit and inspection.</li>
                <li>
                  Collaborated with clinical study site and sponsor to
                  troubleshoot and provide solutions to study-related issues.
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Registered Nurse (Sep 2021 – Mar 2022)</h3>
              <h4 className="mt-2">K&C Medi-clinic - Seoul</h4>
              <ul className="list mt-2 mb-3">
                <li>
                  Perform Hemodialysis for patients with Chronic Kidney Disease.
                </li>
                <li>
                  Administer medications via oral, IV, intramuscular, and
                  subcutaneous injections and monitored responses.
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Registered Nurse (Aug 2019 - May 2021)</h3>
              <h4 className="mt-2">
                Woorihyosarang Nursing Hospital – Seongnam-si, Gyeonggi-do
              </h4>
              <ul className="list mt-2 mb-3">
                <li>
                  Perform Hemodialysis for patients with Chronic Kidney Disease.
                </li>
                <li>
                  Administer medications via oral, IV, intramuscular, and
                  subcutaneous injections and monitored responses.
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Education Nurse (May 2018 - Dec 2018)</h3>
              <h4 className="mt-2">Kangbuk Samsung Hospital – Seoul</h4>
              <ul className="list mt-2 mb-3">
                <li>
                  Educate patients with Diabetic Mellitus about measuring and
                  controlling blood sugar level in daily life with smart phone
                  application
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Registered Nurse (Nov 2017 - Mar 2018)</h3>
              <h4 className="mt-2">Samsung Medical Center – Seoul</h4>
              <ul className="list mt-2 mb-3">
                <li>
                  Perform Nursing duties in Pediatric Intensive Care Unit.
                </li>
                <li>
                  Administer medications via oral, IV, intramuscular, and
                  subcutaneous injections and monitored responses.
                </li>
                <li>
                  Assess patient with ventilator treatment and evaluate
                  respiratory function
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </>
  );
}
