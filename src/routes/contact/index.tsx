import { DefaultBanner } from "../../core/components/layout/DefaultBanner";
import { SectionLayout } from "../../core/components/layout/SectionLayout";
import { ContactForm } from "./components/ContactForm";

enum ContactPageBlocks {
  Contact = "contact",
}

export const ContactPage = () => {
  return (
    <>
      <DefaultBanner title="📩 Contact" />
      <SectionLayout name={ContactPageBlocks.Contact}>
        <div className="container contact-block__container">
          <ContactForm />
        </div>
      </SectionLayout>
    </>
  );
};
