import { LoginForm } from "~/components/auth/login-form";

const LoginPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-3">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
