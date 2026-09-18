import React from 'react'
import { useTranslation } from 'react-i18next';
import Animated from '../components/Animated';
import { Star } from 'lucide-react';
import ChefCapybara from '../components/CapibaraMaskot';

const avatars = [
    "/assets/user-1.jpeg",
    "/assets/user-2.jpeg",
    "/assets/user-3.jpeg",
    "/assets/user-4.jpeg",
]
const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id='hero-section' className="flex flex-col items-center justify-center min-h-screen bg-[url(/assets/heroBanner.png)] bg-cover bg-center bg-no-repeat px-4 pt-20">
            <ChefCapybara />
            <Animated y={-20} delay={0.2}>
                <p className="text-orange-600 text-sm font-medium uppercase tracking-widest">
                    {t('hero.eyebrow')}
                </p>
            </Animated>
            <Animated >
                <h1 className="text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance">{t('hero.title')}</h1>
            </Animated>
            <Animated delay={0.2}>
                <p className="text-zinc-600 max-w-md text-center mt-3">
                    {t('hero.description')}
                </p>
            </Animated>

            <Animated>
                <a href='#booking-process'
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 mt-8 rounded-full block transition">
                    {t('hero.bookTable')}
                </a>
            </Animated>

            <Animated className="flex items-center justify-center md:justify-start mt-9">
                <div className="flex -space-x-3.5 pr-3">
                    {avatars.map((src, i) => (
                        <img src={src} alt='guest' key={i} className="size-10 border-2 border-slate-50 rounded-full hover:-translate-y-px transition" />
                    ))}
                </div>
                <div>
                    <div>
                        <div className="flex items-center gap-0.5" >
                            {[...Array(5).map((_, i) => (
                                <Star key={i} className="size-3.5 fill-orange-500 text-orange-500" />
                            ))]}
                        </div>
                        <p className="text-zinc-600">{t('hero.ratingLabel')}</p>
                    </div>
                </div>
            </Animated>
        </section>
    )
}

export default HeroSection;