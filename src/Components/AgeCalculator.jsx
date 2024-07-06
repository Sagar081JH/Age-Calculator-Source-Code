import React, { useState } from "react";
import "../AgeCalc.css";

export default function AgeCalculator() {
  const [year, setYear] = useState("0");
  const [month, setMonth] = useState("0");
  const [day, setDay] = useState("0");

  const [birthDateDay, setBirthDateDay] = useState("");

  const [currentDateDay, setCurrentDateDay] = useState(
    new Date().toUTCString().substring(0, 3)
  );

  const [nextBirthdayMonths, setNextBirthdayMonths] = useState("0");
  const [nextBirthdayDays, setNextBirthdayDays] = useState("0");

  let todaysDateString = new Date().toLocaleDateString();

  const [dateOfBirth, setDateOfBirth] = useState("");

  const [todaysDate, setTodaysDate] = useState(todaysDateString);

  const [errorDateOfBirth, setDateOfBirthError] = useState("");
  const [errorTodaysDate, setTodaysDateError] = useState("");

  const [totalYears, setTotalYears] = useState("0");
  const [totalMonths, setTotalMonths] = useState("0");
  const [totalWeek, setTotalWeek] = useState("0");
  const [totalHours, setTotalHours] = useState("0");
  const [totalMinutes, setTotalMinutes] = useState("0");
  const [totalSeconds, setTotalSeconds] = useState("0");

  const [developerName, setDeveloperName] = useState(
    "Developer : Sagar Ghumare"
  );

  const [themeToggle, setThemeToggle] = useState(false);

  const [bithDayGreeting, setBirthDayGreeting] = useState("");

  if (themeToggle) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }

  setTimeout(() => {
    setDeveloperName("");
  }, 20000);

  const calculateAge = () => {
    if (dateOfBirth === "" || todaysDate === "") {
      if (dateOfBirth === "") {
        setBirthDateDay("");
        setDateOfBirthError("Enter Valid Date : DD/MM/YYYY");
        setBirthDayGreeting("");
      } else {
        setDateOfBirthError("");
      }

      if (todaysDate === "") {
        setTodaysDateError("Enter Valid Date : DD/MM/YYYY");
        setCurrentDateDay("");
        setBirthDayGreeting("");
      } else {
        setTodaysDateError("");
      }

      setYear("0");
      setMonth("0");
      setDay("0");
      setBirthDateDay("");
      setNextBirthdayDays("0");
      setTotalYears("0");
      setTotalSeconds("0");
      setTotalMinutes("0");
      setTotalHours("0");
      setTotalWeek("0");
      setTotalMonths("0");
    } else {
      setDateOfBirthError("");
      setTodaysDateError("");

      let birth = dateOfBirth.split("/");
      let todayD1 = todaysDate.split("/");

      if (birth.length !== 3 || todayD1.length !== 3) {
        console.log("Inside");
        if (birth.length !== 3) {
          console.log("Inside birthDate1");
          setDateOfBirthError("Enter valid date : DD/MM/YYYY");
          setBirthDateDay("");
        } else {
          setDateOfBirthError("");
        }
        if (todayD1.length !== 3) {
          console.log("Inside todayD1");
          setTodaysDateError("Enter valid date : DD/MM/YYYY");
          setCurrentDateDay("");
        } else {
          setTodaysDateError("");
        }

        return;
      }
      let birthDate1 = {
        birthYear: parseInt(birth[2]),
        birthMonth: parseInt(birth[1]),
        birthDay: parseInt(birth[0]),
      };

      let todaysDate1 = {
        birthYear: parseInt(todayD1[2]),
        birthMonth: parseInt(todayD1[1]),
        birthDay: parseInt(todayD1[0]),
      };

      const currentDate = new Date(
        todaysDate1.birthYear,
        todaysDate1.birthMonth - 1,
        todaysDate1.birthDay
      );
      const currentDate1 = new Date(
        todaysDate1.birthYear,
        todaysDate1.birthMonth - 1,
        todaysDate1.birthDay + 1
      );
      const birthDate = new Date(
        birthDate1.birthYear,
        birthDate1.birthMonth - 1,
        birthDate1.birthDay
      ); // Note: month is zero-based

      if (birthDate > currentDate) {
        setYear("");
        setMonth("");
        setDay("");
        setBirthDateDay("");
        setNextBirthdayDays("");
        setTotalYears("");
        setTotalSeconds("");
        setTotalMinutes("");
        setTotalHours("");
        setTotalWeek("");
        setTotalMonths("");
        setDateOfBirthError("Invalid birth date");
        return;
      }

      setCurrentDateDay(currentDate1.toUTCString().substring(0, 3));
      setBirthDateDay(birthDate.toUTCString().substring(0, 3));

      let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
      let ageMonths = currentDate.getMonth() - birthDate.getMonth();
      let ageDays = currentDate.getDate() - birthDate.getDate();

      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
      }

      if (ageDays < 0) {
        const prevMonthDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          0
        );
        ageDays += prevMonthDate.getDate();
        ageMonths--;
      }

      setNextBirthdayMonths(
        `${Math.abs(birthDate1.birthMonth - 1 - currentDate.getMonth())}`
      );
      setYear(ageYears);
      setMonth(ageMonths);
      setDay(ageDays);

      let seconds = Math.floor(
        (currentDate.getTime() - birthDate.getTime()) / 1000
      );
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let week = Math.floor(hours / 168);
      let month = Math.floor(hours / 730);

      setNextBirthdayDays(31 - ageDays);
      setTotalYears(ageYears);
      setTotalSeconds(seconds);
      setTotalMinutes(minutes);
      setTotalHours(hours);
      setTotalWeek(week);
      setTotalMonths(month);

      if (ageMonths === 0 && ageDays === 0) {
        setBirthDayGreeting(`Happy ${ageYears}th Birthday !!!`);
        setNextBirthdayDays("0");
        setNextBirthdayMonths("12");
      } else {
        setBirthDayGreeting("");
      }
    }
  };

  function clear() {
    setDateOfBirth("");
    setTodaysDate("");
  }

  return (
    <>
      <div className="container p-2">
        <div
          className={`p-3 rounded row text-center ${
            themeToggle ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <span className="fs-4 col-md-7 col-sm-7 col-6 col-lg-10">
            Age Calculator
          </span>
          <div className="form-check form-switch col-md-5 col-sm-5 col-6 col-lg-2 text-end mt-2 pt-2">
            <div>
              <input
                className="form-check-input px-0 mx-0 "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => setThemeToggle(!themeToggle)}
              />
            </div>
            <div className="px-0 mx-0">{`${
              themeToggle ? "Light Mode" : "Dark Mode"
            }`}</div>
          </div>
        </div>
        <hr />
        <div id="dev" className="text-center fw-medium">
          <span className={` ${themeToggle ? "text-warning" : "text-success"}`}>
            {developerName}
          </span>
        </div>
        <div className="row">
          <span className="col-6">
            <h5 className={`${themeToggle ? "text-success" : "text-primary"}`}>
              Today's Date
            </h5>
          </span>
          <span id="inputError" className="col-6 text-danger text-end">
            <span className="text-success fs-8">{currentDateDay}</span>
            <span id="err">{errorTodaysDate}</span>
          </span>
        </div>
        <div>
          <input
            id={`${themeToggle ? "todayDateInputDark" : "todayDateInputLight"}`}
            className={`form-control ${
              themeToggle ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            placeholder="DD/MM/YYYY"
            value={todaysDate}
            onChange={(e) => setTodaysDate(e.target.value)}
          ></input>
        </div>
        <div className="row mt-2 pt-2">
          <span
            className={`col-5 ${themeToggle ? "text-success" : "text-primary"}`}
          >
            <h5>Date of Birth</h5>
          </span>
          <span id="inputError" className="col-7 text-danger text-end">
            <span className="text-success fs-6">{birthDateDay}</span>
            <span id="err">{errorDateOfBirth}</span>
          </span>
        </div>
        <div>
          <input
            id={`${themeToggle ? "birthDateInputDark" : "birthDateInputLight"}`}
            className={`form-control ${
              themeToggle ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            placeholder="DD/MM/YYYY"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value.toString())}
          ></input>
        </div>
        <div className="text-center mt-3 pt-3">
          <button
            className="btn btn-info w-50 p-2"
            onClick={() => calculateAge()}
          >
            Calculate
          </button>
          <span className="mx-1"></span>
          <button className="btn btn-info w-25 p-2" onClick={() => clear()}>
            Clear
          </button>
        </div>
        <div
          className={`text-center fs-1 mt-3 pt-3 ${
            themeToggle ? "text-warning" : "text-primary"
          }`}
        >
          {bithDayGreeting}
        </div>
        <div className="mt-2 pt-2">
          <hr />
          <h5 className={`${themeToggle ? "text-info" : "text-primary"}`}>
            Age
          </h5>
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
                  {year}
                </td>
                <td
                  className={`text-center ${
                    themeToggle ? "text-light" : "text-success-emphasis"
                  }`}
                >
                  {month}
                </td>
                <td
                  className={`text-center ${
                    themeToggle ? "text-light" : "text-success-emphasis"
                  }`}
                >
                  {day}
                </td>
              </tbody>
            </table>
          </div>
          <div className="mt-2 pt-2">
            <hr />
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
          <div className="mt-2 pt-2">
            <hr />
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
        </div>
      </div>
    </>
  );
}
