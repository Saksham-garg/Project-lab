/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
type Props = {
  active: String;
};
const NavigationDots = ({ active }: Props) => (
  <div className="xs:flex items-center justify-center hidden flex-col p-2 xs:relative absolute bottom-4 right-2 xs:right-0 xs:bottom-0">
    {["home", "services", "why-choose-us", "faq", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-2.5 h-2.5 rounded-full bg-[#cbcbcb] m-[0.5rem] transition ease-in-out hover:bg-[#313bac]"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
