import React from 'react';
import './SobreMim.css';

function SobreMim({ idioma }) {
  return (
    <section className="sobremim">
      <h2>{idioma === 'pt' ? 'Sobre Mim' : 'About Me'}</h2>
      <p className="texto-regular">
        {idioma === 'pt' ? 'Venho de uma base sólida em C/C++ e Python em minha graduação, em que aprendi a importância de boas práticas e atenção aos detalhes. Durante meu projeto final da graduação, tive contato com pesquisa acadêmica e ciência de dados, que foi uma experiência muito construtiva que me permitiu ' : 'I come from a solid background in C/C++ and Python in my undergraduate studies, where I learned the importance of good practices and attention to detail. During my final undergraduate project, I had contact with academic research and data science, which was a very constructive experience that allowed me to '}<a href="https://dl.acm.org/doi/10.1145/3701625.3701665">{idioma === 'pt' ? 'publicar um artigo científico.' : 'publish a scientific paper.'}</a>{idioma === 'pt' ? ' Após a graduação, passei a estudar desenvolvimento web, que se tornou meu foco atual.' : ' After graduation, I began studying web development, which has become my current focus.'}
      </p>
        
      <p className="texto-regular">
        {idioma === 'pt' ? 'Amo programar e estou buscando minha primeira oportunidade profissional, aberto a aprender novas tecnologias e contribuir de toda maneira que puder. Quero crescer como desenvolvedor e consolidar uma carreira em desenvolvimento de software, seja em web ou em outras áreas que eu venha a explorar.' : 'I love programming and am looking for my first professional opportunity, open to learning new technologies and contributing in every way I can. I want to grow as a developer and build a career in software development, whether in web or other areas I may explore.'}
      </p>
      <p className="texto-regular">
        {idioma === 'pt' ? 'Também sou apaixonado por arte. Sou ilustrador digital por hobby, e adoro narrativas de ficção, seja em séries, filmes ou videogames. Tenho o sonho de algum dia me tornar desenvolvedor/designer de jogos digitais. Caso queira conhecer alguns dos meus trabalhos de ilustração, ' : 'I am also passionate about art. I am a digital illustrator as a hobby, and I love fiction narratives, whether in series, movies, or video games. I dream of someday becoming a digital game developer/designer. If you want to see some of my illustration work, '}<a href="https://pedrovrc-portfolio.carrd.co/">{idioma === 'pt' ? 'você pode vê-los aqui' : 'you can see it here'}</a>.
      </p>
      <p className="texto-regular">
        {idioma === 'pt' ? 'Além disso, o esporte sempre fez parte da minha vida, e o voleibol, meu favorito atualmente, me permitiu reconectar com antigos amigos e manter o equilíbrio fora do trabalho e dos estudos.' : 'Additionally, sports have always been a part of my life, and volleyball, my current favorite, has allowed me to reconnect with old friends and maintain balance outside of work and studies.'}
      </p>
      <p className="texto-regular">
        {idioma === 'pt' ? 'Estou buscando iniciar minha carreira com o pé direito, e estou aberto a oportunidades que me permitam crescer e contribuir. Entre em contato!' : 'I am looking to start my career on the right foot, and I am open to opportunities that allow me to grow and contribute. Get in touch!'}
      </p>
    </section>
  );
}

export default SobreMim;
