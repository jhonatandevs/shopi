import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from '../../Context'
import React, { useContext, useEffect, useState } from 'react'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  useEffect(() => {
    console.log("ORDER:  ", context?.order)
  }, [context]);
  return (
    <Layout>
    <h1>  MyOrders</h1>
      {context?.order.map((ord,index) => {
        return (
          <Link to={'/my-order/'+index} key={'my-order#'+index}>
            <OrdersCard totalPrice={ord?.totalPrice} totalProducts={ord?.totalProducts} date={ord?.date} id={index}/>
          </Link>
        )
      })}
    </Layout>
  )
}

export default MyOrders
