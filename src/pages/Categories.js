import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CategorySideMenu from "../components/CategorySideMenu";
import { loadPostCategoryWise } from "../services/post-service";
import { toast } from "react-toastify";
import Post from "../components/Post";
const Categories = () => {
  const { categoryId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPostCategoryWise(categoryId)
      .then((data) => {
        console.log("data", data);
        setPosts([...data.content]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading posts");
      });
  }, [categoryId]);

  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col md={3} className="pt-5">
            <CategorySideMenu />
          </Col>

          <Col md={9}>
            {/* <NewFeed /> */}
            <h2>Blog count : ( {posts.length} )</h2>
            {posts &&
              posts.map((post, index) => {
                return <Post post={post} key={index} />;
              })}

              {posts.length<=0 ? <h3>No post available for this category</h3>:''}
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Categories;
