import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Animated from '../components/Animated';
import MapModal from '../components/MapModal';
import { restaurantPosition } from '../data/data';

const About = () => {
    const { t } = useTranslation();
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <section id='about' className="px-auto mt-44">
            <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto">
                <Animated scale={0.8} y={0}>
                    <img src='/assets/about.png' alt='Dish' className="max-w-137 w-full h-full object-cover rounded-3xl" />
                </Animated>

                <div>
                    <Animated scale={0.8} y={0} className="flex items-center gap-2">
                        <img src='assets/iconL.png' alt='iconLeft' />
                        <span className="font-medium uppercase">{t('about.eyebrow')}</span>
                        <img src='assets/iconR.png' alt='iconRight' />
                    </Animated>

                    <Animated scale={0.8} y={0} className="mt-5 text-4xl md:text-5xl text-balance">
                        <h2>{t('about.title')}</h2>
                    </Animated>

                    <Animated delay={0.2}>
                        <p className="mt-4.5 text-zinx-600 max-w-sm">{t('about.description')}</p>
                    </Animated>

                    <Animated className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit hover:scale-105 duration-300">
                        <img src='/assets/about.png' alt='Bistro Royale Location Preview' className="size-15 rounded-lg object-cover shrink-0" />
                        <div className="flex flex-col gap-2">
                            <p className="font-medium">{t('about.location')}</p>
                            <button
                                onClick={() => setIsMapOpen(true)}
                                className="text-left underline hover:no-underline cursor-pointer"
                            >
                                {t('about.mapButton')}
                            </button>
                        </div>
                    </Animated>
                </div>
            </div>
            <MapModal
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
                title={t(restaurantPosition.titleKey)}
                address={t(restaurantPosition.addressKey)}
            />
        </section>
    )
}
export default About;