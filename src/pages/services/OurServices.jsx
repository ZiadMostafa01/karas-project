import img from "../../assets/images/8E4C7C23-7741-4385-8979-DEDBFB38E6DD.PNG";
import PagesHeader from "../../components/PagesHeader";
import PreventiveSection from "../../components/services/All-Services/PreventiveSection";
function OurServices() {
  return (
    <div className="bg-[var(--karas_paper)] overflow-hidden relative py-10 px-6 sm:px-12">
      <PagesHeader
        title="Our Services"
        description="Discover the range of veterinary services we offer at Karas Vet
          Clinic!"
      />
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl font-serif text-[#2D1B33] mb-6 leading-tight">
              All Services
            </h2>

            <div className="w-16 h-[2px] bg-[#2D1B33] mb-8 mx-auto md:mx-0"></div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#2D1B33] leading-snug max-w-xl mb-10 opacity-90">
              "Veterinary care built around judgment, not volume."
            </p>

            <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-4 text-[9px] min-[400px]:text-[11px] tracking-[0.2em] font-bold text-[var(--karas_aubergine)] uppercase w-full max-w-md mx-auto md:mx-0">
              <span>Assess</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[var(--karas_aubergine)] h-[1px] opacity-30"></div>

              <span>Clarify</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[var(--karas_aubergine)] h-[1px] opacity-30"></div>

              <span>Plan</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[var(--karas_aubergine)] h-[1px] opacity-30"></div>

              <span>Act</span>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 w-full max-w-md md:max-w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#2D1B33]/5 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src={img}
                className="relative w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Our Professional Vet Service"
              />
            </div>
          </div>
        </div>

        <PreventiveSection />
      </main>
    </div>
  );
}
export default OurServices;
