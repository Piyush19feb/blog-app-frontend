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
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../Services/user-service";
import { doLogin } from "../auth";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const resetData = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({ ...loginDetail, [field]: actualValue });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    // validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username & password is required !!");
      return;
    }

    // lets call to server now
    loginUser(loginDetail)
      // .then((jwtTokenData) => {
      .then((data) => {
        console.log(data);
        // save the data in localStorage
        doLogin(data, () => {
          console.log("login details is saved in localStorage");
          // redirect to user dashboard page
        });
        toast.success("User Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong !!");
        }
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader className="text-center">
                <h3>Login</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* for email field */}
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="tony@gmail.com"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

                  {/* for password field */}
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password here"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="primary" outline>
                      Login
                    </Button>
                    <Button
                      type="reset"
                      className="ms-2"
                      color="secondary"
                      outline
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

export default Login;
