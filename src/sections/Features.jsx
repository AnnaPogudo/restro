import { ChefHat, Heart, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import Animated from '../components/Animated'

const iconMap = {
    ChefHat,
    Leaf,
    Heart
}

const Features = () => {
    const { t } = useTranslation();
    const featuresData = [
        { icon: 'ChefHat', titleKey: 'features.chef.title', descriptionKey: 'features.chef.description' },
        { icon: 'Leaf', titleKey: 'features.farm.title', descriptionKey: 'features.farm.description' },
        { icon: 'Heart', titleKey: 'features.hospitality.title', descriptionKey: 'features.hospitality.description' },
    ];

    return (
        <section id='features' className="px-auto mt-44">
            <div className="text-center mb-16">
                <Animated>
                    <p className="text-orange-500 font-medium uppercase mb-3.5">
                        {t('features.eyebrow')}
                    </p>
                </Animated>
                <Animated>
                    <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
                        {t('features.title')}
                    </h2>
                </Animated>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl ma-auto">
                <div className="space-y-10 max-w-md">
                    {featuresData.map((item, index) => {
                        const IconComponent = iconMap[item.icon];
                        return (
                            <Animated key={index} y={150} delay={index * 0.15}
                                className="flex items-start gap-4 text-left">
                                {IconComponent && (
                                    <IconComponent className="text-orange-500 size-5 shrink-0 mt-0.5" />
                                )}
                                <div>
                                    <h3 className="text-xl mb-2">{t(item.titleKey)}</h3>
                                    <p className="text-zinc-600 max-w-sm">{t(item.descriptionKey)}</p>
                                </div>
                            </Animated>
                        )
                    })}
                </div>
                <Animated x={50} y={0}>
                    <img src='/assets/chef.png' alt='Chef'
                        className="w-full max-w-sm h-111 object-cover rounded-3xl" />
                </Animated>
            </div>
        </section>
    )
}

export default Features
