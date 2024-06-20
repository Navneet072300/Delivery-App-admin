"use client";

import { useStoreModel } from "@/hooks/user-store-model";
import { useEffect } from "react";

// Rename the function to start with an uppercase letter
export default function Page() {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
