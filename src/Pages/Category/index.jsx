import { useEffect, useState, useContext } from "react";
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from '../../Context'
import { useParams } from "react-router-dom";


function Category() {
  const context = useContext(ShoppingCartContext);
  const [items, setItems] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    searchArticle(id||'nothing');
  }, [id]);

  const searchArticle = (category) => {
    console.log("Categoría:",category,".")
    const filteredArticles = context?.items?.filter(article =>
   article?.category?.name.toLowerCase().includes(category.trimStart().toLowerCase())
    );
    setItems(filteredArticles)
    // Aquí podrías hacer algo con los artículos filtrados, como mostrarlos en otro componente o actualizar el estado con ellos
  };


  return (
    <>
      <Layout>
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

export default Category
