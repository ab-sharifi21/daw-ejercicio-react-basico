import { v4 as uuidv4 } from "uuid";
import ProductItem from "./ProductItem";

const products = [
  {
    id: uuidv4(),
    name: "Mouse",
    imageUrl: "../../public/images/image1.jpg",
  },
  {
    id: uuidv4(),
    name: "Keyboard",
    imageUrl: "../../public/images/image2.jpg",
  },
  {
    id: uuidv4(),
    name: "Monitor",
    imageUrl: "../../public/images/image3.jpg",
  },
  {
    id: uuidv4(),
    name: "Charger",
    imageUrl: "../../public/images/image4.jpg",
  },
  {
    id: uuidv4(),
    name: "Drive",
    imageUrl: "../../public/images/image5.jpg",
  },
];

function ProductList() {
  return (
    <section>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
}

export default ProductList;
