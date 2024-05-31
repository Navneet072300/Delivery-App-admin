"use client";

import Model from "@/components/model";
import { useStoreModel } from "@/hooks/user-store-model";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect } from "react";

export default function page() {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return null;
}
