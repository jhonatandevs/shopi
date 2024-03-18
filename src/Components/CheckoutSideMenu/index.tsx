import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

export const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    const [total, setTotal] = useState(0)
    let totalValue = 0;
    useEffect(() => {
        console.log("PRODUCT IN checkout:  ", context?.productToShow)
        console.log("CARD EN CHECKOUT:   ", context?.cartProducts)
    }, [context]);
    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        console.log("ORDER:  ", context?.order)
    }
    if (context?.isCheckoutSideMenuOpen)
        return (
            <aside className={` checkout_side_menu flex flex-col fixed right-0 border border-black rounded-lg bg-white z-20 flex-1`}>
                <div className="overflow-y-auto">
                    <div className='  justify-between items-center p-6'>
                        <h2 className='font-medium text-xl text-center'>My Order </h2>
                        <div className="absolute right-3 top-1 cursor-pointer">
                            <XMarkIcon className="h-6 w-6 text-black-500" onClick={() => context.closeCheckoutSideMenu()} />
                        </div>
                    </div>
                    <div className="p-4 mb-24">
                        {context?.cartProducts?.map((product, index) => {
                            totalValue += product?.price;
                            return (
                                <OrderCard key={index} urlImage={product?.images[0]} title={product?.title} price={product?.price} id={product?.id} handleDelete={true}/>
                            )
                        })}
                    </div>
                </div>
                <div className=" absolute bottom-0 p-4 bg-white w-full z-10">
                    <div className="flex justify-between mb-2 pr-2">
                        <p className='text-lg font-bold'>TOTAL:</p>
                        <p className='text-lg font-bold'>$ {totalValue}</p>
                    </div>
                    <Link to={'/my-order/last'}>
                        <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                    </Link>
                </div>
            </aside>
        )
    else return <></>

}
