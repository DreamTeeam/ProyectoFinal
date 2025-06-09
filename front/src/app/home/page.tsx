import CardCategory from "@/components/UI/Cards/CardCategory";
import CardProduct from "@/components/UI/Cards/CardProduct";
import {ICard, ICardProduct} from "@/interfaces";
import React from "react";

const categories: ICard[] = [
  {
    name: "ZAPATILLAS",
    image: "/zapatilla.jpg",
  },
  {
    name: "BOTAS",
    image: "/bota.jpg",
  },
  {
    name: "SANDALIAS",
    image: "/sandalia.jpg",
  },
];

const subCategories: ICard[] = [
  {
    name: "ZAPATILLAS DEPORTIVAS",
    image: "/zapdeportivas.jpg",
  },
  {
    name: "BOTAS DE CUERO",
    image: "/botasc-tacon.jpg",
  },
  {
    name: "SANDALIAS CON PLATAFORMA",
    image: "/sandplataforma.jpg",
  },
];

const products: ICardProduct[] = [
  {
    name: "Zapatillas Deportivas",
    image: "/zapdeportivas.jpg",
    price: 28999,
    stock: 15,
  },
  {
    name: "Botas de Cuero con Tacón",
    image: "/botasc-tacon.jpg",
    price: 45999,
    stock: 8,
  },
  {
    name: "Sandalias con Plataforma",
    image: "/sandplataforma.jpg",
    price: 21999,
    stock: 20,
  },
];

export default async function Home() {
    return (
        <div className="bg-base1 rounded-xl text-black p-14 border-base3 border-opacity-30 border-l-2 border-t-2">
            <div className="mx-auto flex flex-wrap justify-center gap-y-10 gap-x-10 mt-20 ml-60">
                {categories.map((category, index) => (
                    <CardCategory key={index}
                    name={category.name}
                    image={category.image}/>
                ))}
            </div>
            <div className="mx-auto flex flex-wrap justify-center gap-y-10 gap-x-10 mt-20 ml-60">
                {subCategories.map((category, index) => (
                    <CardCategory key={index}
                    name={category.name}
                    image={category.image}/>
                ))}
            </div>
            <div className="mx-auto flex flex-wrap justify-center gap-y-10 gap-x-10 mt-20 ml-60">
                {products.map((category, index) => (
                    <CardProduct key={index}
                    name={category.name}
                    image={category.image}
                    price={category.price}/>
                ))}
            </div>
        </div>
    );
};