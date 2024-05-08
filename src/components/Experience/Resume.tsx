import React from "react";

const Resume = () => {
  return (
    <div className="bg-white p-10 shadow-lg rounded-lg">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold uppercase">Mahmoud Abdelhadi</h1>
        <p className="text-sm mt-2">
          +1 (604) 781-5604 |{" "}
          <a
            href="mailto:mahmoudabdelhadii@outlook.com"
            className="text-blue-600"
          >
            mahmoudabdelhadii@outlook.com
          </a>
        </p>
        <p className="text-sm">
          <a href="http://mahmoud.abdelhadii.com" className="text-blue-600">
            mahmoud.abdelhadii.com
          </a>
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold underline">Skills</h2>
        <p>
          <strong>Languages:</strong> JavaScript/TypeScript, SQL, R, Python,
          Golang, Java, GraphQL
        </p>
        <p>
          <strong>Frameworks:</strong> Angular, React, Vue, Docker, Node.js,
          Gin, Flask, Spring, Jest, Cyprus, Spark
        </p>
        <p>
          <strong>Tools:</strong> Git, Git Actions, Cloud Platforms (AWS, Azure,
          OCP4), Kubernetes, Terraform, Agile Methodology
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold underline">Technical Experience</h2>
        <h3 className="font-semibold">
          Royal Bank of Canada (RBC) - Data Engineer Co-op
        </h3>
        <p className="text-sm italic">September 2022 - September 2023</p>
        <ul className="list-disc ml-5 mb-4">
          <li>
            Lead project development, reducing data loss by 90% through improved
            ETL pipelines.
          </li>
          <li>
            Accelerated cloud migration efforts, completing 3 months ahead of
            schedule.
          </li>
          <li>
            Upgraded web app framework from Nuxt2 to Nuxt3, reducing page load
            times by 50%.
          </li>
        </ul>
        <h3 className="font-semibold">
          Tutankhamun FC - Machine Learning Engineer Co-op
        </h3>
        <p className="text-sm italic">May 2021 - August 2021</p>
        <ul className="list-disc ml-5">
          <li>
            Utilized YOLOv5 real-time object detection model to improve football
            performance analysis.
          </li>
          <li>Developed ML models achieving 63% accuracy over 10 games.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold underline">Education</h2>
        <h3 className="font-semibold">University of British Columbia</h3>
        <p className="text-sm">
          Bachelor of Applied Sciences – Electrical & Computer Engineering
        </p>
        <p className="text-sm italic">
          Completed: May 2024, Upper-level GPA: 82.8% (A-)
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold underline">Projects</h2>
        <h3 className="font-semibold">FormAI Fitness App</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>
            Developed a cross-platform fitness social media platform using Go,
            TypeScript, and AWS.
          </li>
        </ul>
        <h3 className="font-semibold">Amazoom Automated Warehouse</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>
            Programmed multi-threaded backend to optimize delivery systems.
          </li>
        </ul>
        <h3 className="font-semibold">Formula One Prediction Neural Network</h3>
        <ul className="list-disc ml-5">
          <li>
            Developed neural networks for race winner predictions with
            significant accuracy improvements.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
