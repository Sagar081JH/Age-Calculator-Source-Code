export const calculate = (
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
) => {
  e.preventDefault();

  const isDobInvalid = dateOfBirth.includes("Invalid");
  const isTodayDateInvalid = todaysDate.includes("Invalid");

  if (isDobInvalid || isTodayDateInvalid) {
    if (isDobInvalid) {
      setBirthDateDay("");
      setDateOfBirthError("Enter Valid Date : DD/MM/YYYY");
      setBirthDayGreeting("");
    } else {
      setDateOfBirthError("");
    }

    if (isTodayDateInvalid) {
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
    setTotalDays("0");
  }
  setDateOfBirthError("");
  setTodaysDateError("");

  let birth = dateOfBirth.split("-");
  let todayD1 = todaysDate.split("-");

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
    return;
  }

  let birthDate1 = {
    birthYear: parseInt(birth[0]),
    birthMonth: parseInt(birth[1]),
    birthDay: parseInt(birth[2]),
  };

  let todaysDate1 = {
    birthYear: parseInt(todayD1[0]),
    birthMonth: parseInt(todayD1[1]),
    birthDay: parseInt(todayD1[2]),
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

  const birthDate2 = new Date(
    birthDate1.birthYear,
    birthDate1.birthMonth - 1,
    birthDate1.birthDay + 1
  ); // Note: month is zero-based

  if (birthDate > currentDate) {
    setYear("");
    setMonth("");
    setDay("");
    setBirthDateDay("");
    setNextBirthdayDays("");
    setNextBirthdayMonths("");
    setTotalYears("");
    setTotalDays("");
    setTotalSeconds("");
    setTotalMinutes("");
    setTotalHours("");
    setTotalWeek("");
    setTotalMonths("");
    setDateOfBirthError("Birth date should be less than today's date!");
    return;
  }

  setCurrentDateDay(currentDate1.toUTCString().substring(0, 3));
  setBirthDateDay(birthDate2.toUTCString().substring(0, 3));

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
      currentDate.getMonth() - 2,
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
        setNextBirthdayDays(`${30 - ageDays}`);
        if (birthDate.getDate() > currentDate.getDate()) {
          setNextBirthdayMonths(months);
        } else {
          setNextBirthdayMonths(months - 1);
        }
      }
    }
  } else {
    if (ageDays == 0) {
      let months = 12 - (currentDate.getMonth() - birthDate.getMonth());
      setNextBirthdayMonths(months);
      setNextBirthdayDays("0");
    } else if (ageDays < currentDate.getDate()) {
      let months = 11 - (currentDate.getMonth() - birthDate.getMonth());
      setNextBirthdayMonths(months);
      setNextBirthdayDays(`${30 - ageDays}`);
    } else {
      let months = 12 - (currentDate.getMonth() - birthDate.getMonth());
      setNextBirthdayMonths(months);
      setNextBirthdayDays(`${31 - ageDays}`);
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

  setTotalYears(ageYears);
  setTotalSeconds(seconds);
  setTotalMinutes(minutes);
  setTotalHours(hours);
  setTotalWeek(Math.floor(hours / 168));
  setTotalDays(Math.floor(hours / 24));
  setTotalMonths(Math.floor(hours / 730));

  setIsCalculated(true);

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
};
