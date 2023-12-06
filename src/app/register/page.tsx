import { RegisterForm, SocialLogin } from '@/components';


const RegisterPage = () => {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] relative">
        <div className="max-w-md rounded shadow bg-white card-body mx-2 my-10">
          <RegisterForm />
          <SocialLogin />
        </div>
      </div>
    );
};

export default RegisterPage;