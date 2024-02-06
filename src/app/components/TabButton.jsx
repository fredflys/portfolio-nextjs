import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonCLasses = active
    ? "border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonCLasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
