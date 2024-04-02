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

const Login = () => {
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
                <Form>
                  {/* for email field */}
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="tony@gmail.com"
                    />
                  </FormGroup>

                  {/* for password field */}
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password here"
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="primary" outline>Login</Button>
                    <Button type="reset" className="ms-2" color="secondary" outline>Reset</Button>
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
