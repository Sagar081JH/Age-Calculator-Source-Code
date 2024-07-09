import React from "react";

export default function DevName({ themeToggle }) {
  const devName = "Developer : Sagar Ghumare";
  return (
    <div id="dev" className="text-end fw-medium mb-3 pb-2">
      <span
        className={`border rounded p-1  ${
          themeToggle ? "border-secondary text-warning" : "text-primary"
        }`}
      >
        {devName}
      </span>
    </div>
  );
}
