import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-16 max-container "
    >
      <div className="relative z-10 xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-[100px]">
        <p className="font-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-3 font-palanquin text-[80px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mb-4 leading-8 sm:max-w-sm">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center bg-primary bg-hero min-h-screen bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoes collection"
          width={500}
          height={400}
          className="relative z-10 object-contain"
        />

        <div className="flex sm:gap-6 gap 4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                key={index}
                imgURL={image}
                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
