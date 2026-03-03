import React from 'react';
import {
    SiJavascript, SiReact, SiPython, SiDjango, SiCplusplus, SiGit, SiGithub
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di'
import websiteData from '../websiteData.json';
import { useLanguage } from '../context/LanguageContext';

const STACK = [
    { icon: <SiJavascript size={40} color="#F7DF1E" />, label: 'JavaScript' },
    { icon: <SiReact size={40} color="#61DAFB" />, label: 'React' },
    { icon: <SiPython size={40} color="#3776AB" />, label: 'Python' },
    { icon: <SiDjango size={40} color="#092E20" />, label: 'Django' },
    { icon: <SiCplusplus size={40} color="#00599C" />, label: 'C++' },
];

const TOOLS = [
    { icon: <DiVisualstudio size={40} color="#007ACC" />, label: 'VS Code' },
    { icon: <SiGit size={40} color="#F05032" />, label: 'Git' },
    { icon: <SiGithub size={40} color="#181717" />, label: 'GitHub' },
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

const Card = ({ title, children }) => (
    <div className="rounded-lg max-w-60 border border-indigo-100 shadow-sm overflow-hidden flex flex-col">
        <div className="bg-indigo-500 px-4 py-3">
            <h4 className="font-semibold text-2xl text-white text-center">{title}</h4>
        </div>
        <div className="bg-white px-4 py-4 flex-1 flex items-center justify-center">{children}</div>
    </div>
);

const SkillsSection = () => {
    const { lang } = useLanguage();
    const skills = websiteData.text[lang].cv.skills;
    const interests = skills.interests;

    return (
        <section className="px-4 py-10">
            <div className="container-xl lg:container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    <Card title="Stack">
                        <IconGrid items={STACK} />
                    </Card>
                    <Card title="Tools">
                        <IconGrid items={TOOLS} />
                    </Card>
                    <Card title={interests.title}>
                        <ul className="list-disc list-inside text-base/8 text-gray-800">
                            {interests.bullets.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
