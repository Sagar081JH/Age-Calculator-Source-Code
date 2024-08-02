import React, { useState } from "react";
import "../AgeCalc.css";
import Age from "./Age";
import ExtraInfo from "./ExtraInfo";
import NextBirthday from "./NextBirthday";
import Greeting from "./Greeting";
import DevName from "./DevName";
import { calculate } from "../Util/CalculateAge";

export default function Form() {
  //Day
  const [birthDateDay, setBirthDateDay] = useState("");
  const [currentDateDay, setCurrentDateDay] = useState(
    new Date().toUTCString().substring(0, 3)
  );

  //inputs
  const todaysDate3 = new Date().toISOString().substring(0, 10);

  const [todaysDate, setTodaysDate] = useState(todaysDate3);
  const [dateOfBirth, setDateOfBirth] = useState("");

  //Age
  const [year, setYear] = useState("0");
  const [month, setMonth] = useState("0");
  const [day, setDay] = useState("0");

  //Next Birthday
  const [nextBirthdayMonths, setNextBirthdayMonths] = useState("0");
  const [nextBirthdayDays, setNextBirthdayDays] = useState("0");

  const [errorDateOfBirth, setDateOfBirthError] = useState("");
  const [errorTodaysDate, setTodaysDateError] = useState("");

  //Extra Info
  const [totalYears, setTotalYears] = useState("0");
  const [totalMonths, setTotalMonths] = useState("0");
  const [totalWeek, setTotalWeek] = useState("0");
  const [totalDays, setTotalDays] = useState("0");
  const [totalHours, setTotalHours] = useState("0");
  const [totalMinutes, setTotalMinutes] = useState("0");
  const [totalSeconds, setTotalSeconds] = useState("0");

  //greeting
  const [birthdayGreeting, setBirthDayGreeting] = useState("");

  //theme
  const [toggleTheme, setToggleTheme] = useState(false);
  if (toggleTheme) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }

  // calculation success
  const [isCalculated, setIsCalculated] = useState(false);

  function clear(e) {
    e.preventDefault();
    setDateOfBirth(" ");
    setDateOfBirthError("");
    setTodaysDate(new Date().toISOString().substring(0, 10));
    setYear("0");
    setMonth("0");
    setDay("0");
    setBirthDateDay("");
    setNextBirthdayDays("0");
    setNextBirthdayMonths("0");
    setTotalYears("0");
    setTotalSeconds("0");
    setTotalMinutes("0");
    setTotalHours("0");
    setTotalWeek("0");
    setTotalMonths("0");
    setTotalDays("0");
    setBirthDayGreeting("");
    setIsCalculated(false);
  }

  return (
    <div className="container p-2">
      <div
        className={`row d-flex sticky-top border p-1 rounded-3 ${
          toggleTheme
            ? "text-light bg-dark  border-secondary"
            : "text-dark bg-light"
        }`}
      >
        <div id="title" className="p-2 fs-2 text-center col-8">
          Age Calculator
        </div>

        <div className="col-4 mt-3">
          <div className="form-check form-switch fs-4 text-start">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => setToggleTheme(!toggleTheme)}
            />
            {toggleTheme ? (
              <span>&#9789; </span>
            ) : (
              <span className="text-warning"> &#9788;</span>
            )}
          </div>
        </div>
      </div>

      <DevName toggleTheme={toggleTheme} />

      <form
        onSubmit={(e) =>
          calculate(
            e,
            dateOfBirth,
            todaysDate,
            setBirthDateDay,
            setDateOfBirthError,
            setBirthDayGreeting,
            setTodaysDateError,
            setYear,
            setMonth,
            setDay,
            setNextBirthdayDays,
            setNextBirthdayMonths,
            setTotalYears,
            setTotalSeconds,
            setTotalMinutes,
            setTotalHours,
            setTotalWeek,
            setTotalMonths,
            setCurrentDateDay,
            setTotalDays,
            setIsCalculated
          )
        }
        className={`border rounded p-3 ${
          toggleTheme ? "border-secondary" : ""
        }`}
      >
        <div className="row">
          <span className="col-5">
            <h5 className={`${toggleTheme ? "text-info" : "text-primary"}`}>
              Today's Date
            </h5>
          </span>
          <span id="inputError" className="col-7 text-danger text-end">
            <span
              className={`fs-8 fw-bold ${
                toggleTheme ? "text-info" : "text-success"
              }`}
            >
              {currentDateDay}
            </span>
            <span id="err">{errorTodaysDate}</span>
          </span>
        </div>
        <div className="border rounded">
          <input
            type="date"
            min="1900-01-01"
            max="2050-01-01"
            placeholder="DD/MM/YYY"
            value={todaysDate}
            className={`form-control ${
              toggleTheme ? "bg-dark text-light" : "bg-light"
            }`}
            onChange={(e) => setTodaysDate(e.target.value)}
          ></input>
        </div>
        <div className="row mt-2 pt-2">
          <span
            className={`col-5 ${toggleTheme ? "text-info" : "text-primary"}`}
          >
            <h5>Date of Birth</h5>
          </span>
          <span id="inputError" className="col-7 text-danger text-end">
            <span
              className={`fs-8 fw-bold ${
                toggleTheme ? "text-info" : "text-success"
              }`}
            >
              {birthDateDay}
            </span>
            <span id="err">{errorDateOfBirth}</span>
          </span>
        </div>
        <div className="border rounded">
          <div>
            <input
              type="date"
              min="1900-01-01"
              max="2050-01-01"
              placeholder="DD/MM/YYY"
              value={dateOfBirth}
              className={`form-control ${
                toggleTheme ? "bg-dark text-light" : "bg-light"
              }`}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="text-center mt-3 pt-3">
          <button type="submit" className="btn btn-info w-50 p-2">
            Calculate
          </button>
          <span className="mx-1"></span>
          <button className="btn btn-info w-25 p-2" onClick={(e) => clear(e)}>
            Reset
          </button>
        </div>
      </form>

      <Greeting toggleTheme={toggleTheme} greeting={birthdayGreeting} />
      {isCalculated && (
        <div className="mt-2 pt-2">
          <hr className={`${toggleTheme ? "text-light" : "text-dark"}`} />
          <Age
            toggleTheme={toggleTheme}
            ageYear={year}
            ageMonth={month}
            ageDay={day}
          />
          <NextBirthday
            toggleTheme={toggleTheme}
            nextBirthdayMonths={nextBirthdayMonths}
            nextBirthdayDays={nextBirthdayDays}
          />
          <ExtraInfo
            toggleTheme={toggleTheme}
            totalYears={totalYears}
            totalMonths={totalMonths}
            totalWeek={totalWeek}
            totalDays={totalDays}
            totalHours={totalHours}
            totalMinutes={totalMinutes}
            totalSeconds={totalSeconds}
          />
        </div>
      )}
    </div>
  );
}
