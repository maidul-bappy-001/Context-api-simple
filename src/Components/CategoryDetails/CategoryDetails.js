import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {

    const {name} = props.product
    return (
        <div>
            <h6>Selected Product : {name}</h6>
        </div>
    );
};

export default CategoryDetails;