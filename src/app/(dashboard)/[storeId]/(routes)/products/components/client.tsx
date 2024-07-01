"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumns, columns } from "./columns";
import APIList from "@/components/APIList";

interface ProductClientProps {
  data: ProductColumns[];
}

export const ProductClient = ({ data }: ProductClientProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage categories for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className=" h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for products" />
      <Separator />
      <APIList entityName="products" entityNameId="productId" />
    </>
  );
};
