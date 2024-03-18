import { useEffect, useState, useContext } from "react";
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from '../../Context'


function Home() {
  const context = useContext(ShoppingCartContext);
  const [items, setItems] = useState([]);
  const searchArticle = (searchTerm) => {
    const filteredArticles = context?.items?.filter(article =>
      article?.title?.toLowerCase().includes(searchTerm.toLowerCase()) || article?.category?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredArticles)
    // Aquí podrías hacer algo con los artículos filtrados, como mostrarlos en otro componente o actualizar el estado con ellos
  };
  useEffect(() => {
    setItems(context?.items)
  }, [context]);
  useEffect(() => {

  }, [items]);
  return (
    <>
      <Layout>
        <input
          type="text"
          placeholder="Search article"
          onChange={(event) => searchArticle(event?.target?.value || '')}
          className="sticky top-0 bg-white z-29 p-4 w-full border rounded focus:outline-double focus:border-slate-500 focus:ring-slate-500 focus:outline-slate-500 w-80 rounded-2xl"
        />
        {items?.length>0 &&(
          <div className="flex col-4 grid grid-cols-4 w-full max-w-screen-lg">
          {items?.map(item => {
            return (
              <Card data={item} key={item?.title + item.id} />
            )
          })}
        </div>
        )}
         {items?.length==0 &&(
          <h1 className="text-center"> {'No hay coincidencias :( '}</h1>
        )}
        <ProductDetail />
      </Layout>
    </>
  )
}

export default Home
