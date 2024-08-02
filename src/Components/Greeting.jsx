import React from "react";

export default function Greeting({ toggleTheme, greeting }) {
  return (
    <div
      className={`text-center fs-1 mt-3 pt-3 ${
        toggleTheme ? "text-warning" : "text-primary"
      }`}
    >
      {greeting === "" ? (
        <></>
      ) : (
        <>
          <hr className={`${toggleTheme ? "text-light" : "text-dark"}`} />{" "}
          {greeting}
        </>
      )}
    </div>
  );
}
