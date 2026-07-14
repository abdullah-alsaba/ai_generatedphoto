import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const SignUpButton = () => {
    return (
      <Link href="/signup">
        <Button className="bg-linear-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-6">
          Sign Up
        </Button>
      </Link>
    );
};

export default SignUpButton;