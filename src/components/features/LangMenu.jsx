import React from 'react'
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useLanguage } from '../../context/LanguageContext'

const LangMenu = ({ buttonClass = '' }) => {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            onClick={() => toggleLang()}
            className={`${buttonClass} flex flex-row gap-1.5 portrait:gap-0.5 text-2xl content-center`}
        >
            <span className="text-sm portrait:text-xs">{ lang === 'pt' ? "PT-BR" : "EN-US" }</span>
            { lang === 'pt' ? <GiBrazilFlag /> : <LiaFlagUsaSolid /> }
        </button>
    )
}

export default LangMenu