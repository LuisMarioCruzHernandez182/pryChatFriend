import React from 'react'
import img from '../assets/img-bullying.jpeg'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          {/* <HeartIcon className="h-6 w-6 text-blue-500" /> */}
          <span className="sr-only" style={{ color: '#42A5F5' }}>Detener el Bullying</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tipos de Bullying
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Impacto
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Obtener Ayuda
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/login">
          <NavLink to={"/login"}/>Login<NavLink/>
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]" style={{ color: '#42A5F5' }}>
                  Detén el Bullying Ahora
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  El bullying puede tener efectos devastadores en individuos y comunidades. Aprende sobre los diferentes tipos
                  de bullying, su impacto y cómo obtener ayuda.
                </p>
                <div className="space-x-4 mt-6">
                  <a
                    className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-50"
                    style={{ backgroundColor: '#42A5F5', color: '#FFFFFF' }}
                    href="#"
                  >
                    Aprende Más
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="Imagen Principal"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
                  height="400"
                  src={img}
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm" style={{ backgroundColor: '#BBDEFB', color: '#42A5F5' }}>
                  Tipos de Bullying
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Reconociendo las Diferentes Formas de Bullying
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  El bullying puede tomar muchas formas, desde abuso físico y verbal hasta exclusión social y ciberbullying.
                  Entender los diversos tipos de bullying es el primer paso para abordar este problema.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bullying Físico</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esto incluye golpear, patear, empujar o cualquier otra forma de agresión física.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bullying Verbal</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esto implica insultos, burlas, amenazas y otras formas de abuso verbal.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bullying Social</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esto incluye la exclusión, difusión de rumores y manipulación de relaciones sociales.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Ciberbullying</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esto implica el uso de tecnologías digitales, como las redes sociales, para acosar, amenazar o avergonzar
                  a alguien.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bullying Relacional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esto incluye manipulación de relaciones, difusión de rumores y exclusión social.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Bullying Prejudicial</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esto implica atacar a individuos basándose en su raza, religión, género u otras características personales.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#BBDEFB' }}>
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm" style={{ backgroundColor: '#BBDEFB', color: '#42A5F5' }}>
                  Impacto del Bullying
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Los Efectos Devastadores del Bullying</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  El bullying puede tener consecuencias duraderas y de gran alcance tanto para la víctima como para la comunidad en general. Es importante entender el impacto del bullying para abordar este problema de manera efectiva.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impactos en la Salud Mental</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  El bullying puede llevar a depresión, ansiedad, baja autoestima y, en casos graves, pensamientos suicidas.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impactos en la Salud Física</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Las víctimas de bullying pueden experimentar síntomas físicos como dolores de cabeza, dolores de estómago y alteraciones del sueño.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impactos Académicos y Sociales</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  El bullying puede afectar negativamente el rendimiento académico y las relaciones sociales de un estudiante, llevando al aislamiento y la desconexión.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Efectos a Largo Plazo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Los efectos del bullying pueden durar hasta la edad adulta, impactando las relaciones, la carrera y la salud mental.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impacto en los Testigos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Aquellos que son testigos de bullying también pueden experimentar miedo, angustia y sentimientos de impotencia.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impacto en la Comunidad</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  El bullying puede contribuir a un ambiente escolar y comunitario tóxico, afectando la cohesión y el sentido de seguridad.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justificar-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg" style={{ backgroundColor: '#BBDEFB', color: '#42A5F5' }}>
                  Obtener Ayuda
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Cómo Obtener Ayuda y Apoyo
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Si tú o alguien que conoces está experimentando bullying, hay recursos y estrategias disponibles para obtener ayuda y apoyo. Nadie debería enfrentar el bullying solo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Habla con Alguien de Confianza</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Habla con un padre, maestro o consejero sobre lo que estás experimentando. Ellos pueden ofrecer apoyo y orientación.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Utiliza Recursos en Línea</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hay muchas organizaciones en línea que ofrecen recursos y asistencia para quienes están siendo acosados.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Participa en Grupos de Apoyo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Unirse a un grupo de apoyo puede proporcionar un espacio seguro para compartir experiencias y obtener consejos de otros que han pasado por lo mismo.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Practica la Autocuidado</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Asegúrate de cuidar de tu bienestar físico y mental a través del ejercicio, una alimentación saludable y técnicas de relajación.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Defiende a Otros</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Si ves que alguien está siendo acosado, ofrécele tu apoyo. A veces, una palabra amable puede marcar una gran diferencia.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Denuncia el Bullying</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Si eres testigo de bullying, repórtalo a las autoridades escolares o a los adultos responsables. Ellos pueden intervenir para detenerlo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2024 ChatFriend. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Home