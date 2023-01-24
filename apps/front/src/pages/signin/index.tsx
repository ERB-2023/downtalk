import { GoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  return (
    <>
      <p>signin</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
};

export default SignIn;
