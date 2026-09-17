import { useTranslation } from 'react-i18next';
import Animated from '../components/Animated'

const Stats = () => {
    const { t } = useTranslation();
    const statsData = [
        { number: '01', titleKey: 'stats.01.title', descriptionKey: 'stats.01.description' },
        { number: '02', titleKey: 'stats.02.title', descriptionKey: 'stats.02.description' },
        { number: '03', titleKey: 'stats.03.title', descriptionKey: 'stats.03.description' },
    ];

    return (
        <section id='stats' className="px-auto mt-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-25 max-w-7xl mx-auto">
                {statsData.map((item,index) => (
                    <Animated key={index} delay={0.2} className="flex flex-col items-center text-center">
                        <span className="text-6xl">{item.number}</span>
                        <h3 className="mt-5.5 text-2xl">{t(item.titleKey)}</h3>
                        <p className="mt-3.5 font-light text-zinc-600 max-w-72">{t(item.descriptionKey)}</p>
                    </Animated>
                ))}
            </div>
        </section>
    )
}

export default Stats 