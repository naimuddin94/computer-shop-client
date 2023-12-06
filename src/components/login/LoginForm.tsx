import InputField from "../utility/InputField";
import PasswordField from "../utility/PasswordField";

const LoginForm = () => {
  return (
    <form>
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="enter your email address"
      />
      <PasswordField text="New to here?" path="/register" urlName="Register" />
      <div className="form-control mt-6">
        <button className="btn btn-accent rounded">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
