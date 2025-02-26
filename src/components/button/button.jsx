const sayHello = (label) => {
  alert("A label desse botão é: " + label);
};

export const Button = (props) => {
  return (
    <button onClick={() => sayHello(props.label)} style={{ marginTop: "20px" }}>
      {props.label}
    </button>
  );
};
