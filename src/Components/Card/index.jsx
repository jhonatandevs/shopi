import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

export const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)
    const [addProduct, setAddProduct] = useState(false)
    function cleanImageUrl(url) {
        // Eliminar comillas dobles adicionales si las hay
        const cleanedUrl = url.replace(/\[|"|]/g, "");
        return cleanedUrl;
    }
    const productToShow = (data) => {
        context.setProductToShow(data)
        context.openProductDetail()

    }
    const addProductsToCart = (event, productData) => {
        setAddProduct(true)
        event.stopPropagation();
        console.log("ProductData:  ", productData);
        context.setCartProducts([...context.cartProducts, productData])
        context.setCount(context.count + 1);
        console.log("Cart:  ", context.cartProducts);
        context.openCheckoutSideMenu();
        context.closeProductDetail();

    }
    useEffect(() => {
        
    }, [addProduct, context.cartProducts]);
    return (
        <div className="bg-white dark:bg-slate-400 cursor-pointer w-56 h-80 rounded-lg p-5 my-2" onClick={() => productToShow(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">{data?.category?.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={cleanImageUrl(data?.images[0])} alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 z-13"
                    
                >
                  { !context.isProductInCart(data?.id) && <PlusIcon onClick={(event) => addProductsToCart(event, data)} />}
                  {context.isProductInCart(data?.id) && <p><CheckIcon className="h-4 text-green-500 font-bold cursor-no-drop"/></p>}
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-black text-sm font-light">{data?.title}</span>
                <span className="text-black text-lg font-semibold">${data?.price}</span>
            </p>
        </div>
    );

};