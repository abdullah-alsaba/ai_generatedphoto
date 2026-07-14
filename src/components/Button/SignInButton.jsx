import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const SignInButton = () => {
    return (
      <Link href="/signin">
        <Button
          variant="bordered"
          className="border-default-300 hover:bg-default-100 border"
        >
          Sign In
        </Button>
      </Link>
    );
};

export default SignInButton;