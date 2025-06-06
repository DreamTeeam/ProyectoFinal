"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/helpers/authContext";
import Cart from "../Cart";
import { getProducts } from "@/services/getProducts";
import { IProduct } from "@/interfaces/Product";
import SearchBar from "../SearchBar";
import { UserWidget } from "./UserWidget/UserWidget";
import userIcon from '@/utils/user-circle.svg'

export default function Navbar() {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const allProducts = await getProducts();
            setProducts(allProducts);
        } catch (error) {
            console.error("Error loading products", error);
        }
        };
        fetchProducts();
    }, []);

    return (
        <nav className="flex w-10/12 right-0 bg-second fixed text-base1 items-center z-10 h-16 justify-around px-2">
                    <Link href="/about" className="m-auto">
                        <h3 className="font-black bg-base1 text-second rounded-full px-2">ABOUT</h3>
                    </Link>

                    <div className="w-auto m-auto">
                        <SearchBar products={products} />
                    </div>

                    <Cart />

                    <div className="flex m-auto">
                        {user && (
                            <Link href="/favorites" className="text-base1 hover:underline m-auto">
                                <h3 className="font-black bg-base1 text-second rounded-full px-2">FAVORITES</h3>
                            </Link>
                        )}
                    </div>


                    <div className="flex my-auto ml-auto">
                        {user && (
                            <Link href="/dashboard"  className="mr-2">
                                <Image src={userIcon} alt="userIcon" className="w-8" />
                                <p>{user.name}</p>
                            </Link>
                        )}
                        <UserWidget />
                    </div>
        </nav>
    );
};