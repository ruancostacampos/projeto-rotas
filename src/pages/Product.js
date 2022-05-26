import {useParams, Link} from 'react-router-dom'

import { useFetch } from '../hooks/useFetch';

const Product = () => {
  //Rota dinâmica
  const {id} = useParams();
  const url = "http://localhost:3000/products/" + id;
  const {data: product, loading, error} = useFetch(url);
  console.log(product);
  return (
    <div>
        {error && <p>Ocorreu um erro ao carregar detalhes do produto.</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
              <h1>{product.name}</h1>
              <p>R$: {product.price}</p>
              {/* Nested Routes*/}
              <Link to={`/products/${id}/info`}>Informações</Link>
            </div>
        )}
    </div>
  )
}

export default Product