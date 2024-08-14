import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 678px; 
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;  
  top: 10px;  
  left: 0;  
  transform: none;  
  padding: 20px;  
`;
export const SignupContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` : null}
`;
export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => props.signIn !== true ? `
    transform: translateX(100%);
  ` : null}
`;

export const Form = styled.form`
  background: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h3`
  font-weight: bold;
  margin: 0;
   font-size: 24px;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
   font-size: 18px;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid black;
  // background-color: #ff4b2b;
   background-color: #81A263;
  color: #ffff;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 16px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverLayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in;
  z-index: 100;
  ${props => props.signIn !== true ? `
    transform: translateX(-100%);
  ` : null}
`;

export const OverLay = styled.div`
  // background: #ff416c;
  background: #81A263;
  background: -webkit-linear-gradient(to right, #81A263, #81A263);
  background: linear-gradient(to right, #81A263, #81A263);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => props.signIn !== true ? `
    transform: translateX(50%);
  ` : null}
`;
export const OverlayPanel = styled.div`
  position: absolute;
   background: #81A263;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;
export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signIn !== true ? `
    transform: translateX(0);
  ` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signIn !== true ? `
    transform: translateX(20%);
  ` : null}
`;
export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  margin-left: 50px;
  margin-right: 50px;
`;


export const BackgroundContainer = styled.div`
  background-image: url('./Images/SignUpbg.jpg');  /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

