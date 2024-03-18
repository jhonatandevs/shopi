import { createContext, useEffect, useState } from 'react'
export const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [productToShow, setProductToShow] = useState({})

  // Product Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  const deleteItemToCart = (id) => {
    const updatedCartProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCartProducts);
  };
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  const [order, setOrder] = useState([]);

  const isProductInCart = (id) => {
    return cartProducts.some((product) => product.id === id);
  };
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products').then((response) => response.json()).then(data => setItems(data))
  }, []);
  useEffect(() => {
  }, [productToShow, cartProducts]);
  return (
    <ShoppingCartContext.Provider value={{
      count, 
      setCount, 
      openProductDetail, 
      closeProductDetail, 
      isProductDetailOpen, 
      setProductToShow, 
      productToShow, 
      isCheckoutSideMenuOpen, 
      openCheckoutSideMenu, 
      closeCheckoutSideMenu, 
      setCartProducts, 
      cartProducts, 
      deleteItemToCart, 
      isProductInCart, 
      order,
      setOrder,
      items,
      setItems
    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}
