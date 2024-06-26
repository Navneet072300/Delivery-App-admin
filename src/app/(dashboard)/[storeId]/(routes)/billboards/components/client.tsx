"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumns, columns } from "./columns";
import APIList from "@/components/APIList";

interface BillBoardClientProps {
  data: BillboardColumns[];
}

export const BillBoardClient = ({ data }: BillBoardClientProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className=" h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />

      <Heading title="API" description="API calls for categories" />
      <Separator />
      <APIList entityName="categories" entityNameId="categoryId" />
    </>
  );
};
