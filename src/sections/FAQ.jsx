import { useState } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Animated from "../components/Animated";

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { questionKey: 'faq.q1.question', answerKey: 'faq.q1.answer' },
        { questionKey: 'faq.q2.question', answerKey: 'faq.q2.answer' },
        { questionKey: 'faq.q3.question', answerKey: 'faq.q3.answer' },
        { questionKey: 'faq.q4.question', answerKey: 'faq.q4.answer' },
        { questionKey: 'faq.q5.question', answerKey: 'faq.q5.answer' },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="px-auto mt-44">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <Animated delay={0.2}>
                        <p className="text-orange-500 font-medium uppercase mb-4">
                            {t('faq.eyebrow')}
                        </p>
                    </Animated>
                    <Animated delay={0.2}>
                        <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto text-balance">
                            {t('faq.title')}
                        </h2>
                    </Animated>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <Animated key={index} delay={index * 0.15} y={150}>
                                <div className="border border-slate-200 text-zinc-500 rounded-l">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50/50 transition-colors text-left"
                                    >
                                        <span className="text-zinc-700 pr-4">{t(faq.questionKey)}</span>
                                        <span className="size-7 rounded-full bg-black/5 grid place-content-center shrink-0">
                                            <Plus
                                                size={14}
                                                className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                            />
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-4 leading-relaxed">
                                                {t(faq.answerKey)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Animated>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;