import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BullyingChart = ({ data }) => {
  const barColors = [
    '#FF6384', // Color para 'Acoso físico'
    '#36A2EB', // Color para 'Acoso verbal'
    '#FFCE56', // Color para 'Acoso social'
    '#4BC0C0', // Color para 'Ciberbullying'
    '#9966FF', // Color para 'Relacional'
    '#FF9F40', // Color para 'Prejudicial'
  ];
  const chartData = {
    labels: data.map(item => item.tipo), // Tipos de bullying
    datasets: [
      {
        label: 'Número de Incidencias',
        data: data.map(item => item.numero), // Números de incidencias
        backgroundColor: barColors, // Colores de las barras
        borderColor: '#1E88E5', // Color del borde de las barras
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Oculta la leyenda
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#ddd',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Arial',
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          color: '#ddd',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Arial',
            weight: 'bold',
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
        borderSkipped: false,
      },
    },
  };
  const ahora = new Date();
  const mes = ahora.getMonth(); 
  const ano = ahora.getFullYear();
  const anoSiguiente = mes === 11 ? ano + 1 : ano;

  const nombresMeses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const nombreMes = nombresMeses[mes];
  const resultado = `${nombreMes} ${anoSiguiente}`;
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }} className='text-5xl font-bold'>Incidencias de Tipos de Bullying</h2>
      <Bar data={chartData} options={options} />
      <p className='uppercase text-center font-bold text-xl'>{resultado}</p>
    </div>
  );
};

export default BullyingChart;
