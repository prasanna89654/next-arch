'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import LoginPage from "./login/page";
import { ModeToggle } from "@/components/themes/theme-switcher";

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
       
        <LoginPage />
    </main>
  );
};

export default Page;