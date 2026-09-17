import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Animated from '../components/Animated';
import ReservationDatePicker from '../components/ReservationDatePicker';

const ReservationForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('mgaveldw');
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });

  const updateField = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  if (state.succeeded) {
    return (
      <section id="reservation-form" className="px-auto mt-44">
        <div className="max-w-3xl mx-auto rounded-3xl bg-orange-50 px-6 py-16 text-center md:px-12">
          <p className="text-orange-500 font-medium uppercase mb-4">{t('reservation.eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl">{t('reservation.success.title')}</h2>
          <p className="mt-4 text-zinc-600">{t('reservation.success.description')}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation-form" className="mt-44">
<div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[1.2fr_1.2fr] justify-between">
        <Animated y={30} className={`flex flex-col justify-center transition-transform duration-500 ease-out ${formData.date ? 'md:translate-y-24' : 'translate-y-0'}`}>
          <p className="text-orange-400 font-medium uppercase mb-4">{t('reservation.eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl font-urbanist font-medium">{t('reservation.title')}</h2>
          <p className="mt-5 max-w-sm text-zinc-400">{t('reservation.description')}</p>
        </Animated>

        <Animated y={30} delay={0.15}>
          <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl bg-white p-5 text-zinc-900 md:p-7">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">{t('reservation.name')}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField('name')}
                  className="w-full rounded-lg border border-slate-200 p-3 outline-none transition focus:border-orange-500"
                  required
                />
                <ValidationError prefix={t('reservation.name')} field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">{t('reservation.email')}</label>
                <input
                  id="email"
                  type="email"
                  name="_replyto"
                  value={formData.email}
                  onChange={updateField('email')}
                  className="w-full rounded-lg border border-slate-200 p-3 outline-none transition focus:border-orange-500"
                  required
                />
                <ValidationError prefix={t('reservation.email')} field="_replyto" errors={state.errors} />
              </div>
            </div>

            <div>
              <ReservationDatePicker
                date={formData.date}
                time={formData.time}
                onDateChange={(date) => setFormData((current) => ({ ...current, date, time: '' }))}
                onTimeChange={(time) => setFormData((current) => ({ ...current, time }))}
              />

              <input type="hidden" name="date" value={formData.date} required />
              <input type="hidden" name="time" value={formData.time} required />
              <input type="hidden" name="_subject" value={`Новая бронь: ${formData.name}`} />
            </div>

            <button
              type="submit"
              disabled={state.submitting || !formData.date || !formData.time}
              className="bg-orange-500 py-3 rounded-lg font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state.submitting ? t('reservation.submitting') : t('reservation.submit')}
            </button>
          </form>
        </Animated>
      </div>
    </section>
  );
};

export default ReservationForm;