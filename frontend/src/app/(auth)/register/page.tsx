import { RegisterForm } from "~/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-3">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
