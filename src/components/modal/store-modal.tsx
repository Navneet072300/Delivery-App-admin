"use client";

import React from "react";
import Model from "@/components/model";
import { useStoreModel } from "@/hooks/user-store-model";

export const StoreModal = () => {
  const storeModal = useStoreModel();
  return (
    <div>
      <Model
        title="Create Store"
        description="This is the store"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        Form to create this store
      </Model>
    </div>
  );
};
