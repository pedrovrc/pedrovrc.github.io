import React from 'react'

const TitledCard = ({ title = 'Title', content = '', contentType = 'text' }) => {
    const buildBulletItems = () => {
        if (Array.isArray(content)) return content
        return String(content)
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
    }

    const renderContent = () => {
        if (contentType === 'bulletList') {
            const items = buildBulletItems()
            return (
                <ul className="list-disc list-inside text-base text-gray-800 ml-2 mb-2">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )
        }

        return <p className="text-base text-gray-800 ml-2 mb-2">{content}</p>
    }

    return (
        <div className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden">
            <div className="bg-indigo-500 px-4 py-3">
                <h4 className="font-semibold text-white ml-2">{title}</h4>
            </div>
            <div className="bg-white px-4 py-3">{renderContent()}</div>
        </div>
    )
}

export default TitledCard