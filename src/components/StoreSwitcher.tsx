"use client";

import { PopoverTrigger } from "@/components/ui/popover";
import { Store } from "@/type-db";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherPorps extends PopoverTriggerProps {
  items: Store[];
}

export const StoreSwitcher = ({ items }: StoreSwitcherPorps) => {
  const params = useParams();
  const router = useRouter();

  const formattedStores = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedStores.find(
    (item) => item.value === Number(params.storeId)
  );

  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`${store.value}`);
  };

  return (
    <div>
      <h1>StoreSwitcher</h1>
    </div>
  );
};
