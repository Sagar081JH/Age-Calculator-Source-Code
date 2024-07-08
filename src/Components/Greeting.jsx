import React from "react";

export default function Greeting({ themeToggle, greeting }) {
  console.log("themeToggle :" + themeToggle);
  console.log("greeting : " + greeting);
  return (
    <div
      className={`text-center fs-1 mt-3 pt-3 ${
        themeToggle ? "text-warning" : "text-primary"
      }`}
    >
      {greeting === "" ? (
        <></>
      ) : (
        <>
          <hr className={`${themeToggle ? "text-light" : "text-dark"}`} />{" "}
          {greeting}
        </>
      )}
    </div>
  );
}
