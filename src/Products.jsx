
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products); // API response has "products" array
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Product List</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all">
//             <div className="flex justify-center mb-4">
//               {/* Display only the first image */}
//               {product.images && (
//                 <img
//                   src={product.images[0]} // Only first image
//                   alt={`${product.title} image`}
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//               )}
//             </div>
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">{product.title}</h3>
//               <p className="text-lg text-red-500 font-semibold">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   if (products.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/+923105059461" // WhatsApp link
//         target="_blank" // Open in new tab
//         rel="noopener noreferrer" // For security
//         className="fixed bottom-10 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
//       >
//         <i className="fab fa-whatsapp text-2xl"></i> {/* WhatsApp Icon */}
//       </a>

//       {/* Product Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Product List
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:bg-gray-100 opacity-100 animate-fadeIn"
//             >
//               <div className="flex justify-center mb-4">
//                 {product.images && product.images.length > 0 ? (
//                   <img
//                     src={product.images[0]} // Only show the first image
//                     alt={`${product.title} image`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                 ) : (
//                   <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
//                     No Image Available
//                   </div>
//                 )}
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-lg text-red-500 font-semibold">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;






// import React, { useEffect, useState } from "react";
// import axios from "axios";


// function Products() {
//   const [products, setProducts] = useState([]);

//   // Fetch products from the API when the component mounts
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products); // API response has "products" array
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   // If products are not yet loaded
//   if (products.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/+923105059461" // WhatsApp link
//         target="_blank" // Open in new tab
//         rel="noopener noreferrer" // For security
//         className="fixed bottom-10 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
//       >
//         <i className="fab fa-whatsapp text-2xl"></i> {/* WhatsApp Icon */}
//       </a>

//       {/* Product Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Product List
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:bg-gray-100 opacity-100 animate-fadeIn"
//             >
//               <div className="flex justify-center mb-4">
//                 {/* Show only the first image */}
//                 {product.images && (
//                   <img
//                     src={product.images[0]} // Only show the first image
//                     alt={`${product.title} image`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                 )}
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-lg text-red-500 font-semibold">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;








// // src/Products.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products); // API response has "products" array
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Product List</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all">
//             <div className="flex justify-center mb-4">
//               {/* Display only the first image */}
//               {product.images && (
//                 <img
//                   src={product.images[0]} // Only first image
//                   alt={`${product.title} image`}
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//               )}
//             </div>
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">{product.title}</h3>
//               <p className="text-lg text-red-500 font-semibold">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;









































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // Import the ImWhatsapp icon from react-icons
// import { ImWhatsapp } from "react-icons/im";

// function Products() {
//   const [products, setProducts] = useState([]);

//   // Fetch products from the API when the component mounts
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products); // API response has "products" array
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   // If products are not yet loaded
//   if (products.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* WhatsApp Floating Icon */}
//       <a
//         href="https://wa.me/+923105059461" // WhatsApp link
//         target="_blank" // Open in new tab
//         rel="noopener noreferrer" // For security
//         className="fixed bottom-10 right-5 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
//       >
//         {/* Replace the previous icon with ImWhatsapp */}
//         <ImWhatsapp className="text-3xl" />
//       </a>

//       {/* Product Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Product List
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:bg-gray-100 opacity-100 animate-fadeIn"
//             >
//               <div className="flex justify-center mb-4">
//                 {/* Show only the first image */}
//                 {product.images && (
//                   <img
//                     src={product.images[0]} // Only show the first image
//                     alt={`${product.title} image`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                 )}
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-lg text-red-500 font-semibold">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;

























// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ImWhatsapp } from "react-icons/im";
// import ReactPaginate from "react-paginate"; // Import react-paginate

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0); // Start page at 0 for react-paginate
//   const productsPerPage = 8; // Number of products per page

//   // Fetch products from the API when the component mounts
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products); // API response has "products" array
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   // If products are not yet loaded
//   if (products.length === 0) {
//     return <div>Loading...</div>;
//   }

//   // Get the current products to be displayed based on the current page
//   const indexOfLastProduct = (currentPage + 1) * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   // Handle page change
//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected); // Update the current page when user clicks pagination
//   };

//   return (
//     <div>
//       {/* WhatsApp Floating Icon */}
//       <a
//         href="https://wa.me/+923105059461" // WhatsApp link
//         target="_blank" // Open in new tab
//         rel="noopener noreferrer" // For security
//         className="fixed bottom-10 right-5 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
//       >
//         <ImWhatsapp className="text-3xl" />
//       </a>

//       {/* Product Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Product List
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {currentProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:bg-gray-100 opacity-100 animate-fadeIn"
//             >
//               <div className="flex justify-center mb-4">
//                 {/* Show only the first image */}
//                 {product.images && (
//                   <img
//                     src={product.images[0]} // Only show the first image
//                     alt={`${product.title} image`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                 )}
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-lg text-red-500 font-semibold">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls using react-paginate */}
//         <div className="flex justify-center mt-8">
//           <ReactPaginate
//             previousLabel={"Previous"}
//             nextLabel={"Next"}
//             breakLabel={"..."}
//             pageCount={Math.ceil(products.length / productsPerPage)}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={"flex space-x-4"}
//             pageClassName={"px-4 py-2 bg-gray-200 rounded-md cursor-pointer"}
//             activeClassName={"bg-black text-white"}
//             disabledClassName={"text-blue-400 cursor-not-allowed"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;











































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ImWhatsapp } from "react-icons/im";
// import ReactPaginate from "react-paginate"; // Import react-paginate

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0); // Start page at 0 for react-paginate
//   const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product
//   const productsPerPage = 8; // Number of products per page

