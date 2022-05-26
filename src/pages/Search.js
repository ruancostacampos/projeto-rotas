import { useSearchParams, Link } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/products?" + searchParams;
    const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponíveis </h1>
        <li>
            <ul className="products">
            {items && items.map( (product) => (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>R$: {product.price}</p>
                    <Link to={`/products/${product.id}`}>Detalhes</Link>
                </li>
            ))}
            </ul>
        </li>
    </div>
  )
}

export default Search