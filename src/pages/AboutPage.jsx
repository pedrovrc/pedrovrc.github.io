import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext';
import Spinner from '../components/ui/Spinner';
import skypic from '../assets/images/skypic.jpg';
import websiteData from '../websiteData.json';

const AboutPage = () => {
  const { lang } = useLanguage();
  const [imgLoaded, setImgLoaded] = useState(false);

  const { title, mainText, pictureSubtitle } = websiteData.text[lang].about;

  const renderChunk = (chunk, key) =>
    chunk.type === 'link' ? (
      <a
        key={key}
        href={chunk.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-fuchsia-400 underline"
      >
        {chunk.value}
      </a>
    ) : (
      <span key={key}>{chunk.value}</span>
    );

  return (
    <section className="relative max-w-5xl mx-auto px-16 portrait:px-8 py-8 text-lg portrait:text-base text-gray-800 text-justify">
      <h1 className="text-3xl font-bold text-indigo-500 mb-4 text-center">{title}</h1>
      {mainText.map((paragraph, paragraphIdx) => {
        const chunks = Array.isArray(paragraph) ? paragraph : [paragraph];
        return (
          <p key={paragraphIdx} className="mb-4 leading-relaxed">
            {chunks.map((chunk, chunkIdx) =>
              renderChunk(chunk, `${paragraphIdx}-${chunkIdx}`)
            )}
          </p>
        );
      })}
      {!imgLoaded && <Spinner loading={true} />}
      <img
        className="rounded-md shadow-sm mt-6"
        src={skypic}
        alt="A beautiful sky picture"
        onLoad={() => setImgLoaded(true)}
        style={!imgLoaded ? { display: 'none' } : {}}
      />
      {imgLoaded && <p className="text-sm italic text-black/50 text-right">{pictureSubtitle}</p>}
    </section>
  )
}

export default AboutPage