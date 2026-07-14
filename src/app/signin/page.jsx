"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";

import { Eye, EyeSlash } from "@gravity-ui/icons";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
    

    const handleGoogleLogIn = async () => {
        await authClient
            .signIn.social({
                provider: "google",
                
            
                callbackURL: "/",
            });
         toast.success("Successfully logged in");
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,

      callbackURL: "/",
    });
  if (error) {
    toast.error(error.message || "Login failed");
    return;
  }

  toast.success("Successfully logged in");
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField placeholder="Password" isRequired name="password">
          <Label>Password</Label>

          <InputGroup className="w-full">
            <InputGroup.Input
              name="password"
              type={isVisible ? "text" : "password"}
            />

            <InputGroup.Suffix>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? <Eye /> : <EyeSlash />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="Sign In">
            <Check />
            Sign In
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>

        <p className="font-medium text-center">Or</p>

        <Button onClick={()=>handleGoogleLogIn()}
          type="button"
          variant="bordered"
          className="w-full h-12  border bg-linear-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"  
        >
          <GrGoogle className="text-lg" />
          Sign in with Google
        </Button>
      </Form>
    </Card>
  );
}
