
// Mock data (on simule le retour d'une requête à la base de données)
const products = [
    { _id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { _id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { _id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { _id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { _id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { _id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const styles = {
    container: {
        padding: '24px',
        backgroundColor: '#f0f4f8',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#0052cc',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 82, 204, 0.1)',
    },
    thead: {
        backgroundColor: '#0052cc',
    },
    thCell: {
        padding: '14px 16px',
        textAlign: 'left',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
    },
    categoryHeader: {
        backgroundColor: '#4080ff',
        color: 'white',
        fontWeight: '700',
        padding: '12px 16px',
        fontSize: '15px',
    },
    tdCell: {
        padding: '14px 16px',
        fontSize: '15px',
        borderBottom: '1px solid #e0e6ed',
    },
    row: {
        transition: 'background-color 0.2s ease',
    },
    rowHover: {
        backgroundColor: '#f0f7ff',
    },
    productName: {
        color: '#0052cc',
        fontWeight: '500',
    },
    productNameOutOfStock: {
        color: '#dc2626',
        fontWeight: '500',
        textDecoration: 'line-through',
    },
    price: {
        color: '#1e7e34',
        fontWeight: '600',
    },
};

function ProductTable() {
    const rows = []; // Nos lignes à afficher
    let lastCategory = null;

    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(
                <tr key={product.category} style={{ ...styles.row }}>
                    <th colSpan="2" style={styles.categoryHeader}>{product.category}</th>
                </tr>
            );
            lastCategory = product.category;
        }
        const isStocked = product.stocked;
        rows.push(
            <tr key={product.name} className="product-row" style={styles.row}>
                <td style={styles.tdCell}>
                    <span style={isStocked ? styles.productName : styles.productNameOutOfStock}>
                        {product.name}
                    </span>
                </td>
                <td style={{ ...styles.tdCell, ...styles.price }}>{product.price}</td>
            </tr>
        );
    });

    return (
        <div style={styles.container}>
            <style>{`
        .product-row {
          transition: background-color 0.2s ease;
        }
        .product-row:hover {
          background-color: #f0f7ff;
        }
      `}</style>
            <h2 style={styles.title}>📦 Product List</h2>
            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.thCell}>Product Name</th>
                        <th style={styles.thCell}>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};


function ProductList() {
    return (
        <section className="p-2 w-1/2 border-4 border-gray-300 rounded-lg">
            {products.map(prod => {
                return (
                    <Product info={prod} key={prod._id} />
                )
            })}
        </section>
    )
}

function Product({info}) {
    return (
        <div className={` p-2 m-2 rounded-lg ${info.stocked ? "bg-green-200" : "bg-gray-300 text-gray-900"}`}>
            <h3 className="text-lg text-center font-bold text-pink-500">{info.name}</h3>
            <p>Category: {info.category}</p>
            <p className={info.price === "$1" ? "font-bold" : ""} >Price: {info.price === "$1" ? "One dollah" : info.price}</p>
            <p>Stocked: {info.stocked ? "En stock" : "En rupture"}</p>
        </div>
    )
}


export default ProductList;