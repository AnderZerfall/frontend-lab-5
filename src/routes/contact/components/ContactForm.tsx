import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../../../core/components/button/Button";
import { CheckboxField } from "../../../core/components/form/checkbox/CheckboxField";
import {
  SelectField,
  type SelectOption,
} from "../../../core/components/form/select/SelectField";
import { TextareaField } from "../../../core/components/form/textarea/TextareaField";
import type { ContactFormData } from "../models/ContactFormData";

import "./Contact.css";
import { InputField } from "../../../core/components/form/input/InputField";

interface FieldsetProps {
  formData: ContactFormData;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
}

const PersonalInfoFieldset = ({ formData, onChange }: FieldsetProps) => {
  const educationOptions: SelectOption[] = [
    { value: "", label: "Select your education" },
    { value: "complete", label: "Complete" },
    { value: "incomplete", label: "Incomplete" },
    { value: "higher", label: "Higher" },
    { value: "professional", label: "Professional" },
  ];

  const interestsOptions: SelectOption[] = [
    { value: "scientist", label: "Scientist" },
    { value: "investor", label: "Investor" },
    { value: "promoter", label: "Promoter" },
    { value: "civil_servant", label: "Civil Servant" },
  ];

  return (
    <fieldset className="contact-block__form-group contact-block__personal-info">
      <legend>Personal Information</legend>

      <InputField
        label="Full Name"
        id="fullName"
        placeholder="John Doe"
        value={formData.fullName}
        onChange={onChange}
        required
      />

      <InputField
        label="E-mail"
        id="email"
        type="email"
        placeholder="john.doe@example.com"
        value={formData.email}
        onChange={onChange}
        required
      />

      <InputField
        label="Age"
        id="age"
        type="number"
        placeholder="24"
        min="0"
        max="100"
        value={formData.age}
        onChange={onChange}
        required
      />

      <SelectField
        label="Education"
        id="education"
        options={educationOptions}
        value={formData.education}
        onChange={onChange}
        required
      />

      <SelectField
        label="Interests"
        id="interests"
        options={interestsOptions}
        multiple
        size={4}
        value={formData.interests}
        onChange={onChange}
        required
      />
    </fieldset>
  );
};

const FeedbackFieldset = ({ formData, onChange }: FieldsetProps) => {
  const purposeOptions: SelectOption[] = [
    { value: "", label: "Select a purpose" },
    { value: "collaboration", label: "Collaboration" },
    { value: "complaint", label: "Complaint about copyright infringement" },
    { value: "suggestion", label: "Suggestion" },
    { value: "error_report", label: "Error report" },
  ];

  return (
    <fieldset className="contact-block__form-group contact-block__feedback">
      <legend>Feedback</legend>

      <SelectField
        label="Feedback Purpose"
        id="purpose"
        options={purposeOptions}
        value={formData.purpose}
        onChange={onChange}
        required
      />

      <TextareaField
        label="Details"
        id="details"
        maxLength={500}
        rows={5}
        placeholder="Provide more details here..."
        value={formData.details}
        onChange={onChange}
        className="max-width: 100%; max-height: 200px"
      />
    </fieldset>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    age: "",
    education: "",
    interests: [],
    purpose: "",
    details: "",
    consent: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (target.multiple && target instanceof HTMLSelectElement) {
      const values = Array.from(target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData((prev) => ({ ...prev, [name]: values }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <form className="contact-block__form" onSubmit={handleSubmit}>
      <PersonalInfoFieldset formData={formData} onChange={handleChange} />
      <FeedbackFieldset formData={formData} onChange={handleChange} />
      <CheckboxField
        id="consent"
        label="I agree to the processing of my information"
        checked={formData.consent}
        onChange={handleChange}
        required
        className="contact-block__consent"
      />
      <Button type="submit" variant="accent">
        Submit Feedback
      </Button>
    </form>
  );
};
