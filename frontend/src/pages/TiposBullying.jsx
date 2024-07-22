import React, { useEffect, useState } from 'react';
import { datosGrafica } from '../api/auth';
import BullyingChart from '../components/Grafica';

const TiposBullying = () => {
    const ahora = new Date();
    const mes = ahora.getMonth(); 
    const ano = ahora.getFullYear();
    const anoSiguiente = mes === 11 ? ano + 1 : ano;

    const nombresMeses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const nombreMes = nombresMeses[mes];
    const resultado = `${nombreMes.toUpperCase()} ${anoSiguiente}`;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getResul = async () => {
            const res = await datosGrafica({ fecha: resultado });
            if (res) {
                setData(res.data);
            }
        };
        getResul();
    }, []);

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
            <section className="w-full py-12 md:py-24 lg:py-32">
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
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
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
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold text-black">Ciberbullying</h3>
                            <p className="text-sm text-black">
                                Esto implica el uso de tecnologías digitales, como las redes sociales, para acosar, amenazar o avergonzar
                                a alguien.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold text-black">Bullying relacional</h3>
                            <p className="text-sm text-black">
                                Esto incluye manipulación de relaciones, difusión de rumores y exclusión social.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold text-black">Bullying prejudicial</h3>
                            <p className="text-sm text-black">
                                Esto implica atacar a individuos basándose en su raza, religión, género u otras características personales.
                            </p>
                        </div>
                    </div>
                    <div>
                        {data.length > 0 && <BullyingChart data={data} />}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TiposBullying;
