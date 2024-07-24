import React, { useEffect, useState } from 'react';
import { getReportesApi } from '../api/auth';
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; 
import Modal from '../modal/Modal';
import { useAuth } from '../context/auth-context';

function Reportes() {
    const [showModal, setShowModal] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);
    const handleShow = (report) => {
        setSelectedReport(report);
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);
    const {logout}= useAuth();

    const [data, setData] = useState([]);
    const formatearFecha = (fechaISO) => {
        return format(new Date(fechaISO), 'dd MMMM yyyy', { locale: es });
    };
    useEffect(() => {
        const getReportes = async () => {
            const res = await getReportesApi();
            if (res) {
                setData(res.data);
            }
        };
        getReportes();
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <a className="flex items-center justify-center" href="#">
                    <span className="sr-only" style={{ color: '#42A5F5' }}>Detener el Bullying</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="/grafica">
                        Grafica
                    </a>
                    <button className="text-sm font-medium hover:underline underline-offset-4" onClick={logout}>
                        Cerrar sesion
                    </button>
                </nav>
            </header>

            <div className="container mx-auto p-4 flex-grow">
                <div className="mb-4">
                    <p className="text-xl font-semibold">Reportes</p>
                    <p className="text-gray-600">Información de los reportes</p>
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
                            {data.map(item => (
                                <tr key={item._id}>
                                    <td className="py-2 px-4 border-b">
                                        {item?.nombre}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {item?.carrera}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {item?.cuatrimestre}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {item?.grupo}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {formatearFecha(item?.fecha)}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button 
                                            className="bg-blue-500 text-white py-1 px-2 rounded" 
                                            onClick={() => handleShow(item)}
                                        >
                                            Ver más
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${showModal ? 'block' : 'hidden'}`} onClick={handleClose}>
                <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={handleClose}>
                        &times;
                    </button>
                    {selectedReport && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Detalles del Reporte</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Nombre</label>
                                    <input 
                                        type="text" 
                                        value={selectedReport.nombre} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Carrera</label>
                                    <input 
                                        type="text" 
                                        value={selectedReport.carrera} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Cuatrimestre</label>
                                    <input 
                                        type="text" 
                                        value={selectedReport.cuatrimestre} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Grupo</label>
                                    <input 
                                        type="text" 
                                        value={selectedReport.grupo} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Fecha</label>
                                    <input 
                                        type="text" 
                                        value={formatearFecha(selectedReport.fecha)} 
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Descripción</label>
                                    <p className="mt-1 block w-full p-2 border border-gray-300 rounded bg-gray-100">
                                        {selectedReport.descripcion}
                                    </p>
                                </div>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleClose}>Cerrar</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            <footer className="flex items-center justify-center p-4 bg-gray-100">
                <p className="text-sm text-gray-500">
                    &copy; 2024 ChatFriend. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}

export default Reportes;
