import React from "react";

export default function NextBirthday({
  themeToggle,
  nextBirthdayMonths,
  nextBirthdayDays,
}) {
  return (
    <div className="mt-2 pt-2">
      <hr className={`${themeToggle ? "text-light" : "text-dark"}`} />
      <h5 className={`${themeToggle ? "text-info" : "text-primary"}`}>
        Next Birthday
      </h5>
      <div className="mx-5 mt-2 border border-primary rounded">
        <table className="table table-light">
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
              {nextBirthdayMonths}
            </td>
            <td
              className={`text-center ${
                themeToggle ? "text-light" : "text-success-emphasis"
              }`}
            >
              {nextBirthdayDays}
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
