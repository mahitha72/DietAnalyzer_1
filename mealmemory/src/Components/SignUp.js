import React, { useState } from 'react';
import { 
  Container, SignupContainer, SignInContainer, Form, Title, Input, 
  Button, GhostButton, Anchor, OverLayContainer, OverLay, 
  LeftOverlayPanel, RightOverlayPanel, Paragraph, 
  BackgroundContainer
} from '../Styles/SignStyle';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [signIn, setSignIn] = useState(true);
  const [credentials,setCredentials] =useState({
    name:'',email:'',password:'',
  });
  const navigate = useNavigate();

  const toggle = (isSignIn) => {
    setSignIn(isSignIn);
    setCredentials({
      name: '',
      email: '',
      password: '',
    });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetch("https://dietanalyzer-1.onrender.com/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      localStorage.setItem('userEmail', credentials.email); // Store email in local storage
      console.log(localStorage.getItem("userEmail"))
      alert("Login successfully");
      navigate('/home');
    } else {
      alert("Invalid login credentials");
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
   
    const response = await fetch("https://dietanalyzer-1.onrender.com/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location
      })
    });

    const json = await response.json();
    if (json.success) {
      toggle(true);
    } else {
      alert("Failed to create account, please try again");
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
   <BackgroundContainer>
    <Container>
      <SignupContainer signIn={signIn}>
        <Form onSubmit={handleSignUp}>
          <Title>Create Account</Title>
          <Input type='text' name='name' placeholder='Name' value={credentials.name} onChange={onChange} />
          <Input type='email' name='email' placeholder='Email' value={credentials.email} onChange={onChange} />
          <Input type='password' name='password' placeholder='Password' value={credentials.password} onChange={onChange} />
          <Button type="submit">Sign Up</Button>
        </Form>
      </SignupContainer>

      <SignInContainer signIn={signIn}>
        <Form onSubmit={handleSignIn}>
          <Title>Sign In</Title>
          <Input type='email' name='email' placeholder='Email' value={credentials.email} onChange={onChange} />
          <Input type='password' name='password' placeholder='Password' value={credentials.password} onChange={onChange} />
          <Anchor href='#'>Forgot Password?</Anchor>
          <Button type="submit">Sign In</Button>
        </Form>
      </SignInContainer>

      <OverLayContainer signIn={signIn}>
        <OverLay signIn={signIn}>
          <LeftOverlayPanel signIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>
              To keep connected with us please login with your personal info
            </Paragraph>
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signIn={signIn}>
            <Title>Hello, Friend!</Title>
            <Paragraph>
              Enter your personal details to start your journey with us
            </Paragraph>
            <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </OverLay>
      </OverLayContainer>
    </Container>
    </BackgroundContainer>
  );
}

export default SignUp;
