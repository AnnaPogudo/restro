import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { createTimeSlots, getDateKey, isDateAvailable, openingHours } from '../utils/reservation';

const allBookingTimeSlots = Array.from({ length: 24 }, (_, index) => {
  const totalMinutes = 10 * 60 + index * 30;
  const hour = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const minute = String(totalMinutes % 60).padStart(2, '0');
  return `${hour}:${minute}`;
});

const ReservationDatePicker = ({ date, time, onDateChange, onTimeChange }) => {
  const { t, i18n } = useTranslation();
  const [visibleMonth, setVisibleMonth] = useState(() => new Date());
  const [currentDate, setCurrentDate] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const today = useMemo(() => {
    const current = new Date();
    current.setHours(0, 0, 0, 0);
    return current;
  }, []);

  const selectedDate = useMemo(
    () => (date ? new Date(`${date}T00:00:00`) : null),
    [date],
  );
  const selectedHours = selectedDate ? openingHours[selectedDate.getDay()] : null;
  const timeSlots = createTimeSlots(selectedHours, selectedDate, currentDate);
  const monthLabel = new Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric' }).format(visibleMonth);
  const dateLabel = selectedDate
    ? new Intl.DateTimeFormat(i18n.language, { day: 'numeric', month: 'long', year: 'numeric' }).format(selectedDate)
    : t('reservation.calendar.noDate');
  const monthStart = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
  const firstWeekday = (monthStart.getDay() + 6) % 7;
  const calendarDays = Array.from({ length: firstWeekday + daysInMonth }, (_, index) => (
    index < firstWeekday
      ? null
      : new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), index - firstWeekday + 1)
  ));
  const canGoBack = visibleMonth.getFullYear() > today.getFullYear()
    || (visibleMonth.getFullYear() === today.getFullYear() && visibleMonth.getMonth() > today.getMonth());

  const selectDate = (nextDate) => {
    if (!isDateAvailable(nextDate, today, currentDate)) return;
    onDateChange(getDateKey(nextDate));
  };

  const changeMonth = (offset) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <CalendarDays size={16} className="text-orange-500" />
          {t('reservation.dateTime')}
        </span>
        <span className="text-sm text-zinc-500">
          {dateLabel}
          {time ? `, ${time}` : ''}
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(14rem,0.8fr)]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <button type="button" onClick={() => changeMonth(-1)} disabled={!canGoBack} className="grid size-9 place-items-center rounded-full transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-30" aria-label={t('reservation.calendar.previousMonth')}>
                <ChevronLeft size={18} />
              </button>
              <h3 className="font-urbanist text-lg font-medium capitalize">{monthLabel}</h3>
              <button type="button" onClick={() => changeMonth(1)} className="grid size-9 place-items-center rounded-full transition hover:bg-orange-50" aria-label={t('reservation.calendar.nextMonth')}>
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mb-2 grid grid-cols-7 text-center text-xs font-medium uppercase text-zinc-400">
              {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
                <span key={day}>{t(`reservation.calendar.${day}`)}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((calendarDate, index) => {
                if (!calendarDate) return <span key={`empty-${index}`} className="aspect-square" />;
                const dateKey = getDateKey(calendarDate);
                const available = isDateAvailable(calendarDate, today, currentDate);
                const selected = date === dateKey;
                return (
                  <button key={dateKey} type="button" disabled={!available} onClick={() => selectDate(calendarDate)} className={`aspect-square rounded-full text-sm transition ${selected ? 'bg-orange-500 text-white' : available ? 'hover:bg-orange-50' : 'cursor-not-allowed text-zinc-300'}`}>
                    {calendarDate.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Clock size={15} className="text-orange-500" />
                {t('reservation.calendar.availableTimes')}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
                {allBookingTimeSlots.map((slot) => {
                  const available = Boolean(date) && timeSlots.includes(slot);
                  return (
                  <button key={slot} type="button" disabled={!available} onClick={() => onTimeChange(slot)} className={`rounded-full border py-2 text-sm transition-all duration-500 ${time === slot ? 'border-orange-500 bg-orange-500 text-white' : available ? 'border-slate-200 hover:border-orange-400 hover:text-orange-500' : 'cursor-not-allowed border-slate-100 text-zinc-300'} ${date ? 'translate-y-0 opacity-100' : 'opacity-60'}`}>
                    {slot}
                  </button>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDatePicker;
