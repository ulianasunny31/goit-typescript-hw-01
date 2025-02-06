enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return true;
  }
  return false;
};

let res = isWeekend(DayOfWeek.Friday);
console.log(res);
