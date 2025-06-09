import { ICardProduct } from "@/interfaces";
import Image from "next/image";
import React from "react";
import Button from "../Buttons/Button";

export const CardProduct: React.FC<ICardProduct> = ({ name, image, price }) => {
    return (
        <div className="w-64 bg-white p-4 text-center border border-[#777] hover:border-[#6e5cc4] rounded-lg transition-colors duration-300">
            <div className="w-full h-64 relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="mt-4 text-m font-semibold text-gray-800">
                {name}
            </div>
            <div className="mt-4 flex justify-between items-center text-sm font-semibold text-gray-800">
                <strong>${price}</strong>
                <Button
                    textContent="Comprar"
                    className="text-sm rounded-lg bg-primary py-1 px-4 text-white hover:bg-[#4e4090] transition-colors"
                />
            </div>
        </div>
    )
}

export default CardProduct;