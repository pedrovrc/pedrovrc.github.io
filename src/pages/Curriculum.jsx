import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Spinner from '../components/Spinner';

const DATA_URL = 'http://localhost:8000/text';

const Curriculum = () => {
  const { lang } = useLanguage();
  const [cvData, setCvData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    const controller = new AbortController();

    const loadCvCopy = async () => {
      try {
        setStatus('loading');
        const res = await fetch(DATA_URL, { signal: controller.signal });
        if (!res.ok) throw new Error('Failed to fetch CV copy');
        const data = await res.json();
        setCvData(data[lang].cv);
        setStatus('ready');
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
        setStatus('error');
      }
    };

    loadCvCopy();

    return () => controller.abort();
  }, [lang]);

  const isInitialLoading = status === 'loading' && !cvData;
  const isRefetching = status === 'loading' && !!cvData;

  if (isInitialLoading) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </section>
    );
  }

  if (status === 'error') return <p>Could not load CV text.</p>;

  const { opening, jobseek, skills, background, experience } = cvData;
  const programLanguages = skills?.programlangs
    ? Object.entries(skills.programlangs)
      .filter(([key]) => key !== 'title')
      .map(([, value]) => value)
    : [];
  const spokenLanguages = skills?.languages
    ? Object.entries(skills.languages)
      .filter(([key]) => key !== 'title')
      .map(([, value]) => value)
    : [];

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-12 text-lg text-gray-800">
      {isRefetching && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/60">
          <Spinner />
        </div>
      )}
      {/* INTRODUCTION */}
      <section className="text-justify mb-12 mr-12 ml-12">
        <p className="mb-4">{opening}</p>
        <p>{jobseek}</p>
      </section>

      <section className="mb-12 mr-12 ml-12">
        <h2 className="text-3xl font-bold text-center mb-2">{skills?.title}</h2>
        {/* PROGRAMMING LANGUAGES */}
        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{skills?.programlangs?.title}</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {programLanguages.map(({ title, bullets }) => (
              <div key={title} className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden">
                <div className="bg-indigo-500 px-4 py-3">
                  <h4 className="font-semibold text-white ml-2">{title}</h4>
                </div>
                <div className="bg-white px-4 py-3">
                  <ul className="list-disc list-inside text-base text-gray-800 ml-2 mb-2">
                    {bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* DEV TOOLS */}
        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{skills?.devtools?.title}</h3>
          <ul className="grid gap-3 md:grid-cols-2">
            {skills?.devtools?.bullets?.map((tool) => (
              <li key={tool} className="rounded-md border border-gray-200 bg-indigo-500 text-white px-4 py-2 shadow-sm text-center font-semibold">
                {tool}
              </li>
            ))}
          </ul>
        </article>

        {/* INTERESTS */}
        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{skills?.interests?.title}</h3>
          <div className="flex gap-3">
            {skills?.interests?.bullets?.map((interest) => (
              <span key={interest} className="rounded-full bg-indigo-100 px-4 py-1 text-1xl font-medium text-indigo-700">
                {interest}
              </span>
            ))}
          </div>
        </article>

        {/* LANGUAGES */}
        <article>
          <h3 className="text-2xl font-semibold mb-4">{skills?.languages?.title}</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {spokenLanguages.map(({ name, level }) => (
              <div key={name} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-600">{level}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* ACADEMIC BACKGROUND */}
      <section className="mb-12  mr-12 ml-12">
        <h2 className="text-3xl font-bold text-center mb-6">{background?.title}</h2>
        <div className="space-y-6">
          {background?.degrees?.map(({ title, institution, period, comment }) => (
            <article key={title} className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden">
              <div className="bg-indigo-500 px-5 py-4">
                <h3 className="text-2xl font-semibold text-white ml-2">{title}</h3>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-base text-gray-700 font-semibold ml-2">{institution}</p>
                <p className="text-sm text-gray-500 mb-3 ml-2">{period}</p>
                {comment && <p className="text-base text-gray-700 text-justify ml-2 mr-2 mb-2">{comment}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="mr-12 ml-12">
        <h2 className="text-3xl font-bold text-center mb-1">{experience?.title}</h2>
        {experience?.comment && (
          <p className="mb-6 text-center text-base text-gray-600">{experience.comment}</p>
        )}
        <div className="space-y-6">
          {experience?.jobs?.map(({ title, company, location, period, description }) => (
            <article key={`${title}-${company}`} className="rounded-lg border border-indigo-100 shadow-sm overflow-hidden">
              <div className="bg-indigo-500 px-5 py-4">
                <h3 className="text-2xl font-semibold text-white ml-2">{title}</h3>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-base text-gray-700 font-semibold ml-2">{company}</p>
                <p className="text-sm text-gray-500 mb-3 ml-2">{location} • {period}</p>
                <ul className="list-disc list-inside text-base text-gray-700 text-justify space-y-1 ml-2 mr-2 mb-2">
                  {description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Curriculum;