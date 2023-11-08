import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategories } from '../services/category-service';
import { toast } from 'react-toastify';

const CategorySideMenu = () => {

    const [categories,setcategories]=useState([]);

    useEffect(()=>{

        loadAllCategories().then(data=>{
            setcategories([...data])
        }).catch(error=>{
            console.log(error);
            toast.error('Error in loading categories');
        });

    },[])

  return (
    <div>
        <ListGroup>
            <ListGroupItem action='true'>
                All Blogs
            </ListGroupItem>
            <ListGroupItem action='true'>
                Programming
            </ListGroupItem>
        </ListGroup>
    </div>
  )
}

export default CategorySideMenu