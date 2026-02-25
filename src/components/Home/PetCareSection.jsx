import { CheckCircle, Gem } from "lucide-react";
import img1 from "../../assets/images/61B62C43-EDFF-406C-B6CA-20940299BB03.png";

const servicesLeft = [
  "24/7 Emergency service",
  "Consultation & Examination",
  "Preventive treatment",
  "Dental wellness care",
  "Diagnostic services",
];

const servicesRight = [
  "Orthopedic surgeries",
  "PCR Test for animals",
  "Blood analysis",
  "Surgical procedures",
];

export default function PetCareSection() {
  return (
    <section className="w-full bg-[var(--karas_paper)] py-20 px-4 space-y-16">
      <div className="text-center">
        {" "}
        <h1 className="font-heading text-3xl md:text-5xl font-serif text-[var(--karas_aubergine)] mb-2">
          Deliberate care, grounded in judgment.
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden h-full">
          <img
            src={img1}
            alt="Vet with dog"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 bg-[var(--karas_aubergine)] text-white px-3 py-2 rounded-full text-xs sm:text-sm mb-4">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-paw w-4"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
            </svg>
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--karas_aubergine)] leading-tight mb-6">
            We love animals as much as you do!
          </h2>

          <div className="border-b-2 border-dashed border-gray-300 mb-6"></div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            At Karas Veterinary clinic, In addition to wellness exams, we offer
            a variety of medical services designed to reduce and manage any pain
            your pet may be experiencing.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              {servicesLeft.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--karas_aubergine)]" size={20} />
                  <span className="font-medium text-[var(--primary1)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {servicesRight.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--karas_aubergine)]" size={20} />
                  <span className="font-medium text-[var(--primary1)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
