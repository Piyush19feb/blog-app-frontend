import React, { useEffect, useRef, useState } from "react";
import { loadAllCategories } from "../Services/category-service";
import JoditEditor from "jodit-react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const AddPost = () => {
  const [categories, setCategories] = useState([]);
  // variables for jodit editor
  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <Card className="shadow mt-3" color="dark" inverse>
        <CardHeader>
          <h3>Share your thoughts here</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <div className="my-3">
              <Label for="title">Post Title</Label>
              <Input type="text" id="title" placeholder="Enter title here" />
            </div>

            <div className="my-3">
              <Label for="content">Post Content</Label>
              {/* <Input
                type="textarea"
                id="content"
                placeholder="Enter content here"
                style={{ height: "300px" }}
              /> */}

              <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
              />
            </div>

            <div className="my-3">
              <Label for="category">Post Category</Label>
              <Input type="select" id="category">
                {/* <option>--SELECT CATEGORY--</option>
                <option>Technology</option>
                <option>Sports</option>
                <option>Politics</option>
                <option>Entertainment</option>
                will print categories dynamically (i.e. from server) */}

                {categories.map((category) => (
                  <option key={category.id}>{category.categoryTitle}</option>
                ))}
              </Input>
            </div>

            <Container className="text-center">
              <Button color="primary" outline>
                Create Post
              </Button>
              <Button color="danger" className="ms-2" outline>
                Reset
              </Button>
            </Container>
          </Form>
          {content}
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
