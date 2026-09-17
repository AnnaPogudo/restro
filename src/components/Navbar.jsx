import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { navLinks } from '../data/data';
import { ChevronDown, MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const [languageOpen, setLanguageOpen] = useState(false)

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
        setLanguageOpen(false)
    }

    useEffect(() => {
        const handleScrolled = () => {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScrolled)
        return () => window.removeEventListener('scroll', handleScrolled)
    }, [])

    return (
        <>
            <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`}>
                <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">
                    <a href='/'>
                        <img src='./assets/logo.svg' alt='logo' />
                    </a>
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a href={link.href} key={link.href} className="hover:text-zinc-600">
                                {t(link.nameKey)}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="relative">
                            <button
                                type='button'
                                onClick={() => setLanguageOpen((isOpen) => !isOpen)}
                                aria-expanded={languageOpen}
                                aria-haspopup='listbox'
                                className="flex items-center gap-1.5 px-2 py-2 text-sm uppercase hover:text-zinc-600 transition"
                            >
                                {i18n.language === 'ru' ? 'RU' : 'EN'}
                                <ChevronDown size={15} className={`transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {languageOpen && (
                                <div role='listbox' className="absolute right-0 top-full mt-2 min-w-24 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
                                    <button type='button' role='option' aria-selected={i18n.language === 'en'} onClick={() => changeLanguage('en')} className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-orange-50">EN</button>
                                    <button type='button' role='option' aria-selected={i18n.language === 'ru'} onClick={() => changeLanguage('ru')} className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-orange-50">RU</button>
                                </div>
                            )}
                        </div>
                        <a href='#booking-process' className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
                            {t('nav.bookTable')}
                        </a>
                    </div>

                    <button onClick={() => setMobileOpen(true)}
                        className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square">
                        <MenuIcon />
                    </button>
                </div>
            </nav>

            <div className={`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform duration-300 
                ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center space-y-6 font-medium">
                    {navLinks.map((link) => (
                        <a href={link.href} key={link.href} className="text-2xl text-zinc-800 hover:text-orange-500 transition" onClick={() => setMobileOpen(false)}>
                            {t(link.nameKey)}
                        </a>
                    ))}

                    <div className="flex items-center gap-3">
                        <span className="text-sm uppercase text-zinc-500">Language</span>
                        <button type='button' onClick={() => changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')} className="flex items-center gap-1 text-lg text-zinc-800 hover:text-orange-500 transition">
                            {i18n.language === 'ru' ? 'RU' : 'EN'}
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <button onClick={() => setMobileOpen(false)}
                        className="text-white bg-zinc-800 p-2 rounded-md aspect-square">
                        <XIcon />
                    </button>
                </div>
            </div>
        </>
    )
}
export default Navbar;
