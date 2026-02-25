import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { allStaffData } from "../../data/staffData";

import "swiper/css";
import "swiper/css/navigation";

function Doctors() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const doctorsSlider = allStaffData
    .filter(
      (member) =>
        member.id.includes("ajla") ||
        member.id.includes("abdullah") ||
        member.id.includes("milana") ||
        member.id.includes("mostafa") ||
        member.id.includes("usama"),
    )
    .slice(0, 5);

  return (
    <section className="bg-[var(--karas_paper)] px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="border-b border-[#d1cdc2] mb-12 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#444]">
              Our Doctors
            </h2>
            <p className="text-[11px] text-[#aaa] mt-1 uppercase tracking-widest">
              Expert Medical Team
            </p>
          </div>

          <div className="flex gap-4 mb-2">
            <button
              ref={prevRef}
              className="text-2xl text-[#888] hover:text-[#333] transition-colors"
            >
              &#8592;
            </button>
            <button
              ref={nextRef}
              className="text-2xl text-[#888] hover:text-[#333] transition-colors"
            >
              &#8594;
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3.3}
          grabCursor
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 3.3, spaceBetween: 40 },
          }}
          className="team-swiper"
        >
          {doctorsSlider.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <Link
                to={`/doctor/${doctor.id}`}
                className="flex flex-col items-start group"
              >
                <div className="bg-white p-2 shadow-sm border border-[#e5e1d8] mb-5 w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>

                <h4 className="text-[14px] font-bold text-[#333] uppercase tracking-widest leading-tight group-hover:text-[var(--karas_aubergine)] transition-colors">
                  {doctor.name}
                </h4>
                <p className="text-[12px] text-[#888] mt-1 italic font-serif tracking-wide leading-tight">
                  {doctor.title} 
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Doctors;
