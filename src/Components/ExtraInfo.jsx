import React from "react";

export default function ExtraInfo({
  themeToggle,
  totalYears,
  totalMonths,
  totalWeek,
  totalHours,
  totalMinutes,
  totalSeconds,
}) {
  return (
    <div className="mt-2 pt-2">
      <hr className={`${themeToggle ? "text-light" : "text-dark"}`} />
      <h5 className={`${themeToggle ? "text-info" : "text-primary"}`}>
        Extra Info
      </h5>
      <div className="mx-5 mt-2 border border-primary rounded">
        <table
          className={`table ${
            themeToggle ? "table-dark" : "table-light"
          } mb-0 pb-0`}
        >
          <tbody>
            <tr>
              <td
                className={`text-center ${
                  themeToggle ? "text-info" : "text-success"
                }`}
              >
                Total Years
              </td>
              <td
                className={`${
                  themeToggle ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalYears}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  themeToggle ? "text-info" : "text-success"
                }`}
              >
                Total Months
              </td>
              <td
                className={` ${
                  themeToggle ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalMonths}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  themeToggle ? "text-info" : "text-success"
                }`}
              >
                Total Week
              </td>
              <td
                className={` ${
                  themeToggle ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalWeek}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  themeToggle ? "text-info" : "text-success"
                }`}
              >
                Total Hours
              </td>
              <td
                className={`${
                  themeToggle ? "text-light" : "text-dark"
                } text-start `}
              >
                {totalHours}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  themeToggle ? "text-info" : "text-success"
                }`}
              >
                Total Minutes
              </td>
              <td
                className={` ${
                  themeToggle ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalMinutes}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  themeToggle ? "text-info" : "text-success"
                }`}
              >
                Total Seconds
              </td>
              <td
                className={`${
                  themeToggle ? "text-light" : "text-dark"
                } text-start `}
              >
                {totalSeconds}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