//   // Fetch products from the API when the component mounts
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products); // API response has "products" array
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   // If products are not yet loaded
//   if (products.length === 0) {
//     return <div>Loading...</div>;
//   }

//   // Get the current products to be displayed based on the current page
//   const indexOfLastProduct = (currentPage + 1) * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   // Handle page change
//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected); // Update the current page when user clicks pagination
//   };

//   // Handle product click to open the modal
//   const handleProductClick = (product) => {
//     setSelectedProduct(product); // Set the clicked product to show details in modal
//   };

//   // Close the modal
//   const closeModal = () => {
//     setSelectedProduct(null); // Reset the modal state
//   };

//   return (
//     <div>
//       {/* WhatsApp Floating Icon */}
//       <a
//         href="https://wa.me/+923105059461" // WhatsApp link
//         target="_blank" // Open in new tab
//         rel="noopener noreferrer" // For security
//         className="fixed bottom-10 right-5 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
//       >
//         <ImWhatsapp className="text-3xl" />
//       </a>

//       {/* Product Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Product List
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {currentProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:bg-gray-100 opacity-100 animate-fadeIn cursor-pointer"
//               onClick={() => handleProductClick(product)} // Handle product click
//             >
//               <div className="flex justify-center mb-4">
//                 {/* Show only the first image */}
//                 {product.images && (
//                   <img
//                     src={product.images[0]} // Only show the first image
//                     alt={`${product.title} image`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                 )}
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-lg text-red-500 font-semibold">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls using react-paginate */}
//         <div className="flex justify-center mt-8">
//           <ReactPaginate
//             previousLabel={"Previous"}
//             nextLabel={"Next"}
//             breakLabel={"..."}
//             pageCount={Math.ceil(products.length / productsPerPage)}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={"flex space-x-4"}
//             pageClassName={"px-4 py-2 bg-gray-200 rounded-md cursor-pointer"}
//             activeClassName={"bg-black text-white"}
//             disabledClassName={"text-blue-400 cursor-not-allowed"}
//           />
//         </div>
//       </div>

//       {/* Product Detail Modal */}
//       {selectedProduct && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
//           onClick={closeModal} // Close modal when clicking outside
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg w-1/3"
//             onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inner click
//           >
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {selectedProduct.title}
//             </h2>
//             <img
//               src={selectedProduct.images[0]} // Show first image in modal
//               alt={selectedProduct.title}
//               className="w-full h-64 object-cover rounded-lg mb-4"
//             />
//             <p className="text-lg text-gray-700 mb-4">
//               {selectedProduct.description}
//             </p>
//             <p className="text-xl text-red-500 font-semibold">
//               ${selectedProduct.price}
//             </p>
//             <button
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               onClick={closeModal} // Close button
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Products;
















































import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImWhatsapp } from "react-icons/im";
import ReactPaginate from "react-paginate"; // Import react-paginate

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Start page at 0 for react-paginate
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product
  const productsPerPage = 8; // Number of products per page

  // Fetch products from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products); // API response has "products" array
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  // If products are not yet loaded
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  // Get the current products to be displayed based on the current page
  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected); // Update the current page when user clicks pagination
  };

  // Handle product click to open the modal
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product to show details in modal
  };

  // Close the modal
  const closeModal = () => {
    setSelectedProduct(null); // Reset the modal state
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/+923105059461"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-20 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
      >
        <ImWhatsapp className="text-3xl" />
      </a>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Product List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all transform hover:shadow-xl hover:bg-gray-100 opacity-100 animate-fadeIn cursor-pointer"
              onClick={() => handleProductClick(product)} // Handle product click
            >
              <div className="flex justify-center mb-4">
                {/* Show only the first image */}
                {product.images && (
                  <img
                    src={product.images[0]} // Only show the first image
                    alt={`${product.title} image`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {product.title}
                </h3>
                <p className="text-lg text-red-500 font-semibold">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls using react-paginate */}
        <div className="flex justify-center mt-8">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(products.length / productsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"flex justify-center space-x-4 py-4"}
            pageClassName={
              "px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition"
            }
            activeClassName={"bg-blue-500 text-white"}
            disabledClassName={"text-gray-400 cursor-not-allowed"}
          />
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inner click
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedProduct.title}
            </h2>
            <img
              src={selectedProduct.images[0]} // Show first image in modal
              alt={selectedProduct.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg text-gray-700 mb-4">
              {selectedProduct.description}
            </p>
            <p className="text-xl text-red-500 font-semibold">
              ${selectedProduct.price}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={closeModal} // Close button
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
