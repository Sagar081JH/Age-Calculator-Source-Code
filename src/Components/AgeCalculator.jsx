import React, { useState } from "react";
import "../AgeCalc.css";
import Age from "./Age";
import ExtraInfo from "./ExtraInfo";
import NextBirthday from "./NextBirthday";
import Greeting from "./Greeting";
import DevName from "./DevName";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

  const [value, setValue] = useState(dayjs(""));

  console.log("value : " + value.toDate().toLocaleDateString());

  let dobValue = value.toDate().toLocaleDateString();

  console.log("dobValue : " + dobValue);

  let todayDateValue1 = new Date().toLocaleDateString();

  let todayD1 = todayDateValue1.split("/");

  let todayDate = todayD1[1];
  let todayMonth = todayD1[0];
  let todayYears = todayD1[2];

  let todaysDateString2 = todayDate + "-" + todayMonth + "-" + todayYears;

  const [todayDateValue, setTodayDateValue] = useState(
    dayjs(todaysDateString2)
  );
  console.log(
    "todayDateValue : " + todayDateValue.toDate().toLocaleDateString()
  );

  console.log("dobValue : " + dobValue);

  const [dateOfBirth, setDateOfBirth] = useState(dobValue);

  const [todaysDate, setTodaysDate] = useState(todayDateValue1);

  const [errorDateOfBirth, setDateOfBirthError] = useState("");
  const [errorTodaysDate, setTodaysDateError] = useState("");

  const [totalYears, setTotalYears] = useState("0");
  const [totalMonths, setTotalMonths] = useState("0");
  const [totalWeek, setTotalWeek] = useState("0");
  const [totalHours, setTotalHours] = useState("0");
  const [totalMinutes, setTotalMinutes] = useState("0");
  const [totalSeconds, setTotalSeconds] = useState("0");

  const [themeToggle, setThemeToggle] = useState(false);

  const [birthdayGreeting, setBirthDayGreeting] = useState("");

  if (themeToggle) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }

  const calculateAge = () => {
    if (dobValue === "" || todayDateValue1 === "") {
      if (dobValue === "") {
        setBirthDateDay("");
        setDateOfBirthError("Enter Valid Date : DD/MM/YYYY");
        setBirthDayGreeting("");
      } else {
        setDateOfBirthError("");
      }

      if (todayDateValue1 === "") {
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
      setNextBirthdayMonths("0");
      setTotalYears("0");
      setTotalSeconds("0");
      setTotalMinutes("0");
      setTotalHours("0");
      setTotalWeek("0");
      setTotalMonths("0");
    } else {
      setDateOfBirthError("");
      setTodaysDateError("");

      let birth = dobValue.split("/");
      let todayD1 = todayDateValue1.split("/");

      if (birth.length !== 3 || todayD1.length !== 3) {
        if (birth.length !== 3) {
          setDateOfBirthError("Enter valid date : DD/MM/YYYY");
          setBirthDateDay("");
        } else {
          setDateOfBirthError("");
        }
        if (todayD1.length !== 3) {
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

      if (birthDate.getMonth() >= currentDate.getMonth()) {
        if (birthDate.getMonth() == currentDate.getMonth()) {
          if (ageDays == 0) {
            setNextBirthdayMonths("12");
            setNextBirthdayDays("0");
          } else {
            setNextBirthdayDays(`${31 - ageDays}`);
            if (birthDate.getDate() > currentDate.getDate()) {
              setNextBirthdayMonths("0");
            } else {
              setNextBirthdayMonths("11");
            }
          }
        } else if (birthDate.getMonth() > currentDate.getMonth()) {
          let months = birthDate.getMonth() - currentDate.getMonth();
          if (ageDays == 0) {
            setNextBirthdayMonths(months);
            setNextBirthdayDays("0");
          } else {
            setNextBirthdayDays(`${31 - ageDays}`);
            if (birthDate.getDate() > currentDate.getDate()) {
              setNextBirthdayMonths(months);
            } else {
              setNextBirthdayMonths(months - 1);
            }
          }
        }
      } else {
        let months = 12 - (currentDate.getMonth() - birthDate.getMonth());
        if (ageDays == 0) {
          setNextBirthdayMonths(months);
          setNextBirthdayDays("0");
        } else {
          let months = 11 - (currentDate.getMonth() - birthDate.getMonth());
          setNextBirthdayMonths(months);
          setNextBirthdayDays(`${30 - ageDays}`);
        }
      }

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

      setTotalYears(ageYears);
      setTotalSeconds(seconds);
      setTotalMinutes(minutes);
      setTotalHours(hours);
      setTotalWeek(week);
      setTotalMonths(month);

      if (ageMonths === 0 && ageDays === 0) {
        let suffix = "";
        switch (ageYears) {
          case 1:
            suffix = "st";
            break;
          case 2:
            suffix = "nd";
            break;
          case 3:
            suffix = "rd";
            break;
          default:
            suffix = "th";
        }
        setBirthDayGreeting(`Happy ${ageYears + suffix} Birthday !!!`);
      } else {
        setBirthDayGreeting("");
      }
    }
  };

  function clear() {
    setDateOfBirth("");
    setTodaysDate("");
    setValue(dayjs(""));
    setTodayDateValue(dayjs(""));
  }

  return (
    <div className="container p-2">
      {/* <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="form-control"
            label="Controlled picker"
            value={value}
            onChange={(e) => setValue(e)}
            renderInput={(params) => <h1 {...params} />}
          />
        </LocalizationProvider>
      </div> */}
      <div
        className={`d-flex border p-1 sticky-top rounded justify-content-between ${
          themeToggle
            ? "text-light bg-dark  border-secondary"
            : "text-dark bg-light"
        }`}
      >
        <div id="title" className="p-2 fs-2 justify-content-start">
          Age Calculator
        </div>

        <div className="">
          <span className="form-check form-switch fs-4">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => setThemeToggle(!themeToggle)}
            />
          </span>
          <div className="fs-1 mt-2">
            {themeToggle ? (
              <span>&#9789; </span>
            ) : (
              <span className="text-warning"> &#9788;</span>
            )}
          </div>
        </div>
      </div>

      {/* <hr className={`${themeToggle ? "text-light" : "text-dark"}`} /> */}
      <DevName themeToggle={themeToggle} />
      <div
        className={`border rounded p-3 ${
          themeToggle ? "border-secondary" : ""
        }`}
      >
        <div className="row">
          <span className="col-5">
            <h5 className={`${themeToggle ? "text-info" : "text-primary"}`}>
              Today's Date
            </h5>
          </span>
          <span id="inputError" className="col-7 text-danger text-end">
            <span
              className={`fs-8 fw-bold ${
                themeToggle ? "text-info" : "text-success"
              }`}
            >
              {currentDateDay}
            </span>
            <span id="err">{errorTodaysDate}</span>
          </span>
        </div>
        <div className="border rounded">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              format="DD-MM-YYYY"
              value={todayDateValue}
              className={`form-control ${themeToggle ? "bg-dark" : "bg-light"}`}
              onChange={(e) => setTodayDateValue(dayjs(e))}
              slotProps={{
                popper: {
                  sx: {
                    ".MuiPaper-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      backgroundColor: `${themeToggle ? "black" : "whilte"}`,
                    },
                    ".MuiButtonBase-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                    },
                    ".MuiTypography-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                    },
                  },
                },
                textField: {
                  sx: {
                    ".MuiSvgIcon-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      background: `${
                        themeToggle ? "black !important" : "white !important"
                      }`,
                    },
                    ".MuiInputBase-input": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      background: "gery",
                    },
                    ".MuiButtonBase-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      background: "gery",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
        {/* <div>
          <input
            id={`${themeToggle ? "todayDateInputDark" : "todayDateInputLight"}`}
            className={`form-control ${
              themeToggle ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            placeholder="DD/MM/YYYY"
            value={todaysDate}
            onChange={(e) => setTodaysDate(e.target.value)}
          ></input>
        </div> */}
        <div className="row mt-2 pt-2">
          <span
            className={`col-5 ${themeToggle ? "text-info" : "text-primary"}`}
          >
            <h5>Date of Birth</h5>
          </span>
          <span id="inputError" className="col-7 text-danger text-end">
            <span
              className={`fs-8 fw-bold ${
                themeToggle ? "text-info" : "text-success"
              }`}
            >
              {birthDateDay}
            </span>
            <span id="err">{errorDateOfBirth}</span>
          </span>
        </div>
        <div className="border rounded">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              format="DD-MM-YYYY"
              value={value}
              className={`form-control ${themeToggle ? "bg-dark" : "bg-light"}`}
              onChange={(e) => setValue(dayjs(e))}
              slotProps={{
                popper: {
                  sx: {
                    ".MuiPaper-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      backgroundColor: `${themeToggle ? "black" : "whilte"}`,
                    },
                    ".MuiButtonBase-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                    },
                    ".MuiTypography-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                    },
                  },
                },
                textField: {
                  sx: {
                    ".MuiSvgIcon-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      background: `${
                        themeToggle ? "black !important" : "white !important"
                      }`,
                    },
                    ".MuiInputBase-input": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      background: "gery",
                    },
                    ".MuiButtonBase-root": {
                      color: `${
                        themeToggle ? "white !important" : "black !important"
                      }`,
                      background: "gery",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
        {/* <div>
          <input
            type="date"
            id={`${themeToggle ? "birthDateInputDark" : "birthDateInputLight"}`}
            className={`form-control ${
              themeToggle ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            placeholder="DD/MM/YYYY"
            label="DD/MM/YYYY"
            value={dateOfBirth}
            onChange={(newValue) => setDateOfBirth(newValue)}
          ></input>
        </div> */}

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
      </div>
      <Greeting themeToggle={themeToggle} greeting={birthdayGreeting} />
      <div className="mt-2 pt-2">
        <hr className={`${themeToggle ? "text-light" : "text-dark"}`} />
        <Age
          themeToggle={themeToggle}
          ageYear={year}
          ageMonth={month}
          ageDay={day}
        />
        <NextBirthday
          themeToggle={themeToggle}
          nextBirthdayMonths={nextBirthdayMonths}
          nextBirthdayDays={nextBirthdayDays}
        />
        <ExtraInfo
          themeToggle={themeToggle}
          totalYears={totalYears}
          totalMonths={totalMonths}
          totalWeek={totalWeek}
          totalHours={totalHours}
          totalMinutes={totalMinutes}
          totalSeconds={totalSeconds}
        />
      </div>
    </div>
  );
}
