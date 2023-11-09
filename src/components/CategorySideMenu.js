import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CategorySideMenu = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setcategories([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading categories");
      });
  }, []);

  return (
    <div>
      <ListGroup>
        <ListGroupItem tag={Link} to='/' action={true}>All Blogs</ListGroupItem>
        {categories &&
          categories.map((cat, index) => {
            return (
              <ListGroupItem tag={Link} to={'/categories/'+cat.categoryId} action={true} key={index}>
                {cat.categoryTitle}
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default CategorySideMenu;
