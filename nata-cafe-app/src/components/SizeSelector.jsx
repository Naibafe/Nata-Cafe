function SizeSelector({ size, setSize }) {
  return (
    <div className="size-selector">
      <div>
        <button
          className={size == "S" ? "size-button-active" : ""}
          onClick={() => setSize("S")}
        >
          S
        </button>
        <button
          className={size == "M" ? "size-button-active" : ""}
          onClick={() => setSize("M")}
        >
          M
        </button>
        <button
          className={size == "L" ? "size-button-active" : ""}
          onClick={() => setSize("L")}
        >
          L
        </button>
      </div>
    </div>
  );
}

export default SizeSelector;
