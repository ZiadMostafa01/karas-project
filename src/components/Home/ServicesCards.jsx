import { Shield, Search, Activity, Heart } from "lucide-react";

const services = [
  {
    title: "Preventive and long term care",
    description:
      "Health planning that protects well being before problems begin.",
    icon: Shield,
  },
  {
    title: "Diagnostics and decision making",
    description: "Clear assessments that support informed choices.",
    icon: Search,
  },
  {
    title: "Surgical and advanced care",
    description: "Precision-driven intervention when it is truly required.",
    icon: Activity,
  },
  {
    title: "Pain management and recovery",
    description: "Supporting comfort, mobility, and dignity at every stage.",
    icon: Heart,
  },
];

function ServicesCards() {
  return (
    <div className="bg-[var(--karas_paper)] py-20 px-4 text-center">
     
      <div className="font-heading text-center">
        {" "}
        <h1 className="text-3xl md:text-5xl font-serif text-purple-900 mb-2">
          This Is How We Care
        </h1>
        <p className="text-gray-600 mb-12 md:text-xl">Our Areas of Care </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full justify-between"
            >
              <div className="bg-purple-50 p-4 rounded-full mb-4 flex justify-center items-center">
                <Icon className="w-8 h-8 text-[var(--karas_aubergine)]" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesCards;
