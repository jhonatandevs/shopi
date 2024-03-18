import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext, useEffect } from "react"
import { ShoppingCartContext } from '../../Context'

export const OrderCard = props => {
  const { urlImage, title, price, id, handleDelete=false } = props
  const context = useContext(ShoppingCartContext)
const deleteItem=(id)=>{
  context.deleteItemToCart(id);
}
useEffect(() => {
  
}, [context.cartProducts]);
  return (
    <div className="flex justify-between items-center mt-6 ">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img src={urlImage} alt={title} className="w-full h-full rounded-lg object-cover"/>
        </figure>
        <p className="text-sm font-light">{title}</p>

      </div>
      <div className="flex items-center gap-2">
        <p className="font-medium text-lg">{price}</p>
       {handleDelete && (
         <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={()=>deleteItem(id)}></XMarkIcon>
       )}
      </div>

    </div>
  )
}
