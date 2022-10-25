import React from "react";
import Image from "next/image";
import prof from "../public/profile.jpg";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";

export default function ProfileSection() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>Short introduction about me</SectionParagraph>
        <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
          <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
            <Image src={prof} height={395} width={264} alt="img-profile" />
          </div>
          <div className="md:w-7/12 w-full px-10">
            <p className="text-lg leading-relaxed">
              Hello!, My name is Wahyu Prasetyo and I enjoy creating things that
              live on internet. For all the things I have tried I finally
              arrived to another new journey, early 2022 must be the time that I
              interested in IT&apos;s world or coding, especially on Frontend
              Web Development, with no knowledge on that field I tried to
              self-taught myself on Youtube, but for someone that self-taught
              sometimes you can lost your motivation or path. I decided to join
              an online bootcamp at Fazztrack, there I have taught to many
              things like building a habit to actually code, reporting your
              progress everyday at 5 pm, building web and mobile app project and
              lastly softskill coaching for your self development.
            </p>

            <p className="text-lg mt-6 leading-relaxed">
              And now I graduated, I&apos;m now looking for a junior front-end developer position to
              finally kick start my career and learn among professionals..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
