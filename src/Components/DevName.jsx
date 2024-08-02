import React from "react";

export default function DevName({ toggleTheme }) {
  const devName = "Developer : Sagar Ghumare";
  return (
    <div id="dev" className="text-end fw-medium mb-3 pb-2">
      <span
        className={`border rounded p-1  ${
          toggleTheme ? "border-secondary text-warning" : "text-primary"
        }`}
      >
        {devName}
      </span>
    </div>
  );
}
