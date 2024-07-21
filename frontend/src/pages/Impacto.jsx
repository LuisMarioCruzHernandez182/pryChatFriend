import React from 'react'

function Impacto() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only" style={{ color: '#42A5F5' }}>Detener el Bullying</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Inicio
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/tipos">
            Tipos de Bullying
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/impacto">
            Impacto
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/ayuda">
            Obtener Ayuda
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Login
          </a>
        </nav>
      </header>
      <main className="flex-1">
        
        
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#BBDEFB' }}>
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm" style={{ backgroundColor: '#BBDEFB', color: '#42A5F5' }}>
                  Impacto del bullying
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Los efectos devastadores del bullying</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  El bullying puede tener consecuencias duraderas y de gran alcance tanto para la víctima como para la comunidad en general. Es importante entender el impacto del bullying para abordar este problema de manera efectiva.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impactos en la salud mental</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  El bullying puede llevar a depresión, ansiedad, baja autoestima y, en casos graves, pensamientos suicidas.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impactos en la salud física</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Las víctimas de bullying pueden experimentar síntomas físicos como dolores de cabeza, dolores de estómago y alteraciones del sueño.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impactos académicos y sociales</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  El bullying puede afectar negativamente el rendimiento académico y las relaciones sociales de un estudiante, llevando al aislamiento y la desconexión.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Efectos a largo plazo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Los efectos del bullying pueden durar hasta la edad adulta, impactando las relaciones, la carrera y la salud mental.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impacto en los testigos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Aquellos que son testigos de bullying también pueden experimentar miedo, angustia y sentimientos de impotencia.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Impacto en la comunidad</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  El bullying puede contribuir a un ambiente escolar y comunitario tóxico, afectando la cohesión y el sentido de seguridad.
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

export default Impacto
