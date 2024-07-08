import React from "react";

export default function DevName({ themeToggle }) {
  const devName = "Developer : Sagar Ghumare";
  return (
    <div id="dev" className="text-end fw-medium">
      <span className={` ${themeToggle ? "text-warning" : "text-info"}`}>
        {devName}
        <hr className={`${themeToggle ? "text-light" : "text-dark"}`} />
      </span>
    </div>
  );
}
