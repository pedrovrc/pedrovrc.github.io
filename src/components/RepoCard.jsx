import React from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const RepoCard = ({ repo }) => {
    const { lang } = useLanguage();
    const description = repo.description || 'No description provided.';
    const topics = repo.repositoryTopics?.nodes.map((n) => n.topic.name) ?? [];

    return (
        <div className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-indigo-500 px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold text-xl ml-2 text-white">{repo.name}</h3>
                {repo.primaryLanguage && (
                    <span
                        className="text-xs font-medium px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: repo.primaryLanguage.color ?? '#6366f1' }}
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
                        className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        {lang === 'en' ? 'View on GitHub' : 'Ver no GitHub'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
