import React from 'react'

const ExperienceCard = ({
    title = 'Title',
    company = 'company',
    location = 'location',
    period = 'period',
    description = 'description',
    contentType = 'text',
    linkText,
    link,
}) => {

    const buildBulletItems = () => {
        if (Array.isArray(description)) return description
        return String(description)
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
    }

    const renderDescription = () => {
        if (contentType === 'bulletList') {
            const items = buildBulletItems()
            return (
                <ul className="list-disc list-inside text-base text-gray-800">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )
        }

        return <p className="text-base text-gray-800">{description}</p>
    }

    return (
        <article key={`${title}-${company}`} className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden">
            <div className="bg-indigo-500 px-5 py-4">
                <h3 className="text-2xl font-semibold text-white ml-2">{title}</h3>
            </div>
            <div className="bg-white px-5 py-4">
                <p className="text-base text-gray-700 font-semibold ml-2">{company}</p>
                <p className="text-sm text-gray-500 mb-3 ml-2">{location} • {period}</p>
                <div className="text-base text-gray-700 text-justify ml-2 mr-4 mb-2">
                    {renderDescription()}
                    {link && linkText && (
                    <a
                        className="text-base font-semibold text-indigo-500 hover:text-fuchsia-400 underline"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {linkText}
                    </a>
                )}
                </div>
            </div>
        </article>
    )
}

export default ExperienceCard