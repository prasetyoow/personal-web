import ContactItem from "./ContactItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import mail from "../public/mail.svg";
import phone from "../public/phone.svg";
import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";
import Field from "./Field";
import Button from "./Button";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="bg-primarygray flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>How to contact me.</SectionParagraph>

            <ContactItem
              icon={mail}
              label="Mail"
              value="praztamer@gmail.com"
              className="mt-10"
            />
            <ContactItem
              icon={phone}
              label="Phone"
              value="+62 896 1834 3727"
              className="mt-6"
            />
            <ContactItem
              icon={instagram}
              label="Instagram"
              href="https://www.instagram.com/prasetyoow/"
              value="@prasetyoow"
              className="mt-6"
            />
            <ContactItem
              icon={linkedin}
              label="Linkedin"
              href="https://www.linkedin.com/in/wprasetyoow/"
              value="@wprasetyoow"
              className="mt-6"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Name" name="Name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
