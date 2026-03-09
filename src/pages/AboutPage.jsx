import React from 'react'
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Spinner from '../components/Spinner';
import skypic from '../assets/images/skypic.jpg';

const AboutPage = () => {
  const DATA_URL = 'http://localhost:8000/text';
  const { lang } = useLanguage();
  const [aboutData, setAboutData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadAboutCopy = async () => {
      try {
        setStatus('loading');
        const res = await fetch(DATA_URL, { signal: controller.signal });
        if (!res.ok) throw new Error('Failed to fetch About section');
        const data = await res.json();
        setAboutData(data[lang].about);
        setStatus('ready');
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
        setStatus('error');
      }
    };

    loadAboutCopy();

    return () => controller.abort();
  }, [lang]);

  const isInitialLoading = status === 'loading' && !aboutData;
  const isRefetching = status === 'loading' && !!aboutData;

  if (isInitialLoading) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </section>
    );
  }

  if (status === 'error') return <p>Could not load About section.</p>;

  const { title, mainText, pictureSubtitle } = aboutData;

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
    <section className="relative max-w-5xl mx-auto px-16 py-8 text-lg text-gray-800 text-justify">
      <h1 className="text-3xl font-bold text-indigo-500 mb-2 text-center">{title}</h1>
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