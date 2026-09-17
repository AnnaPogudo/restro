import { Plus, XIcon } from "lucide-react"
import { useTranslation } from 'react-i18next';
import Animated from "../components/Animated"

const FAQ = () => {
    const { t } = useTranslation();
    const faqs = [
        { questionKey: 'faq.q1.question', answerKey: 'faq.q1.answer' },
        { questionKey: 'faq.q2.question', answerKey: 'faq.q2.answer' },
        { questionKey: 'faq.q3.question', answerKey: 'faq.q3.answer' },
        { questionKey: 'faq.q4.question', answerKey: 'faq.q4.answer' },
        { questionKey: 'faq.q5.question', answerKey: 'faq.q5.answer' },
    ];

    return (
        <section id="faq" className="px-auto mt-44">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <Animated delay={0.2}>
                        <p className="text-orange-500 font-medium uppercase mb-4">
                            {t('faq.eyebrow')}
                        </p>
                    </Animated>
                    <Animated delay={0.2} >
                        <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto text-balance">
                            {t('faq.title')}
                        </h2>
                    </Animated>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <Animated key={index} delay={index * 0.15} y={150}>
                            <details className="border border-slate-200 text-zinc-500 rounded-l group">
                                <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-50/50 transition-colors [&::-webkit-details-marker]:hidden">
                                    <span className="text-zinc-700 pr-4">{t(faq.questionKey)}</span>
                                    <span className="size-7 rounded-full bg-black/5 grid place-content-center shrink-0">
                                        <Plus size={14} className="group-open:hidden" />
                                        <XIcon size={14} className="hidden group-open:block" />
                                    </span>
                                </summary>
                                <p className="px-5 pb-4 leading-relaxed transition-all duration-500 opacity-0 -translate-y-2 group-open:opacity-100 group-open:translate-y-0">
                                    {t(faq.answerKey)}
                                </p>
                            </details>
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
