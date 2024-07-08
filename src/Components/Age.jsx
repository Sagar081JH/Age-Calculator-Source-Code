import React from "react";

export default function Age({ themeToggle, ageYear, ageMonth, ageDay }) {
  return (
    <div>
      <h5 className={`${themeToggle ? "text-info" : "text-primary"}`}>Age</h5>
      <div className="mx-5 border border-primary rounded">
        <table className="table table-light">
          <th
            className={`text-center ${
              themeToggle ? "text-info" : "text-success"
            }`}
          >
            Year
          </th>
          <th
            className={`text-center ${
              themeToggle ? "text-info" : "text-success"
            }`}
          >
            Months
          </th>
          <th
            className={`text-center ${
              themeToggle ? "text-info" : "text-success"
            }`}
          >
            Days
          </th>
          <tbody>
            <td
              className={`text-center ${
                themeToggle ? "text-light" : "text-success-emphasis"
              }`}
            >
              {ageYear}
            </td>
            <td
              className={`text-center ${
                themeToggle ? "text-light" : "text-success-emphasis"
              }`}
            >
              {ageMonth}
            </td>
            <td
              className={`text-center ${
                themeToggle ? "text-light" : "text-success-emphasis"
              }`}
            >
              {ageDay}
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
