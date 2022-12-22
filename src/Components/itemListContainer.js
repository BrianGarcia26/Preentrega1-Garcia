function ItemListContainer(props) {
  const {Tienda, Escuela} = props;
  return (
    <div>
      Bienvenidos a {Tienda}, tutores de {Escuela}.
    </div>
  );
};

export default ItemListContainer