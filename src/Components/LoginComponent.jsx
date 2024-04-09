
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import {Link} from "react-router-dom"

export default function LoginComponent() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label className="text-sm leading-none" htmlFor="remember">
            Remember me
          </Label>
        </div>
      </CardContent>
      <CardFooter className="space-y-4">
        <Button className="w-full">Sign in</Button>
        <Button className="w-full" variant="outline">
          Sign in with Google
        </Button>
      </CardFooter>
      <CardFooter className="flex flex-col items-center space-y-2">
        <Link className="text-sm underline" href="#">
          Forgot your password?
        </Link>
      </CardFooter>
    </Card>
  );
}
