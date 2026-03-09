import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Spinner from '../components/Spinner';
import TitledCard from '../components/TitledCard';
import ExperienceCard from '../components/ExperienceCard';
import { LuExternalLink  } from 'react-icons/lu';

const Curriculum = () => {
  const DATA_URL = 'http://localhost:8000/text';
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
    <section className="relative max-w-5xl mx-auto px-12 lg:px-2 py-12 text-lg text-gray-800">
      {isRefetching && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/60">
          <Spinner />
        </div>
      )}
      {/* INTRODUCTION */}
      <section className="text-justify mb-8">
        <p className="mb-4">{opening}</p>
        <p>{jobseek}</p>
        <div className="flex justify-end mt-2">
          <a
            href={lang === 'en' ? 'https://flowcv.com/resume/83n68qpal3r3' : 'https://flowcv.com/resume/4ear5oome000'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-500 text-white hover:underline font-semibold px-5 py-2 rounded-lg hover:bg-indigo-200 hover:text-indigo-500 transition"
          >
            {lang === 'en' ? 'View Résumé PDF' : 'Ver Currículo em PDF'} <LuExternalLink />
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-2">{skills?.title}</h2>
        {/* PROGRAMMING LANGUAGES */}
        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{skills?.programlangs?.title}</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {programLanguages.map(({ title, bullets }) => (
              <TitledCard title={title} contentType='bulletList' content={bullets}/>
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
              <span key={interest} className="rounded-full bg-indigo-100 px-4 py-1 text-1xl font-medium text-indigo-700 text-center flex items-center justify-center">
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
              <div key={name} className="rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-600">{level}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* ACADEMIC BACKGROUND */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">{background?.title}</h2>
        <div className="space-y-6">
          {background?.degrees?.map(({ title, institution, location, period, comment, linkText, link }) => (
            <ExperienceCard
              title={title}
              company={institution}
              location={location}
              period={period}
              description={comment}
              linkText={linkText}
              link={link}
            />
          ))}
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="">
        <h2 className="text-3xl font-bold text-center mb-1">{experience?.title}</h2>
        {experience?.comment && (
          <p className="mb-6 text-center text-base text-gray-600">{experience.comment}</p>
        )}
        <div className="space-y-6">
          {experience?.jobs?.map(({ title, company, location, period, description }) => (
            <ExperienceCard
              title={title}
              company={company}
              location={location}
              period={period}
              description={description}
              contentType='bulletList'
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Curriculum;