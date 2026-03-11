import React from 'react';
import {
    SiJavascript, SiReact, SiTailwindcss, SiPython, SiDjango, SiGit, SiGithub, SiDocker
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di'
import { GrMysql } from "react-icons/gr";
import websiteData from '../../websiteData.json';
import { useLanguage } from '../../context/LanguageContext';
import HomeCard from '../ui/HomeCard';

const ICON_SIZE = 40;

const STACK = [
    { icon: <SiJavascript size={ICON_SIZE} color="#F7DF1E" />, label: 'JavaScript' },
    { icon: <SiReact size={ICON_SIZE} color="#61DAFB" />, label: 'React' },
    { icon: <SiTailwindcss size={ICON_SIZE} color="#06B6D4" />, label: 'Tailwind' },
    { icon: <SiPython size={ICON_SIZE} color="#3776AB" />, label: 'Python' },
    { icon: <SiDjango size={ICON_SIZE} color="#092E20" />, label: 'Django' },
];

const TOOLS = [
    { icon: <DiVisualstudio size={ICON_SIZE} color="#007ACC" />, label: 'VS Code' },
    { icon: <SiGit size={ICON_SIZE} color="#F05032" />, label: 'Git' },
    { icon: <SiGithub size={ICON_SIZE} color="#181717" />, label: 'GitHub' },
    { icon: <SiDocker size={ICON_SIZE} color="#2496ED" />, label: 'Docker' },
    { icon: <GrMysql size={ICON_SIZE} color="#4479A1" />, label: 'MySQL' },
];

const IconGrid = ({ items }) => (
    <div className="flex flex-wrap justify-center gap-6 py-2">
        {items.map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
                {icon}
                <span className="text-sm text-gray-600 font-medium">{label}</span>
            </div>
        ))}
    </div>
);

const SkillsSection = () => {
    const { lang } = useLanguage();
    const skills = websiteData.text[lang].cv.skills;
    const interests = skills.interests;

    return (
        <section className="px-4 py-10">
            <div className="container-xl lg:container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-24 portrait:px-8 md:px-0">
                    <HomeCard title="Stack">
                        <IconGrid items={STACK} />
                    </HomeCard>
                    <HomeCard title="Tools">
                        <IconGrid items={TOOLS} />
                    </HomeCard>
                    <HomeCard title={interests.title}>
                        <ul className="list-disc list-inside text-base/8 text-gray-800">
                            {interests.bullets.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </HomeCard>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
