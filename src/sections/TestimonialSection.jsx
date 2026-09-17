import { useTranslation } from 'react-i18next';
import Animated from "../components/Animated"
import { Star } from "lucide-react"

const TestimonialSection = () => {
    const { t } = useTranslation();
    const testimonials = [
        { rating: 5, reviewKey: 'testimonials.item.1.review', nameKey: 'testimonials.item.1.name', locationKey: 'testimonials.item.1.location', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop' },
        { rating: 5, reviewKey: 'testimonials.item.2.review', nameKey: 'testimonials.item.2.name', locationKey: 'testimonials.item.2.location', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop' },
        { rating: 5, reviewKey: 'testimonials.item.3.review', nameKey: 'testimonials.item.3.name', locationKey: 'testimonials.item.3.location', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop' },
        { rating: 5, reviewKey: 'testimonials.item.4.review', nameKey: 'testimonials.item.4.name', locationKey: 'testimonials.item.4.location', avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=200&h=200&auto=format&fit=crop' },
        { rating: 5, reviewKey: 'testimonials.item.5.review', nameKey: 'testimonials.item.5.name', locationKey: 'testimonials.item.5.location', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&auto=format&fit=crop' },
        { rating: 5, reviewKey: 'testimonials.item.6.review', nameKey: 'testimonials.item.6.name', locationKey: 'testimonials.item.6.location', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop' },
    ];

    return (
        <section id="testimonials" className="px-auto mt-44">
            <div className="text-center mb-14">
                <Animated delay={0.2}>
                    <p className="text-orange-500 font-medium uppercase mb-4">
                        {t('testimonials.eyebrow')}
                    </p>
                </Animated>
                <Animated delay={0.2} >
                    <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
                        {t('testimonials.title')}
                    </h2>
                </Animated>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {testimonials.map((item, index) => (
                    <Animated key={index} y={80} delay={index * 0.1}
                        className="border border-slate-200 hover:bg-scale-50/50 rounded-2xl p-6 flex flex-col justify-between text-left">
                        <div>
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(item.rating)].map((_,i)=>(
                                    <Star key={i} className="size-4 fill-orange-500 text-orange-500"/>
                                ))}
                            </div>
                            <p className="text-zinc-600 leading-relaxed mb-6">"{t(item.reviewKey)}"</p>
                        </div>

                        <div className="flex items-center gap-3 mt-auto">
                            <img src={item.avatar} alt={t(item.nameKey)} className="size-11 rounded-full object-cover shrink-0"/>
                        <div>
                            <p className="fontt-medium leading-tight mb-0.5">{t(item.nameKey)}</p>
                            <p className="text-zinc-600">{t(item.locationKey)}</p>
                        </div>
                        </div>
                    </Animated>
                ))}
            </div>
        </section>
    )
}

export default TestimonialSection