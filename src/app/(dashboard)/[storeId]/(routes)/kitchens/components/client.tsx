"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { KitchenColumns, columns } from "./columns";
import APIList from "@/components/APIList";

interface KitchenClientProps {
  data: KitchenColumns[];
}

export const KitchenClient = ({ data }: KitchenClientProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title={`Kitchens (${data.length})`}
          description="Manage categories for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/kitchens/new`)}>
          <Plus className=" h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for sizes" />
      <Separator />
      <APIList entityName="Sizes" entityNameId="categoryId" />
    </>
  );
};
