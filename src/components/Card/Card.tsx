import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  IconColor: string;
  title: string;
  description: string;
};

const Card = ({ Icon, title, description, IconColor }: Props) => {
  return (
    <div className="w-64 h-full flex flex-col gap-3 border">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Icon className="h-8 w-8" color={IconColor} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-base text-start">{description}</p>
    </div>
  );
};

export default Card;
