import { LoginForm, SocialLogin } from "@/components";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] relative">
      <div className="max-w-md rounded shadow bg-white card-body">
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginPage;
