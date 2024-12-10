import React from "react";
import { IconType } from "react-icons";
import Tilt from "react-parallax-tilt";

type Props = {
  service: {
    Icon: IconType;
    IconColor: string;
    name: string;
    description: string;
  };
};

const ServicesCard = ({ service }: Props) => {
  return (
    <Tilt transitionSpeed={1000} scale={1.1}>
      <div className="relative overflow-hidden max-w-[323px] example-2 flex h-60 rounded-xl  w-full border-[1.5px] border-slate-800">
        <div className="relative z-10 flex flex-col gap-4 w-full p-6 m-0.5 servicesCard">
          <div className="p-3 rounded-lg flex items-center justify-center w-min bg-black">
            <service.Icon className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-raleway font-semibold">
            {service?.name}
          </h1>
          <div className="flex flex-col gap-3 w-full text-sm">
            {service?.description}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
