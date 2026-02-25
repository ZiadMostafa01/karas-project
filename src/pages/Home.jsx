import Landing from "../components/Home/Landing";
import PetCareSection from "../components/Home/PetCareSection";
import FeatureBar from "../components/Home/FeatureBar";
import ChooseClinic from "../components/Home/ChooseClinic";
import ServicesCards from "../components/Home/ServicesCards";
import AppointmentSection from "../components/Home/AppointmentSection";

function Home() {
  return (
    <>
      <Landing />
      <FeatureBar />
      <ServicesCards />
      <PetCareSection />
      <ChooseClinic />
      <div className="w-full bg-[var(--karas_paper)]">
        <div className="max-w-7xl mx-auto px-4 py-20 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Why we practice this way */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[var(--karas_aubergine)]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--karas_aubergine)] opacity-[0.03] rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>

              <h3 className="text-xl font-black text-[var(--karas_aubergine)] mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[var(--karas_aubergine)]"></span>
                OUR PHILOSOPHY
              </h3>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                Why we practice this way
              </h2>
              <p className="text-gray-600 leading-relaxed italic border-l-2 border-gray-100 pl-4">
                "Our approach is rooted in restraint, clarity, and
                responsibility. We do not treat symptoms in isolation. We
                consider the whole animal, the environment, and the long term
                outcome."
              </p>
            </div>

            {/* 2. What you can expect */}
            <div className="bg-[var(--karas_aubergine)] p-8 rounded-2xl shadow-xl transform md:-translate-y-4 text-white relative">
              <h3 className="text-xs tracking-[0.3em] font-bold text-purple-200 mb-6 uppercase">
                Our Promise
              </h3>
              <h2 className="text-2xl font-bold mb-8">What you can expect</h2>

              <ul className="space-y-4">
                {[
                  "Honesty, even when inconvenient",
                  "Transparency around options",
                  "Time to ask questions",
                  "No rushed decisions",
                  "No pressure for unnecessary care",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-purple-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. What we expect from you */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[var(--karas_aubergine)]/30 transition-all duration-500 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-[var(--karas_aubergine)] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[var(--karas_aubergine)]"></span>
                  PARTNERSHIP
                </h3>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  What we expect from you
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[var(--karas_aubergine)] font-bold group-hover:bg-[var(--karas_aubergine)] group-hover:text-white transition-colors">
                      1
                    </div>
                    <p className="font-bold text-gray-700">
                      Partnership & Openness
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[var(--karas_aubergine)] font-bold group-hover:bg-[var(--karas_aubergine)] group-hover:text-white transition-colors">
                      2
                    </div>
                    <p className="font-bold text-gray-700">
                      Respect for the process
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-[var(--karas_aubergine)] font-bold text-center">
                  Good outcomes require collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppointmentSection />
    </>
  );
}
export default Home;
