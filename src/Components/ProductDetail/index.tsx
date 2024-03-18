import React, { useContext, useEffect } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
   
    useEffect(() => {
        console.log("PRODUCT IN UEF:  ", context?.productToShow)
        console.log("ISOPEN:  ",context.isProductDetailOpen)
    }, [context]);
    if (context.isProductDetailOpen)
        return (
            <aside className={`${context?.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white z-20`}>
                <div className='  justify-between items-center p-6'>
                    <h2 className='font-medium text-xl text-center pb-5'>Detail </h2>
                    <div className="absolute right-3 top-1 cursor-pointer">
                        <XMarkIcon className="h-6 w-6 text-black-500" onClick={() => context.closeProductDetail()} />
                    </div>
                    <figure>
                        <img src={context?.productToShow?.images[0]} alt={context?.productToShow.title||'product'+Math.random()} className='w-full h-full rounded-lg' />
                    </figure>
                    <p className='flex flex-col p-6'>
                        <span className='font-medium text-2xl mb-2'>${context.productToShow?.price}</span>
                        <span className='font-extrabold text-md'> {context.productToShow?.title}</span>
                        <span className='font-light text-sm'>{context.productToShow?.description}</span>
                    </p>
                </div>
            </aside>
        )
    else return <></>
}
