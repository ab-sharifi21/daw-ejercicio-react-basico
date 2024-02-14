function ProductItem({ product }) {
  const { id, name, imageUrl } = product;
  return (
    <>
      <article>
        <img src={imageUrl} alt="product image" />
        <p>{name}</p>
      </article>
    </>
  );
}

export default ProductItem;
