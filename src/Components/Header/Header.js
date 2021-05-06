import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
             <h2>This is header component:  {category}</h2>
             <button onClick={() => setCategory('Laptop')}>Laptop</button>
             <button onClick={() => setCategory('Mobile')}>Mobile</button>
             <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;