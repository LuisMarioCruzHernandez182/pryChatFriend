import React from 'react'
import img from '../assets/img-bullying.jpeg'

const Login = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
      <main className="flex-1 flex items-center justify-center">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-center mb-6" style={{ color: '#42A5F5' }}>
                Iniciar Sesión
              </h1>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline"
                    style={{ color: '#42A5F5' }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
                  style={{ backgroundColor: '#42A5F5' }}
                >
                  Iniciar Sesión
                </button>
              </form>
              <p className="mt-6 text-center text-gray-500">
                ¿No tienes una cuenta?{' '}
                <a href="#" className="text-blue-500 hover:underline" style={{ color: '#42A5F5' }}>
                  Regístrate
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2024 Detener el Bullying. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Login
