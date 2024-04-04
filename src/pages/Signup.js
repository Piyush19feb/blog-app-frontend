import React, { useEffect, useState } from "react";
import { signUp } from "../Services/user-service";
import Base from "../components/Base";
import { toast } from "react-toastify";
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

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // as soon as data changes from anywhere this hook will get called automatically
  // useEffect(()=>{
  //   console.log(data);
  // }, [data])

  const handleChange = (event, property) => {
    // console.log("name changed");
    // console.log(event.target.value);
    // setData({...data, name:event.target.value})

    // setting the values dynamically
    setData({ ...data, [property]: event.target.value });
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // submitting form
  const submitForm = (event) => {
    // preventing default behavior of form
    event.preventDefault();
    // if (error.isError) {
    //   toast.error("Input Data is Invalid !!");
    //   setError({...error, isError:false})
    //   return;
    // }

    console.log(data);
    // call server api for sending data
    signUp(data)
      .then((response) => {
        console.log(response);
        console.log("success log");
        toast.success(
          "User Registered Successfully with User Id: " + response.id
        );
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        // handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

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
                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name"> Enter Name </Label>
                    <Input
                      type="text"
                      placeholder="Tony Stark"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email"> Enter Email </Label>
                    <Input
                      type="email"
                      placeholder="tony@gmail.com"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password"> Enter Password </Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* about field */}
                  <FormGroup>
                    <Label for="about"> About </Label>
                    <Input
                      type="textarea"
                      placeholder="Enter Here"
                      id="about"
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      style={{ height: "200px" }}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="primary" outline>
                      Register
                    </Button>
                    <Button
                      color="secondary"
                      outline
                      type="reset"
                      className="ms-2"
                      onClick={resetData}
                    >
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
