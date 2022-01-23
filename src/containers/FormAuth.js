import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../redux/actions/AuthAction";
import { Button, Form } from "react-bootstrap";
import "./Form.css";

const FormAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleSucess = (response) => {
    dispatch(loginWithGoogle(response, navigate));
  };
  const googleFailure = () => {
    console.log("hey");
  };

  return (
    <div>
      <div className="bg">
        <div className="myContainer">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="but">
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <GoogleLogin
                clientId="853792754042-vthrpojjjiphlqvnpj3dqqr2dvav9od5.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    variant="info"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Google Sign In
                  </Button>
                )}
                onSuccess={googleSucess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormAuth;
