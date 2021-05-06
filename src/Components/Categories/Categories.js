import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails'

const allProducts = [
    {name: 'Asus', category: 'laptop'},{name: 'MacBook', category: 'laptop'},{name: 'HP', category: 'laptop'},{name: 'Dell', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'},{name: 'Oneplus', category: 'mobile'},{name: 'Apple', category: 'mobile'},{name: 'Xiaomi', category: 'mobile'},
    {name: 'Canon', category: 'camera'},{name: 'Nikkon', category: 'camera'},{name: 'Sony', category: 'camera'},{name: 'Fujifilm', category: 'camera'}
]

const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [products, setproducts] = useState([])
    useEffect(() => {

        const matchedProducts = allProducts.filter( (pd) => pd.category.toLowerCase() === category.toLowerCase() )
        setproducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h3>Select Your Category: {category}</h3>
           {
               products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
           }
        </div>
    );
};

export default Categories;