'use client';

import {useState} from "react";
import {data} from "./data";
import './product.css'

function SearchBar({onSearch}) {
   let [filter, setFilter] = useState('');
   let [showInStock, setShowInStock] = useState(false);

   function search(filter, showInStock) {
      onSearch({filter, showInStock});
   }

   const handleFilterChange = (e) => {
      setFilter(e.target.value);
      search(e.target.value, showInStock);
   }
   const handleShowInStockChange = (e) => {
      setShowInStock(e.target.checked);
      search(filter, e.target.checked);
   }

   return (<div>
      <form>
         <div>
            <input type="text" value={filter} onChange={handleFilterChange} placeholder={'Search...'}/>
         </div>
         <div style={{marginTop: '10px'}}>
            <input type="checkbox" checked={showInStock} onChange={handleShowInStockChange} id='instock-checkbox'/>
            <label htmlFor='instock-checkbox'> Only show products in stock</label>
         </div>
      </form>
   </div>)
}

function ProductTable({groupProducts}) {
   let categories = Object.keys(groupProducts);

   return (<div style={{marginTop: '15px'}}>
      <div width={'100%'}>
         <div>
            <span>Name</span>
            <span>Price</span>
         </div>
         <div>
            {categories.map((category, index) => <ProductCategoryRow key={index} products={groupProducts[category]}
                                                                     title={category}/>)}
         </div>
      </div>
   </div>);
}

function ProductCategoryRow({products, title}) {
   return (<>
      <h4>{title}</h4>
      {products.map((product, index) => <ProductRow key={index} product={product}/>)}
   </>)
}

function ProductRow({product}) {
   return (<div>
      <span className={`product ${product.stocked ? '' : 'out-of-stock'}`}>{product.name}</span>
      <span>{product.price}</span>
   </div>)
}

function filter(data, filterParams) {
   let filterResult = [...data];

   if (filterParams.filter) {
      filterResult = filterResult.filter((product) => product.name.toLowerCase().startsWith(filterParams.filter));
   }
   filterResult = filterResult.filter((product) => filterParams.showInStock ? product.stocked : product);
   console.log('filterResult: ', filterResult);

   return filterResult;
}

export default function FilterableProductTable() {
   const [products, setProducts] = useState(data);

   const handleSearch = (params) => {
      let filterResult = filter(data, params);
      setProducts(filterResult);
   }

   const groupProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
         acc[product.category] = [];
      }
      acc[product.category].push(product);

      return acc;
   }, {});

   return (<div style={{width: '400px'}}>
      <SearchBar onSearch={handleSearch}/>
      <ProductTable groupProducts={groupProducts}/>
   </div>)
}