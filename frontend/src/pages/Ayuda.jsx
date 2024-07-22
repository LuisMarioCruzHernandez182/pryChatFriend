import React from 'react';

function Ayuda() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only" style={{ color: '#42A5F5' }}>Detener el Bullying</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="/">
            Inicio
          </a>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg" style={{ backgroundColor: '#BBDEFB', color: '#42A5F5' }}>
                  Obtener ayuda
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Cómo obtener ayuda y apoyo
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Si tú o alguien que conoces está experimentando bullying, hay recursos y estrategias disponibles para obtener ayuda y apoyo. Nadie debería enfrentar el bullying solo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Habla con alguien de confianza</h3>
                <p className="text-sm text-black">
                  Habla con un padre, maestro o consejero sobre lo que estás experimentando. Ellos pueden ofrecer apoyo y orientación.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Utiliza recursos en línea</h3>
                <p className="text-sm text-black">
                  Hay muchas organizaciones en línea que ofrecen recursos y asistencia para quienes están siendo acosados.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Participa en grupos de apoyo</h3>
                <p className="text-sm text-black">
                  Unirse a un grupo de apoyo puede proporcionar un espacio seguro para compartir experiencias y obtener consejos de otros que han pasado por lo mismo.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Practica el autocuidado</h3>
                <p className="text-sm text-black">
                  Asegúrate de cuidar de tu bienestar físico y mental a través del ejercicio, una alimentación saludable y técnicas de relajación.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Defiende a otros</h3>
                <p className="text-sm text-black">
                  Si ves que alguien está siendo acosado, ofrécele tu apoyo. A veces, una palabra amable puede marcar una gran diferencia.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Denuncia el bullying</h3>
                <p className="text-sm text-black">
                  Si eres testigo de bullying, repórtalo a las autoridades escolares o a los adultos responsables. Ellos pueden intervenir para detenerlo.
                </p>
              </div>
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
}

export default Ayuda;
