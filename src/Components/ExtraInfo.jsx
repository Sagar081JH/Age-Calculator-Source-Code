import React from "react";

export default function ExtraInfo({
  toggleTheme,
  totalYears,
  totalMonths,
  totalWeek,
  totalDays,
  totalHours,
  totalMinutes,
  totalSeconds,
}) {
  return (
    <div className="m-2 p-1">
      <hr className={`${toggleTheme ? "text-light" : "text-dark"}`} />
      <h5 className={`${toggleTheme ? "text-info" : "text-primary"}`}>
        Extra Info
      </h5>
      <div className="mx-5 mt-2 p-1 border border-primary rounded">
        <table
          className={`table ${
            toggleTheme ? "table-dark" : "table-light"
          } mb-0 pb-0`}
        >
          <tbody>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Years
              </td>
              <td
                className={`${
                  toggleTheme ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalYears}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Months
              </td>
              <td
                className={` ${
                  toggleTheme ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalMonths}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Week
              </td>
              <td
                className={` ${
                  toggleTheme ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalWeek}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Days
              </td>
              <td
                className={`${
                  toggleTheme ? "text-light" : "text-dark"
                } text-start `}
              >
                {totalDays}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Hours
              </td>
              <td
                className={`${
                  toggleTheme ? "text-light" : "text-dark"
                } text-start `}
              >
                {totalHours}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Minutes
              </td>
              <td
                className={` ${
                  toggleTheme ? "text-light" : "text-dark"
                } text-start`}
              >
                {totalMinutes}
              </td>
            </tr>
            <tr>
              <td
                className={`text-center ${
                  toggleTheme ? "text-info" : "text-success"
                }`}
              >
                Total Seconds
              </td>
              <td
                className={`${
                  toggleTheme ? "text-light" : "text-dark"
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
