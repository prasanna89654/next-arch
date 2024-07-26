'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";

const Zustry = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Product Count: {count}</h1>
      <div className="flex space-x-4">
        <Button variant="default" onClick={increment}>
          Increment
        </Button>
        <Button variant="red" onClick={decrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Zustry;
