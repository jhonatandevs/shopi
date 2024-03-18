import { ChevronDoubleRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useContext, useEffect } from "react"
import { ShoppingCartContext } from '../../Context'

export const OrdersCard = props => {
  const { totalPrice, totalProducts, date, id } = props
  const context = useContext(ShoppingCartContext)

  useEffect(() => {

  }, [context.cartProducts]);
  return (
    <div className="mt-6 border border-black w-80 p-4 ring-offset-2 ring-2 ring-slate-600">
      <h3 className="text-right font-light text-gray-400">Orden# {id}</h3>
      <div className="grid grid-cols-2">
        <div className="">
          <p className="font-bold text-lg">
            Date:    <span className="font-light pl-3">{date}</span>
          </p>
          <p className="font-bold text-lg">
            Total:   <span className="font-light pl-3">${totalPrice}</span>
          </p>
          <p className="font-bold text-lg">
          <span className="font-light pl-3">{totalProducts}</span> articles
          </p>
        </div>
        <div className=" flex justify-end items-center">

          <ChevronDoubleRightIcon className="pl-3 h-7 items-end text-right text-black font-bold pr-5" />
        </div>
      </div>
    </div>
  )
}
