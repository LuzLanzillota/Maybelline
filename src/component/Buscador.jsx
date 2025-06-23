// import { useState } from 'react';
// import products from "../data/data";
// import './Buscador.css';

// function Buscador() {
//     const [searchTerm, setSearchTerm] = useState('');

//     const filteredProducts = products.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="buscador-container">
//             <div className="search-container">
//                 <span className="search-icon">
//                     <img src="/Images/lupa.png" alt="Lupa" />
//                 </span>
//                 <input
//                     type="text"
//                     placeholder="Buscar producto"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//             </div>

//             <div className="product-grid">
//                 {filteredProducts.map((product) => (
//                     <div key={product.id} className="card">
//                         <img src={product.img} alt={product.title} />
//                         <div className="card-body">
//                             <h4 className="card-title">{product.title}</h4>
//                             <p className="card-description">{product.description[0]}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Buscador;


