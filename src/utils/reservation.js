export const openingHours = {
  0: null,
  1: { start: 10, end: 21 },
  2: { start: 11, end: 22 },
  3: { start: 10, end: 21 },
  4: { start: 10, end: 22 },
  5: null,
  6: { start: 11, end: 22 },
};

export const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const createTimeSlots = (hours, date, currentDate = new Date()) => {
  if (!hours || !date) return [];

  const isToday = getDateKey(date) === getDateKey(currentDate);
  const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();

  return Array.from({ length: (hours.end - hours.start) * 2 }, (_, index) => {
    const totalMinutes = hours.start * 60 + index * 30;
    if (isToday && totalMinutes <= currentMinutes) return null;

    const hour = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
    const minute = String(totalMinutes % 60).padStart(2, '0');
    return `${hour}:${minute}`;
  }).filter(Boolean);
};

export const isDateAvailable = (date, today, currentDate = new Date()) => {
  if (date < today) return false;

  const hours = openingHours[date.getDay()];
  if (!hours) return false;

  return createTimeSlots(hours, date, currentDate).length > 0;
};
