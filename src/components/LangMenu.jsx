import React from 'react'
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useLanguage } from '../context/LanguageContext'

const LangMenu = ({ buttonClass = '' }) => {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            onClick={() => toggleLang()}
            className={`${buttonClass} text-2xl flex flex-col items-center`}
        >
            <span className="text-sm">{ lang === 'pt' ? "PT-BR" : "EN-US" }</span>
            { lang === 'pt' ? <GiBrazilFlag /> : <LiaFlagUsaSolid /> }
        </button>
    )
}

export default LangMenu