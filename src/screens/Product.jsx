import FilterableProductTable from "../components/Product/FilterableProductTable"

const Product = () =>{
    const PRODUCTS = [
        {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
        {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
        {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
        {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
        {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
        {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
      ];
   return(
    <div>
        <div>
        <h2>TABLA DE PRODUCTOS: PRÁCTICA DE COMPONENTES</h2>
        <FilterableProductTable products={PRODUCTS} />
        </div>
    </div>
    ) 
}

export default Product