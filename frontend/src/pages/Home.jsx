import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img-bullying.jpeg';
import img2 from '../assets/img-bullying2.jpeg';
import img3 from '../assets/img-bullying3.jpeg';
import img4 from '../assets/img-bullying4.jpeg';

const Home = () => {
  const videos = [
    'https://www.youtube.com/embed/{watch?v=PbCFVJ4Eo2w&ab_channel=UniversitatRoviraiVirgili}',
    'https://www.youtube.com/embed/2',
    'https://www.youtube.com/embed/3',
    'https://www.youtube.com/embed/4',
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only" style={{ color: '#42A5F5' }}>Detener el Bullying</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="/tipos">
            Tipos de Bullying
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="/impacto">
            Impacto
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="/ayuda">
            Obtener Ayuda
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="/login">
            Login
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]" style={{ color: '#42A5F5' }}>
                  Detén el bullying ahora
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  El bullying puede tener efectos devastadores en individuos y comunidades. Aprende sobre los diferentes tipos
                  de bullying, su impacto y cómo obtener ayuda.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} className="w-full">
                  <div>
                    <img src={img1} alt="Imagen 1" />
                  </div>
                  <div>
                    <img src={img2} alt="Imagen 2" />
                  </div>
                  <div>
                    <img src={img3} alt="Imagen 3" />
                  </div>
                  <div>
                    <img src={img4} alt="Imagen 4" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6 max-w-[1300px] mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-[2.8rem]" style={{ color: '#42A5F5' }}>
              Videos informativos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
              {videos.map((video, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src={video}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4">
        <p className="text-sm text-black">
          &copy; 2024 ChatFriend. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
