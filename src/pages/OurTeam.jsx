import PagesHeader from "../components/PagesHeader";
import Doctors from "../components/team/Doctors";
import { allStaffData } from "../data/staffData";
import shape from "../assets/images/shape-services-768x560.WEBP";

const TeamMember = ({ name, title, image }) => (
  <div className="flex flex-col items-start group  z-10">
    <div className="bg-white p-2 shadow-sm border border-[#e5e1d8] mb-4 w-full aspect-[3/4] overflow-hidden">
      <img
        src={image || "https://via.placeholder.com/400x533"}
        alt={name}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
    <h4 className="text-[13px] font-bold text-[#333] uppercase tracking-widest leading-tight group-hover:text-[var(--karas_aubergine)] transition-colors">
      {name}
    </h4>
    <p className="text-[11px] text-[#888] mt-1 italic leading-tight">{title}</p>
  </div>
);

const TeamSection = ({ title, subtitle, members }) => (
  <section className="mb-20 z-10">
    <div className="border-b border-[#d1cdc2] mb-10 pb-2">
      <h2 className="text-2xl font-serif italic text-[#444]">{title}</h2>
      {subtitle && (
        <p className="text-[11px] text-[#aaa] mt-1 uppercase tracking-tighter">
          {subtitle}
        </p>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mx-auto justify-center lg:grid-cols-4 gap-x-10 gap-y-16">
      {members.map((m) => (
        <TeamMember key={m.id} {...m} />
      ))}
    </div>
  </section>
);

function OurTeam() {
  const doctorsJLT = allStaffData.filter(
    (m) =>
      m.id.includes("ajla") ||
      m.id.includes("abdullah") ||
      m.id.includes("milana"),
  );
  const doctorsBB = allStaffData.filter(
    (m) => m.id.includes("mostafa") || m.id.includes("usama"),
  );
  const nurses = allStaffData.filter((m) => m.title === "Veterinary Nurse");
  const handlers = allStaffData.filter((m) => m.title === "Animal Handler");
  const admins = allStaffData.filter((m) => m.title === "Administration");

  return (
    <div className="bg-[var(--karas_paper)] min-h-screen py-10">
      {/* <div className="absolute top-500 right-0">
        <img src={shape} alt="" className="ml-auto w-[600px] max-w-full" />
      </div>{" "}
      <div className="absolute bottom-0 left-0">
        <img
          src={shape}
          alt=""
          className="mr-auto w-[600px] max-w-full rotate-180"
        />
      </div> */}

      <main className="max-w-7xl mx-auto px-6  ">
        <PagesHeader
          title="Our Team"
          description=" The JLT branch is led by senior clinicians handling complex cases
            and advanced diagnostics."
        />

        <Doctors />
        <div className="py-24 text-center space-y-6">
          <h3 className="text-sm font-serif tracking-widest text-[var(--karas_aubergine)]">
            JLT BRANCH – OUR TEAM
          </h3>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif italic text-[#555]">
            The clinical core of Karas
          </h2>
          <p className="text-sm max-w-4xl mx-auto text-gray-600 leading-relaxed italic">
            The JLT branch is led by senior clinicians handling complex cases
            and advanced diagnostics.
          </p>
        </div>

        <TeamSection title="Doctors" members={doctorsJLT} />
        <TeamSection
          title="Nursing Team | JLT"
          subtitle="24-hour care and support."
          members={nurses.slice(0, 5)}
        />
        <TeamSection
          title="Animal Handlers | JLT"
          members={handlers.slice(0, 1)}
        />
        <TeamSection
          title="Administrators | JLT"
          members={admins.slice(0, 4)}
        />

        <div className="py-24 text-center border-t border-[#d1cdc2] mt-20 space-y-6">
          <h3 className="text-sm font-serif tracking-widest text-[var(--karas_aubergine)]">
            BUSINESS BAY BRANCH – OUR TEAM
          </h3>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif italic text-[#555]">
            Focused care for a fast-paced environment
          </h2>
        </div>

        <TeamSection title="Doctors" members={doctorsBB} />
        <TeamSection
          title="Nursing Team | Business Bay"
          members={nurses.slice(5, 6)}
        />
        <TeamSection
          title="Animal Handlers | Business Bay"
          members={handlers.slice(1, 4)}
        />
        <TeamSection
          title="Administrators | Business Bay"
          members={admins.slice(4, 6)}
        />
      </main>
    </div>
  );
}

export default OurTeam;
