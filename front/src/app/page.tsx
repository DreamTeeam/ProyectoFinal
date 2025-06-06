"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ShoppingCart,
  CreditCard,
  Settings,
  BarChart,
  Users,
  Calendar,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    question: "¿Qué es un sistema POS?",
    answer:
      "Un sistema POS (Point of Sale o Punto de Venta) es una herramienta que te permite gestionar ventas, inventario, pagos y clientes desde un solo lugar.",
  },
  {
    question: "¿Qué beneficios me ofrece?",
    answer:
      "Con un sistema POS puedes automatizar procesos, reducir errores, obtener reportes en tiempo real y ofrecer una mejor experiencia a tus clientes.",
  },
  {
    question: "¿Necesito conexión a internet para usarlo?",
    answer:
      "Depende del sistema. Nuestro POS funciona tanto online como offline, sincronizando los datos cuando recupera la conexión.",
  },
  {
    question: "¿Puedo gestionar múltiples sucursales?",
    answer:
      "Sí, nuestro sistema permite controlar y administrar varias sucursales desde una misma cuenta, con reportes individuales o consolidados.",
  },
  {
    question: "¿Qué tipo de negocios pueden usar este POS?",
    answer:
      "Está diseñado para adaptarse a distintos rubros como tiendas, restaurantes, ferreterías, indumentaria, y más. Es flexible y configurable según tu tipo de negocio.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-8">
      <div className="w-full mx-auto max-h-[90dvh] rounded-3xl p-4 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-xl font-bold text-[#6e5cc4]">
            <Image
              src="/logo.png"
              alt="logo TreadUp"
              width={100}
              height={100}
            />
          </div>
          <ul className="hidden sm:flex space-x-8 text-base-250">
            <Link href="/#nosotros" className="hover:text-[#6e5cc4]">
              Nosotros
            </Link>
            <Link href="/#soluciones" className="hover:text-[#6e5cc4]">
              Soluciones
            </Link>
            <Link href="/#recursos" className="hover:text-[#6e5cc4]">
              Recursos
            </Link>
            <Link href="/#precios" className="hover:text-[#6e5cc4]">
              Precios
            </Link>
          </ul>
          <div>
            <Link
              href="/login"
              className="mr-2 text-base-300 hover:text-[#6e5cc4]"
            >
              Ingresar
            </Link>
            <Link
              href="/register"
              className="bg-primary text-white rounded-lg px-5 py-2 hover:bg-[#0d0d0d] cursor-pointer"
            >
              Contacto
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Vendé más. Hacelo fácil.
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Un sistema de ventas ágil, moderno y pensado para tu negocio.
          </p>

          {/* Imagen o componente */}
          <div className="w-full max-w-4xl mx-auto bottom-0">
            <div className="relative rounded-2xl flex items-center justify-center text-gray-500 ">
              <Image
                src="/mainImage.jpg"
                alt="imagen TreadUp"
                width={600}
                height={300}
                className="object-cover max-w-full rounded-2xl bottom-0"
                priority
              />
            </div>
          </div>
        </main>
      </div>

      {/* BENEFICIOS */}
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-base-4"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center ">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Un conjunto de funciones ideales para comenzar
              </h2>
              <p className="max-w-[900px] text-base-250 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Todo lo que necesitas para gestionar tu negocio de ventas de
                forma eficiente y eficaz.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Gestión de inventario */}
            <div className="bg-base-200 border-primary-20 rounded-xl">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary-20 p-3">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base-300 text-xl font-bold">
                  Gestión de inventario
                </h3>
                <p className="text-base-250">
                  Controla el stock, configura puntos de reposición y gestiona
                  tu inventario fácilmente.
                </p>
              </div>
            </div>

            {/* Procesamiento de pagos */}
            <div className="bg-base-200 border-primary-20 rounded-xl">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary-20 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base-300 text-xl font-bold">
                  Procesamiento de pagos
                </h3>
                <p className="text-base-250">
                  Aceptá todo tipo de pagos: tarjetas, pagos móviles y tarjetas
                  de regalo.
                </p>
              </div>
            </div>

            {/* Totalmente personalizable */}
            <div className="bg-base-200 border-primary-20 rounded-xl">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary-20 p-3">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base-300 text-xl font-bold">
                  Totalmente personalizable
                </h3>
                <p className="text-base-250">
                  Adaptá el sistema POS a las necesidades y procesos específicos
                  de tu negocio.
                </p>
              </div>
            </div>

            {/* Análisis de ventas */}
            <div className="bg-base-200 border-primary-20 rounded-xl">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary-20 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base-300 text-xl font-bold">
                  Análisis de ventas
                </h3>
                <p className="text-base-250">
                  Obtené estadísticas en tiempo real sobre tus ventas,
                  tendencias y comportamiento de los clientes.
                </p>
              </div>
            </div>

            {/* Gestión de clientes */}
            <div className="bg-base-200 border-primary-20 rounded-xl">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary-20 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base-300 text-xl font-bold">
                  Gestión de clientes
                </h3>
                <p className="text-base-250">
                  Creá perfiles de clientes, seguí su historial de compras y
                  aplicá programas de fidelidad.
                </p>
              </div>
            </div>

            {/* Gestión de inventario */}
            <div className="bg-base-200 border-primary-20 rounded-xl">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary-20 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base-300 text-xl font-bold">
                  Reportes y proyecciones
                </h3>
                <p className="text-base-250">
                  Generá reportes detallados y tomá decisiones basadas en datos
                  reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Planes accesibles para hacer crecer tu{" "}
                <span className="text-primary">negocio</span>
              </h2>
              <p className="max-w-[900px] text-base-250 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorá nuestros planes de precios flexibles, diseñados para
                adaptarse a empresas de todos los tamaños. Ya sea que estés
                comenzando o en pleno crecimiento, tenemos el plan perfecto para
                vos.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Mensual</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-[40px] h-[20px] bg-neutral-500 peer-checked:bg-[#6e5cc4] rounded-full transition-all duration-200"></div>
                <div className="absolute top-[2px] left-[2px] h-[16px] w-[16px] bg-white rounded-full shadow-md transition-all duration-200 peer-checked:translate-x-[20px]"></div>
              </label>
              <span className="text-sm font-medium">Anual (Ahorras 20%)</span>
            </div>
          </div>

          <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col overflow-hidden border-primary-20 rounded-lg">
              <div className="bg-primary-20 p-6">
                <h3 className="text-xl font-bold">Plan Inicial</h3>
                <div className="mt-4 text-3xl font-bold">GRATIS</div>
                <p className="mt-2 text-base-3">
                  Perfecto para pequeños negocios que recien estan comenzando
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Dashboard con Analiticas Basicas </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Mas de 100 Productos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Almacenamiento en la nube 1 GB</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Soporte por Email y Chat</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Funciones básicas</span>
                  </div>
                </div>
                <button className="mt-6 py-2 text-white w-full bg-secondary rounded-xl hover:bg-[#0d0d0d] transition duration-300 cursor-pointer">
                  Empezá ahora
                </button>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-primary-22 shadow-lg rounded-lg">
              <div className="bg-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Pro Plan</h3>
                  <span className="bg-accent px-2 py-1 rounded-lg text-white">
                    Popular
                  </span>
                </div>
                <div className="mt-4 text-3xl font-bold">$19</div>
                <p className="mt-2 text-white/80">
                  Ideal para negocios en crecimiento con mayores demandas
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Dashboard con Analiticas Avanzadas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Productos Ilimitados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Reportes personalizados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Avanzado almacenamiento en la nube</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Soporte Prioritario</span>
                  </div>
                </div>
                <button className="mt-6 py-2 text-white w-full bg-secondary rounded-xl hover:bg-[#0d0d0d] transition duration-300 cursor-pointer">
                  Actualizar a Pro
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden border-primary-20 rounded-lg">
              <div className="bg-primary-20 p-6">
                <h3 className="text-xl font-bold">Plan Empresarial</h3>
                <div className="mt-4 text-3xl font-bold">$49</div>
                <p className="mt-2 text-base-3">
                  Funciones avanzadas para negocios establecidos
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Soluciones Personalizadas Integradas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Soporte para varias localidades</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Protección total para tu negocio</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Infraestructura escalable en la nube</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Control completo desde un solo lugar</span>
                  </div>
                </div>
                <button className="mt-6 py-2 text-white w-full bg-secondary rounded-xl hover:bg-[#0d0d0d] transition duration-300 cursor-pointer">
                  Actualizar a Empresarial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-base-3 font-bold tracking-tight  sm:text-4xl mb-8">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex items-center justify-between w-full py-3 text-left text-base-300 font-medium focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-base-300 text-sm transition-all duration-200 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-20 items-center rounded-lg max-width-[800px]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                El futuro esta aqui. Comenzá tu demo gratuita
              </h2>
              <p className="max-w-[600px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a los miles de vendedores que transformaron sus negocios
                con TreadUp.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="px-8 py-2 bg-primary rounded-xl hover:bg-[#0d0d0d] text-white transition duration-300 cursor-pointer">
                Comenzá ahora gratis
              </button>
              <button className="py-2 px-4 border-primary-20 rounded-xl text-primary hover:bg-[#6e5cc4] hover:text-white transition duration-300 cursor-pointer">
                Compará los planes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white rounded-lg shadow-sm m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-base-300 sm:text-center">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              ThreadUp™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-base-300 sm:mt-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
