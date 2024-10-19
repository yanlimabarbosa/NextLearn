import { useRouter } from "next/router"
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products"

export default function Product() {
  const { query } = useRouter()

  console.log(query)

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta</h1>
        <span>R$ 53,50</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
          exercitationem esse optio odit beatae molestiae temporibus, ex vitae
          maxime recusandae doloribus accusamus quibusdam natus nisi numquam
          nulla placeat. Eum, corporis.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
