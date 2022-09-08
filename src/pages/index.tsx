import { GetServerSideProps } from "next";
import Image from "next/future/image";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../../public/assets/camisetas/1.png";
import camiseta2 from "../../public/assets/camisetas/2.png";
import camiseta3 from "../../public/assets/camisetas/3.png";
import camiseta4 from "../../public/assets/camisetas/4.png";

import "keen-slider/keen-slider.min.css";

interface Products {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface HomeProps {
  products: Products[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.id}>
          <Image
            src={product.imageUrl}
            placeholder="blur"
            blurDataURL="https://image-component.nextjs.gallery/placeholder"
            width={520}
            height={480}
            alt=""
          />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    };
  });

  return {
    props: {
      products,
    },
  };
};
