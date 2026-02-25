import { useState } from "react";
import type { FormEvent } from "react";
import Section from "../components/Section";
import { siteContent } from "../content/siteContent";

type FormState = {
  name: string;
  email: string;
};

type FormErrors = {
  name?: string;
  email?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FinalCTASection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Enter your full name.";
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", email: "" });
  };

  return (
    <Section id="final-cta" className="final-cta-section">
      <div className="final-cta-band">
        <div>
          <p className="section-eyebrow">Final CTA</p>
          <h2>{siteContent.finalCta.title}</h2>
          <p className="section-description">{siteContent.finalCta.description}</p>
          <div className="inline-cta">
            <a href={siteContent.finalCta.primaryCta.href} className="btn btn-primary">
              {siteContent.finalCta.primaryCta.label}
            </a>
            <a href={siteContent.finalCta.secondaryCta.href} className="btn btn-outline">
              {siteContent.finalCta.secondaryCta.label}
            </a>
          </div>
        </div>
        <form className="waitlist-form" onSubmit={onSubmit} noValidate>
          <h3>Join Waitlist</h3>
          <label htmlFor="waitlist-name">Name</label>
          <input
            id="waitlist-name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "waitlist-name-error" : undefined}
            placeholder="Your name"
            required
          />
          {errors.name && (
            <p id="waitlist-name-error" className="field-error" role="alert">
              {errors.name}
            </p>
          )}

          <label htmlFor="waitlist-email">Email</label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "waitlist-email-error" : undefined}
            placeholder="you@company.com"
            required
          />
          {errors.email && (
            <p id="waitlist-email-error" className="field-error" role="alert">
              {errors.email}
            </p>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          {submitted && (
            <p className="field-success" role="status">
              Thanks. You are on the JOI waitlist.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

export default FinalCTASection;
