import Image from "next/future/image";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, rerum.
          Esse unde fuga omnis qui? Reiciendis nemo temporibus excepturi est nam
          quo consequuntur quis pariatur aperiam quas! Eveniet, impedit non?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
