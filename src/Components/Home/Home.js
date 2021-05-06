import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories'

const Home = () => {
    const value = useContext(CategoryContext)
    return (
        <div style={{border:'1px solid purple', margin:'10px'}} >
             <h2>This is home component</h2>
             <Categories></Categories>
        </div>
    );
};

export default Home;