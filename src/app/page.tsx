'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();

  const handleZesClick = (e: any) => {
    e.preventDefault()
    router.push('zustry');
  };

  const handleApiClick = () => {
    router.push('/apifetch');
  };


  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <main >
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex space-x-4">
        <Button variant="default" onClick={handleZesClick}>
          Zustand Test Page
        </Button>
        <Button variant="red" onClick={handleApiClick}>
          React Query Test Page
        </Button>
        <Button variant="outline" onClick={handleLoginClick}>
          Login Page
        </Button>
      </div>
    </div>
    </main>
  );
};

export default Page;