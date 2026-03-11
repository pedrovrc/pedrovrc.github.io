import React from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import { LuExternalLink  } from 'react-icons/lu';
import { useLanguage } from '../../context/LanguageContext';

const LANGUAGE_COLORS = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    HTML: '#E34C26',
    CSS: '#563D7C',
    'C++': '#00599C',
    C: '#555555',
    Java: '#B07219',
    Ruby: '#CC342D',
    Go: '#00ADD8',
    Rust: '#DEA584',
    Shell: '#89E051',
    Vue: '#41B883',
    Svelte: '#FF3E00',
};

const getContrastColor = (hex) => {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    // Perceived luminance (WCAG formula)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#000000' : '#ffffff';
};

const RepoCard = ({ repo }) => {
    const { lang } = useLanguage();
    const description = repo.description || 'No description provided.';
    const topics = repo.repositoryTopics?.nodes.map((n) => n.topic.name) ?? [];

    return (
        <div className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-indigo-500 px-4 py-3 flex items-center gap-2">
                <h3 className="font-semibold text-xl ml-2 text-white wrap-break-word min-w-0 flex-1">{repo.name}</h3>
                {repo.primaryLanguage && (
                    <span
                        className="text-xs font-medium px-2 py-1 rounded-full shrink-0"
                        style={{
                            backgroundColor: repo.primaryLanguage.color ?? LANGUAGE_COLORS[repo.primaryLanguage.name] ?? '#6366f1',
                            color: getContrastColor(repo.primaryLanguage.color ?? LANGUAGE_COLORS[repo.primaryLanguage.name] ?? '#6366f1'),
                        }}
                    >
                        {repo.primaryLanguage.name}
                    </span>
                )}
            </div>

            <div className="bg-white px-4 py-3 flex flex-col flex-1">
                <p className="text-base text-gray-800 mb-4 flex-1">{description}</p>

                {topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {topics.map((topic) => (
                            <span key={topic} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <div className="border border-indigo-100 mb-3"></div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-gray-500 text-sm">
                        <span><FaStar className="inline mr-1" />{repo.stargazerCount}</span>
                        <span><FaCodeBranch className="inline mr-1" />{repo.forkCount}</span>
                    </div>
                    <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        {lang === 'en' ? 'View on GitHub' : 'Ver no GitHub'} <LuExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
