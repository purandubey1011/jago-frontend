import React from "react";
import Footer from "../Footer";

const Privacy = () => {
  return (
    <>
    <section className="max-w-5xl pt-[20vh] mx-auto px-4 md:px-8 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Last updated: September 2026
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          At <strong>JaGoCoach™</strong>, your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your
          personal information.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email
          address, phone number, payment details, and any information you
          voluntarily provide through forms or communication.
        </p>

        <h2 className="text-xl font-semibold">2. How We Use Information</h2>
        <p>
          Your information is used to provide services, communicate with you,
          process payments, improve our offerings, and send updates or
          resources. You may opt out of communications at any time.
        </p>

        <h2 className="text-xl font-semibold">3. Data Sharing</h2>
        <p>
          We do not sell or rent your personal data. Information may be shared
          with trusted service providers solely for operational or legal
          purposes.
        </p>

        <h2 className="text-xl font-semibold">4. Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience and analyze
          traffic. You can disable cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data.
          However, no digital transmission is completely secure.
        </p>

        <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices or content.
        </p>

        <h2 className="text-xl font-semibold">7. User Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          information by contacting us.
        </p>

        <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13. We
          do not knowingly collect information from children.
        </p>

        <h2 className="text-xl font-semibold">9. Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically. Changes will be
          posted on this page.
        </p>

        <h2 className="text-xl font-semibold">10. Contact</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us through the website.
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Privacy;
