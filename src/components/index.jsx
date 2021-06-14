import "./styles.css";

export const CardComponent = () => {
  function saludar() {
    alert("Hola");
  }
  return (
    <div className="card2">
      <h1>Titulo de card</h1>
      <strong>$999,99</strong>
      <br />
      <button onClick={saludar}>Agregar al carrito</button>
    </div>
  );
};


