import React from "react";
// import Image from "next/image"; // Corrected import

function ChildSafety() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
     

      <h1 className="text-3xl font-bold mb-4">Luvsab Child Safety Policy</h1>
      <p className="max-w-2xl text-center text-lg">
        At <strong>Luvsab</strong>, we are committed to ensuring a safe and secure environment for all users.
        Our AI Girlfriend platform is designed for adults, and we strictly prohibit any use by minors.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Commitment</h2>
      <ul className="list-disc text-lg text-left mt-2 pl-5 space-y-2">
        <li>Strict age verification and compliance with legal standards.</li>
        <li>Proactive monitoring to detect and prevent misuse.</li>
        <li>Collaboration with authorities to report illegal activities.</li>
        <li>Providing users with tools to report safety concerns.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Reporting Concerns</h2>
      <p className="text-lg text-center mt-2">
        If you have any concerns regarding child safety on our platform, please contact us at{" "}
        <a href="mailto:nextzenloom@gmail.com" className="text-blue-400 underline">
        nextzenloom@gmail.com
        </a>
        . We take all reports seriously and act promptly.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Compliance</h2>
      <p className="text-lg text-center mt-2">
        Luvsab complies with all relevant child safety laws and reports to regional and national authorities when required.
      </p>
    </div>
  );
}

export default ChildSafety;
