import { useContext, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import { Card } from "../../Components/Card";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid"
import { Link, useLocation, useParams } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext)
const [currentOrder, setCurrentOrder] = useState(null)
  let { id } = useParams();
  useEffect(() => {
    console.log("MY ORDER PAGE:  ", context?.order)
    console.log("Order:  ", context?.order.slice(-1)[id === 'last' ? (context?.order?.length - 1) : (id)])
    setCurrentOrder(context?.order[id === 'last' ? (context?.order?.length - 1) : (id)])
    console.log("Params:  ", id)
  }, [context, id, currentOrder]);
  if (currentOrder)
    return (
      <Layout>

        <div className="flex w-80 items-center">
          <Link to={'/my-orders'}>
            <ChevronDoubleLeftIcon className="h-4 text-black font-bold pr-5" /></Link>
          <h1>MY ORDER</h1>
        </div>
        <div className="flex flex-col pl-60 w-full max-w-screen-lg">
          {currentOrder?.products?.map((item, index) => {
            console.log("ID PARA RENDER:  ", id)
            return (
              <div className="mx-3" key={'order-' + index}>
                <OrderCard urlImage={item?.images[0]} title={item?.title} price={item?.price} id={item?.id} />
              </div>
            )
          })}
        </div>
      </Layout>
    )
    else return(
      <Layout>

      <div className="flex w-80 items-center">
      
        <h1>NO HAY PRODUCTOS ACTUALMENTE EN ESTA ORDEN</h1>
      </div>
      <div className="flex flex-col pl-60 w-full max-w-screen-lg">
        {currentOrder?.products?.map((item, index) => {
          console.log("ID PARA RENDER:  ", id)
          return (
            <div className="mx-3" key={'order-' + index}>
              <OrderCard urlImage={item?.images[0]} title={item?.title} price={item?.price} id={item?.id} />
            </div>
          )
        })}
      </div>
    </Layout>
    )
}

export default MyOrder
