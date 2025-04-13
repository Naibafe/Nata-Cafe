function SizeSelector({ size, setSize, productType }) {
  return (
    <div className="size-selector">
      <div>
        <button
          className={size == "S" || size == "100g" ? "size-button-active" : ""}
          onClick={() => setSize(productType == "coffee" ? "S" : "100g")}
        >
          {productType == "coffee" ? "S" : "100g"}
        </button>
        <button
          className={size == "M" || size == "200g" ? "size-button-active" : ""}
          onClick={() => setSize(productType == "coffee" ? "M" : "200g")}
        >
          {productType == "coffee" ? "M" : "200g"}
        </button>
        <button
          className={size == "L" || size == "300g" ? "size-button-active" : ""}
          onClick={() => setSize(productType == "coffee" ? "L" : "300g")}
        >
          {productType == "coffee" ? "L" : "300g"}
        </button>
      </div>
    </div>
  );
}

export default SizeSelector;
