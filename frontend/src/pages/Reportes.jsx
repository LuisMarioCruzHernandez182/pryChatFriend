import React, { useEffect, useState } from 'react';
import { getReportesApi } from '../api/auth';
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; 
function Reportes() {
    const [data,setData] = useState([]);
    const formatearFecha = (fechaISO) => {
        return format(new Date(fechaISO), 'dd MMMM yyyy', { locale: es });
      };
    useEffect(()=>{

        const getReportes = async()=>{
            const res = await getReportesApi();
            if(res){
                setData(res.data);
            }
        };
        getReportes();
    },[])
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
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
        </nav>
      </header>

      <div className="container mx-auto p-4 flex-grow">
        <div className="mb-4">
          <p className="text-xl font-semibold">Estudiantes</p>
          <p className="text-gray-600">Información de los estudiantes</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Carrera</th>
                <th className="py-2 px-4 border-b">Cuatrimestre</th>
                <th className="py-2 px-4 border-b">Grupo</th>
                <th className="py-2 px-4 border-b">Fecha</th>
                <th className="py-2 px-4 border-b">
                  <span className="sr-only">Ver más</span>
                </th>
              </tr>
            </thead>
            <tbody>
                {
                    data.map(
                        item =>(
                            <tr>
                                <td className="py-2 px-4 border-b">
                                    {
                                        item?.nombre
                                    }
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {
                                        item?.carrera
                                    }
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {
                                        item?.cuatrimestre
                                    }
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {
                                        item?.grupo
                                    }
                                </td>
                                <td className="py-2 px-4 border-b"  >
                                   {formatearFecha(item?.fecha)}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white py-1 px-2 rounded">Ver más</button>
                                </td>
                            </tr>
                        )
                    )
                }
              
            </tbody>
          </table>
        </div>
      </div>

      <footer className="flex items-center justify-center p-4 bg-gray-100">
        <p className="text-sm text-gray-500">
          &copy; 2024 Detener el Bullying. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Reportes;
