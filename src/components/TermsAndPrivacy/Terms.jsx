import React from "react";
import Footer from "../Footer";

const Terms = () => {
  return (
    <>
    <section className="max-w-5xl pt-[20vh] mx-auto px-4 md:px-8 py-16 text-gray-800 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Last updated: September 2026
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          Welcome to <strong>JaGoCoach™</strong>. By accessing or using this
          website, services, programs, or content, you agree to be bound by
          these Terms & Conditions. If you do not agree, please do not use our
          services.
        </p>

        <h2 className="text-xl font-semibold">1. Services</h2>
        <p>
          JaGoCoach provides coaching, mentoring, educational resources, and
          related services for personal and professional development. These
          services are not a substitute for medical, psychological, legal, or
          financial advice.
        </p>

        <h2 className="text-xl font-semibold">2. Eligibility</h2>
        <p>
          By using this website, you confirm that you are at least 18 years old
          or accessing the website under the supervision of a legal guardian.
        </p>

        <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
        <p>
          You agree not to misuse the website, attempt unauthorized access,
          copy or redistribute content, or engage in any activity that may
          harm the platform or its users.
        </p>

        <h2 className="text-xl font-semibold">4. Payments & Refunds</h2>
        <p>
          Payments for paid services or programs are final unless otherwise
          stated. Any refund policy will be communicated at the time of
          purchase.
        </p>

        <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
        <p>
          All content, including text, graphics, logos, and materials, is the
          property of JaGoCoach™ and may not be used without written
          permission.
        </p>

        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
        <p>
          JaGoCoach shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of our services or
          website.
        </p>

        <h2 className="text-xl font-semibold">7. Confidentiality</h2>
        <p>
          Coaching sessions are conducted with confidentiality; however,
          JaGoCoach cannot guarantee absolute security of digital
          communications.
        </p>

        <h2 className="text-xl font-semibold">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to our services
          if these Terms are violated.
        </p>

        <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
        <p>
          These Terms may be updated from time to time. Continued use of the
          website constitutes acceptance of any changes.
        </p>

        <h2 className="text-xl font-semibold">10. Governing Law</h2>
        <p>
          These Terms are governed by and interpreted in accordance with the
          laws of India.
        </p>

        <h2 className="text-xl font-semibold">11. Contact</h2>
        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us through the website.
        </p>
      </div>


      
    </section>
    <Footer />
    </>
  );
};

export default Terms;
