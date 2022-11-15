import { GetStaticProps } from "next";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/screen/product";

export default function Product() {

  return (
    <ProductContainer> 
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1> Camiseta X </h1>
        <span> R$ 79,90 </span>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos pariatur molestiae, omnis neque voluptatem natus repellendus ducimus ratione temporibus voluptate aspernatur quibusdam deserunt odit sed recusandae architecto. Praesentium, autem! </p>

        <button>
          Comprar Agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 1 // 1 hour
  }
}