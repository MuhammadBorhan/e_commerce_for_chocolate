import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ChooseFestival = ({ allBlankBox }) => {
  // handle festival
  const [matchFestival, setMatchFestival] = useState([]);
  const handleFestival = (festival) => {
    const matchedFestival = allBlankBox?.filter(
      (f) => f?.festival === festival
    );
    setMatchFestival(matchedFestival);
    // setSelectedBlankBox(null);
  };
  return <div></div>;
};

export default ChooseFestival;
