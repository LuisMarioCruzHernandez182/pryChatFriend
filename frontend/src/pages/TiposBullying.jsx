import React from 'react';

const TiposBullying = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200">
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
                <section className="w-full pt-8 md:pt-16 flex justify-center lg:pt-24 border-y border-gray-200">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg px-3 py-1 text-sm" style={{ backgroundColor: '#BBDEFB', color: '#42A5F5' }}>
                                    Tipos de bullying
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                                    Reconociendo las diferentes formas de bullying
                                </h2>
                                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    El bullying puede tomar muchas formas, desde abuso físico y verbal hasta exclusión social y ciberbullying.
                                    Entender los diversos tipos de bullying es el primer paso para abordar este problema.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold text-black">Bullying físico</h3>
                                <p className="text-sm text-black">
                                    Esto incluye golpear, patear, empujar o cualquier otra forma de agresión física.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold text-black">Bullying verbal</h3>
                                <p className="text-sm text-black">
                                    Esto implica insultos, burlas, amenazas y otras formas de abuso verbal.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold text-black">Bullying social</h3>
                                <p className="text-sm text-black">
                                    Esto incluye la exclusión, difusión de rumores y manipulación de relaciones sociales.
                                </p>
                            </div>
                            <div className="grid gap-1 lg:col-span-1">
                                <h3 className="text-lg font-bold text-black">Ciberbullying</h3>
                                <p className="text-sm text-black">
                                    Esto implica el uso de tecnologías digitales, como las redes sociales, para acosar, amenazar o avergonzar
                                    a alguien.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex items-center justify-center p-4 border-t border-gray-200">
                <p className="text-sm text-black">
                    &copy; 2024 ChatFriend. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}

export default TiposBullying;
