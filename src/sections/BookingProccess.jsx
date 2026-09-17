import { useTranslation } from 'react-i18next';
import Animated from "../components/Animated"
import { Star } from "lucide-react"

const BookingProcess = () => {
    const { t } = useTranslation();
    const bookingSteps = [
        { number: '(01)', titleKey: 'booking.steps.01.title', descriptionKey: 'booking.steps.01.description' },
        { number: '(02)', titleKey: 'booking.steps.02.title', descriptionKey: 'booking.steps.02.description' },
        { number: '(03)', titleKey: 'booking.steps.03.title', descriptionKey: 'booking.steps.03.description' },
    ];
    const bookingTestimonial = { rating: 5, quoteKey: 'booking.testimonial.quote', authorNameKey: 'booking.testimonial.authorName' };

    return (
        <section id='booking-process' className="px-auto mt-44">
            <div className="max-w-7xl ma-auto grid md:grid-cols-2 gap-16 md:gap-25">
                <div className="flex flex-col text-center md:text-left">
                    <Animated delay={0.2}>
                        <p className="text-orange-500 font-medium uppercase mb-4">{t('booking.eyebrow')}</p>
                    </Animated>
                    <Animated delay={0.2}>
                        <h2 className="text-4xl md:text-5xl mb-16">
                            {t('booking.title')}
                        </h2>
                    </Animated>
                    <Animated className="flex gap-0.5 mb-6 justify-center md:justify-start">
                        {[...Array(bookingTestimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="size 4 fill-orange-500 text-orange-500" />
                        ))}
                    </Animated>
                    <Animated delay={0.2}>
                        <h2 className="text-zinc-600 max-w-xs max-mad:mx-auto mb-4">
                            "{t(bookingTestimonial.quoteKey)}"
                        </h2>
                    </Animated>

                    <Animated className="flex items-center justify-center md:justify-start gap-3">
                        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop' alt={bookingTestimonial.authorName}
                            className="size-12 rounded-full object-cover" />
                        <span>
                            {t(bookingTestimonial.authorNameKey)}
                        </span>
                    </Animated>
                </div>
                <div className="space-y-14 text-left">
                    {bookingSteps.map((step, index) => (
                        <Animated key={index} y={150} delay={index * 0.15} className="flex items-start gap-9 ">
                            <span className="text-orange-500 font-medium text-lg shrink-0">{step.number}</span>
                            <div className="flex flex-col">
                                <h3 className="text-xl mb-5">{t(step.titleKey)}</h3>
                                <p className="textzinc-600">{t(step.descriptionKey)}</p>
                            </div>
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BookingProcess
