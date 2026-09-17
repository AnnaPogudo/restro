import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Animated from '../components/Animated'
import { motion, AnimatePresence } from 'motion/react'
import { HelpCircle } from 'lucide-react'
import IngredientsTooltip from '../components/IngredientsTooltip'

const Dishes = () => {
    const { t } = useTranslation();
    const dishes = [
        { id: '01', img: '/assets/dish1.png', titleKey: 'dish.01.title', priceKey: 'dish.01.price', ingredients: [
            { nameKey: 'dish.01.ingredients.chicken', icon: 'Drumstick' },
            { nameKey: 'dish.01.ingredients.fettuccine', icon: 'Wheat' },
            { nameKey: 'dish.01.ingredients.cream', icon: 'Milk' },
            { nameKey: 'dish.01.ingredients.parmesan', icon: 'Cheese' },
            { nameKey: 'dish.01.ingredients.garlic', icon: 'Vegan' },
            { nameKey: 'dish.01.ingredients.parsley', icon: 'Leaf' },
        ] },
        { id: '02', img: '/assets/dish2.png', titleKey: 'dish.02.title', priceKey: 'dish.02.price', ingredients: [
            { nameKey: 'dish.02.ingredients.rice', icon: 'Wheat' },
            { nameKey: 'dish.02.ingredients.mushrooms', icon: 'Vegan' },
            { nameKey: 'dish.02.ingredients.onion', icon: 'Vegan' },
            { nameKey: 'dish.02.ingredients.wine', icon: 'Wine' },
            { nameKey: 'dish.02.ingredients.parmesan', icon: 'Cheese' },
            { nameKey: 'dish.02.ingredients.butter', icon: 'Milk' },
        ] },
        { id: '03', img: '/assets/dish3.png', titleKey: 'dish.03.title', priceKey: 'dish.03.price', ingredients: [
            { nameKey: 'dish.03.ingredients.tomato', icon: 'Vegan' },
            { nameKey: 'dish.03.ingredients.mozzarella', icon: 'Cheese' },
            { nameKey: 'dish.03.ingredients.basil', icon: 'Leaf' },
            { nameKey: 'dish.03.ingredients.oliveOil', icon: 'Droplet' },
            { nameKey: 'dish.03.ingredients.balsamic', icon: 'Droplet' },
        ] },
        { id: '04', img: '/assets/dish4.png', titleKey: 'dish.04.title', priceKey: 'dish.04.price', ingredients: [
            { nameKey: 'dish.04.ingredients.spaghetti', icon: 'Wheat' },
            { nameKey: 'dish.04.ingredients.beef', icon: 'Beef' },
            { nameKey: 'dish.04.ingredients.sauce', icon: 'Soup' },
            { nameKey: 'dish.04.ingredients.parmesan', icon: 'Cheese' },
            { nameKey: 'dish.04.ingredients.garlic', icon: 'Vegan' },
            { nameKey: 'dish.04.ingredients.basil', icon: 'Leaf' },
        ] },
        { id: '05', img: '/assets/dish5.png', titleKey: 'dish.05.title', priceKey: 'dish.05.price', ingredients: [
            { nameKey: 'dish.05.ingredients.romaine', icon: 'Leaf' },
            { nameKey: 'dish.05.ingredients.croutons', icon: 'Wheat' },
            { nameKey: 'dish.05.ingredients.parmesan', icon: 'Cheese' },
            { nameKey: 'dish.05.ingredients.chicken', icon: 'Drumstick' },
            { nameKey: 'dish.05.ingredients.caesar', icon: 'Milk' },
        ] },
        { id: '06', img: '/assets/dish6.png', titleKey: 'dish.06.title', priceKey: 'dish.06.price', ingredients: [
            { nameKey: 'dish.06.ingredients.salmon', icon: 'Fish' },
            { nameKey: 'dish.06.ingredients.lemon', icon: 'Citrus' },
            { nameKey: 'dish.06.ingredients.asparagus', icon: 'Vegan' },
            { nameKey: 'dish.06.ingredients.oliveOil', icon: 'Droplet' },
            { nameKey: 'dish.06.ingredients.dill', icon: 'Leaf' },
        ] },
        { id: '07', img: '/assets/dish7.png', titleKey: 'dish.07.title', priceKey: 'dish.07.price', ingredients: [
            { nameKey: 'dish.07.ingredients.ribeye', icon: 'Beef' },
            { nameKey: 'dish.07.ingredients.butter', icon: 'Milk' },
            { nameKey: 'dish.07.ingredients.garlic', icon: 'Vegan' },
            { nameKey: 'dish.07.ingredients.rosemary', icon: 'Leaf' },
            { nameKey: 'dish.07.ingredients.salt', icon: 'Sparkles' },
            { nameKey: 'dish.07.ingredients.pepper', icon: 'Circle' },
        ] },
        { id: '08', img: '/assets/dish8.png', titleKey: 'dish.08.title', priceKey: 'dish.08.price', ingredients: [
            { nameKey: 'dish.08.ingredients.linguine', icon: 'Wheat' },
            { nameKey: 'dish.08.ingredients.shrimp', icon: 'Fish' },
            { nameKey: 'dish.08.ingredients.mussels', icon: 'Fish' },
            { nameKey: 'dish.08.ingredients.tomato', icon: 'Vegan' },
            { nameKey: 'dish.08.ingredients.wine', icon: 'Wine' },
            { nameKey: 'dish.08.ingredients.parsley', icon: 'Leaf' },
        ] },
    ];
    const [rotate, setRotate] = useState({})
    const [hovered, setHovered] = useState(null)

    return (
        <section id='dishes' className="px-auto mt-44">
            <div className="text-center mb-16">
                <Animated>
                    <p className="text-orange-500 font-medium uppercase mb-3.5">
                        {t('dishes.eyebrow')}
                    </p>
                </Animated>
                <Animated>
                    <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
                        {t('dishes.title')}
                    </h2>
                </Animated>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto">
                {dishes.map((dish, index) => (
                    <Animated
                        key={dish.id || index}
                        y={80}
                        delay={index * 0.1}
                        className="relative flex flex-col items-center text-center shrink-0 cursor-pointer"
                        onMouseEnter={() => setRotate((prev) => ({ ...prev, [index]: (prev[index] || 0) + 180 }))}
                    >
                        <motion.div
                            animate={{ rotate: rotate[index] || 0 }}
                            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                        >
                            <img src={dish.img} alt={t(dish.titleKey)} className="size-30 md:size-35 object-cover" />
                        </motion.div>

                        <h3 className="mt-5 flex items-center gap-1.5">
                            {t(dish.titleKey)}
                            <span
                                className="relative inline-flex items-center justify-center"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <HelpCircle size={14} className="text-zinc-400 hover:text-orange-500 transition-colors" />

                                <AnimatePresence>
                                    {hovered === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                            transition={{ duration: 0.2, delay: 0.15, ease: 'easeOut' }}
                                        >
                                            <IngredientsTooltip ingredients={dish.ingredients.map((item) => ({ ...item, name: t(item.nameKey) }))} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </span>
                        </h3>

                        <p className="mt-2 text-zinc-600">{t(dish.priceKey)}</p>
                    </Animated>
                ))}
            </div>
        </section>
    )
}

export default Dishes