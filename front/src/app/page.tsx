// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10 w-full bg-white flex items-center justify-center p-6 sm:px-12">
      <main className="text-center isolate ">
        <div className="absolute inset-0 -z-10 h-full w-full rounded-2xl [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

        <h1 className="text-black font-bold text-5xl sm:text-6xl mb-6">
          Vendé más. Hacelo fácil.
        </h1>
        <p className="text-black text-xl sm:text-2xl">
          Un sistema de ventas ágil, moderno y pensado para tu negocio.
        </p>

        {/* Aquí podés agregar una imagen, demo o componente visual */}
      </main>
    </div>
  );
}
