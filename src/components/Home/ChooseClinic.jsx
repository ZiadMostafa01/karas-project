import img1 from "../../assets/images/jlt-clinic.jpg";
import img2 from "../../assets/images/business-bay-clinic.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ChooseClinic() {
  return (
    <div className="bg-[var(--karas_paper)] py-20 px-4 ">
      <div className="font-heading text-center">
        {" "}
        <h1 className="text-3xl md:text-5xl font-serif text-[var(--karas_aubergine)] mb-2">
          Choose your Karas clinic
        </h1>
        <p className="text-[var(--karas_text)] mb-12 md:text-xl">
          Two locations, one standard of care.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col h-full rounded-lg shadow-md overflow-hidden">
          <img
            src={img1}
            alt="JLT Clinic"
            className="w-full object-cover h-64 md:h-72"
          />
          <div className="bg-white p-6 border-t border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[var(--karas_aubergine)] mb-2">
                Karas Veterinary Clinic – JLT
              </h2>
              <p className="text-[var(--karas_text)] mb-4">
                Advanced care for a long standing community.
              </p>
            </div>

            <Link
              to="/clinics/karas-JLT"
              className="cursor-pointer mt-4 flex items-center group justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-8 py-3 rounded-lg text-sm transition-all shadow-lg shadow-[#39164f]/20 uppercase"
            >
              Visit JLT Cinic{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full rounded-lg shadow-md overflow-hidden">
          <img
            src={img2}
            alt="Business Bay Clinic"
            className="w-full object-cover h-64 md:h-72"
          />
          <div className="bg-white p-6 border-t border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[var(--karas_aubergine)] mb-2">
                Karas Veterinary Clinic – Business Bay
              </h2>
              <p className="text-[var(--karas_text)] mb-4">
                Designed for the pace and needs of Business Bay.
              </p>
            </div>
            <Link
              to="/clinics/karas-downtown"
              className="cursor-pointer mt-4 flex items-center group justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-8 py-3 rounded-lg text-sm transition-all shadow-lg shadow-[#39164f]/20 uppercase"
            >
              Visit Business Bay{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseClinic;
