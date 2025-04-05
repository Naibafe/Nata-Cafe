import ProductCard from "./ProductCard";

function ProductContainer({ products }) {
  return (
    <div className="productsContainer">
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </div>
  );
}

export default ProductContainer;
