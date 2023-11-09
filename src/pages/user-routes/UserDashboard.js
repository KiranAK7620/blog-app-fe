import React, { useEffect, useState } from "react";
import Base from "../../components/Base";
import AddPost from "../../components/AddPost";
import { Col, Container, Row } from "reactstrap";
import { getCurrentUserDetail } from "../../auth";
import { deletePostService, loadPostUserWise } from "../../services/post-service";
import { toast } from "react-toastify";
import Post from "../../components/Post";

const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    setUser(getCurrentUserDetail());
    loadPostData();
  }, []);

  //load post by user
  const loadPostData=()=>{
    loadPostUserWise(getCurrentUserDetail().id)
    .then((data) => {
     
      setPosts([...data.content]);
    })
    .catch((error) => {
      console.log("err", error);
      toast.error("Error in loading post by user id");
    });
  }

  //function to delete post

  const deletePost =(post)=>{

    deletePostService(post.postID).then(data=>{
      toast.success('Post deleted Successfully');

      let newPosts = posts.filter(
        (p) => p.postID != post.postID
      );
      setPosts([...newPosts]);

    }).catch(error=>{
      console.log(error);
      toast.error('Something went wrong');
    })

  }



  return (
    <Base>
      <Container className="my-3">
        {/* <Row> */}
        {/* <Col> */}
        <AddPost />
        <h2>Post count: ({posts.length})</h2>
        {posts &&
          posts.map((post, index) => {
            return <Post post={post} key={index} deletePost={deletePost} />;
          })}

        {posts.length <= 0 ? <h3>No post available for this user</h3> : ""}
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </Base>
  );
};

export default UserDashboard;
