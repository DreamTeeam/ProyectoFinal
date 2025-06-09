import {ICard} from "@/interfaces";
import Image from "next/image";
import React from "react";

export const CardCategory: React.FC<ICard> = ({ name, image }) => {
    return (
        <div className="w-64 bg-white p-4 text-center border border-transparent hover:border-[#6e5cc4] rounded-lg transition-colors duration-300">
            <div className="w-full h-64 relative">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="mt-4 text-lg font-semibold text-gray-800">
                {name}
            </div>
        </div>
    );
};

export default CardCategory;