import { School2 } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import GoogleIcon from "~/icons/google";

export function LoginForm() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-5">
      <Link
        href="/"
        className="flex items-center gap-2 self-center font-medium"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <School2 className="size-4" />
        </div>
        School ERP
      </Link>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your Credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-5">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="usrename">Username</Label>
                  <Input
                    id="usrename"
                    type="usrename"
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto text-xs underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  <GoogleIcon />
                  Login with Google
                </Button>
              </div>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium hover:underline underline-offset-4"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="hover:underline">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
