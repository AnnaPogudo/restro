import { Mail, Phone } from "lucide-react"
import { useTranslation } from 'react-i18next';
import { quickLinks, sitemapLinks, socialLinks } from "../data/data"
import Animated from "./Animated"

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="px-auto relative mt-44 overflow-hidden">
            <div className="max-w-7xl mx-quto">
                <div className="flex flex-wrap gap-6 justify-between pb-8">
                    <div className="flex flex-col items-start left-text">
                        <Animated>
                            <img src="/assets/logo.svg" alt="logo" />
                        </Animated>
                        <Animated delay={0.2}>
                            <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                                {t('footer.description')}
                            </p>
                        </Animated>
                        <div className="flex items-center gap-1.5 mt-6">
                            {socialLinks.map((item, index) => (
                                <Animated key={index} delay={index * 0.05}>
                                    <a href={item.href} className="size-7.5 rounded-full border border-slate-300 grid place-content-center" aria-label={t(item.nameKey)}>{item.icon}</a>
                                </Animated>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-medium mb-5">
                            {t('footer.quickLinksTitle')}
                        </p>
                        <div className="flex flex-col gap-2.5">
                            {quickLinks.map((link, index) => (
                                <Animated key={`${link.nameKey}-${index}`} delay={index * 0.05}>
                                    <a href={link.href} className="text-zinc-600 hover:text-zinc-500">
                                        {t(link.nameKey)}
                                    </a>
                                </Animated>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-medium mb-5">{t('footer.getInTouchTitle')}</p>
                        <div className="space-y-2">
                            <Animated>
                                <a href="mailto:hello@example.com" className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500">
                                    <Mail size={16} className="shrink-0" />
                                    hello@example.com
                                </a>
                            </Animated>
                            <Animated delay={0.2}>
                                <a href="telto:987-654-321" className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500">
                                    <Phone size={16} className="shrink-0" />
                                    987-654-321
                                </a>
                            </Animated>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium mb-5">{t('footer.sitemapTitle')}</p>
                        <div className="flex flex-col gap-2.5">
                            {sitemapLinks.map((link, index) => (
                                <Animated key={`${link.nameKey}-${index}`} delay={index * 0.05}>
                                    <a href={link.href} className="text-zinc-600 hover:text-zinc-500">
                                        {t(link.nameKey)}
                                    </a>
                                </Animated>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
            <div className="absolute inset-0 text-center select-none -z-1 pointer-events-none">
                <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70">Restro</span>
            </div>
        </footer>
    )
}

export default Footer
