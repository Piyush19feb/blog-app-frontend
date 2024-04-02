import React from "react";
import Base from "../components/Base";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader className="text-center">
                <h3>Sign Up</h3>
              </CardHeader>
              <CardBody>
                {/* creating form */}
                <Form>
                  {/* name field */}
                  <FormGroup>
                    <Label for="name"> Enter Name </Label>
                    <Input type="text" placeholder="Tony Stark" id="name" />
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email"> Enter Email </Label>
                    <Input
                      type="email"
                      placeholder="tony@gmail.com"
                      id="email"
                    />
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password"> Enter Password </Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                    />
                  </FormGroup>

                  {/* about field */}
                  <FormGroup>
                    <Label for="about"> About </Label>
                    <Input
                      type="textarea"
                      placeholder="Enter Here"
                      id="about"
                      style={{ height: "200px" }}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="primary" outline>Register</Button>
                    <Button color="secondary" outline type="reset" className="ms-2">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
