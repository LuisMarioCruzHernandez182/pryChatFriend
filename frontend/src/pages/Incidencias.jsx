import React, { useEffect, useState } from 'react'
import BullyingChart from '../components/Grafica'
import { datosGrafica } from '../api/auth';
import { useAuth } from '../context/auth-context';

const Incidencias = () => {
    const {logout} = useAuth();
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
    }, [resultado]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
            <span className="sr-only" style={{ color: '#42A5F5' }}>Detener el Bullying</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/reportes">
            Reportes
        </a>
        <button className="text-sm font-medium hover:underline underline-offset-4" onClick={logout}>
            Cerrar sesion
          </button>
        </nav>
    </header>
    <section className="w-full pt-8 md:pt-16 lg:pt-24">
        <div className="container space-y-12 px-4 md:px-6">
            <div>
                {data.length > 0 && <BullyingChart data={data} />}
            </div>
        </div>
    </section>
    <footer className="flex w-full fixed bottom-0 items-center justify-center p-4 bg-gray-100">
                <p className="text-sm text-gray-500">
                    &copy; 2024 ChatFriend. Todos los derechos reservados.
                </p>
    </footer>
</div>
  )
}

export default Incidencias
