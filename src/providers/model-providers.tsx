"use client";

import { StoreModal } from "@/components/modal/store-modal";
import React, { useEffect, useState } from "react";

export default function ModelProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <StoreModal />
    </div>
  );
}
