import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCards";
import javascript from "../public/javascript.svg";
import html from "../public/html-5.svg";
import css from "../public/css-3.svg";
import react from "../public/react.svg";
import bootstrap from "../public/bootstrap.svg";

export default function SkillsSection() {
  return (
    <section className="py-20 bg-primarygray" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>
          Here are a few technologies I&apos;ve been working with recently
        </SectionParagraph>

        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="Javascript" image={javascript} />
          </div>

          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="HTML" image={html} />
          </div>

          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard name="CSS" image={css} />
          </div>

          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard name="React" image={react} />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard name="Bootstrap" image={bootstrap} />
          </div>
        </div>
      </div>
    </section>
  );
}
