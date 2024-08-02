import React from "react";

export default function NextBirthday({
  toggleTheme,
  nextBirthdayMonths,
  nextBirthdayDays,
}) {
  return (
    <div className="mt-2 pt-2">
      <hr className={`${toggleTheme ? "text-light" : "text-dark"}`} />
      <h5 className={`${toggleTheme ? "text-info" : "text-primary"}`}>
        Next Birthday
      </h5>
      <div className="mx-5 mt-2 border border-primary rounded">
        <table className="table table-light">
          <th
            className={`text-center ${
              toggleTheme ? "text-info" : "text-success"
            }`}
          >
            Months
          </th>
          <th
            className={`text-center ${
              toggleTheme ? "text-info" : "text-success"
            }`}
          >
            Days
          </th>
          <tbody>
            <td
              className={`text-center ${
                toggleTheme ? "text-light" : "text-success-emphasis"
              }`}
            >
              {nextBirthdayMonths}
            </td>
            <td
              className={`text-center ${
                toggleTheme ? "text-light" : "text-success-emphasis"
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
