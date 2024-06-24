import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex justify-center flex-wrap gap-9 max-container">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
