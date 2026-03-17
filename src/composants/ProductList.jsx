
// Mock data (on simule le retour d'une requête à la base de données)
const products = [
    { _id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { _id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { _id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { _id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { _id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { _id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];



function ProductTable() {
  const rows = []; // Nos lignes à afficher
  let lastCategory = null;

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <tr key={product.category}>
          <th colSpan="2">{product.category}</th>
        </tr>
      );
      lastCategory = product.category;
    }
    rows.push(
      <tr key={product.name}>
        <td>{product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>}</td>
        <td>{product.price}</td>
      </tr>
    );
  });
  
  console.log("DB1331 : ", rows);
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};



export default function ProductList() {
    return (
        <section className="p-2 w-1/2 border-2 border-orange-500">
            {products.map(prod => {
                return (<div key={prod._id} className={`bg-white p-2 m-1 rounded-md ${prod.stocked ? "bg-slate-200" : "bg-gray-300 text-gray-500"}`}>
                    <h3 className="text-lg text-center font-bold text-orange-500">{prod.name}</h3>
                    <p>Category: {prod.category}</p>
                    <p className={prod.price ==="$1"? "font-bold": "" } >Price: {prod.price === "$1" ? "One dollah" : prod.price}</p>
                    <p>Stocked: {prod.stocked ? "En stock" : "En rupture"}</p>
                </div>
                )
            }
            )
            }
        </section>
    )
}

// function Product() {

// }