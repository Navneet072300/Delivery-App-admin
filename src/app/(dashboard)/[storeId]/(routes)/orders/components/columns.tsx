"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import CellActions from "./cell-actions";
import CellImage from "./cell-image";

export type OrderColumns = {
  id: string;
  isPaid: boolean;
  phone: string;
  address: string;
  order_status: string;
  images: string[];
  products: string;
  totalPrice: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumns>[] = [
  {
    accessorKey: "images",
    header: "Images",
    cell: ({ row }) => (
      <div className=" grid grid-cols-2 gap-2">
        <CellImage data={row.original.images} />
      </div>
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Amount",
  },
  {
    accessorKey: "isPaid",
    header: "Payment Status",
  },
  {
    accessorKey: "products",
    header: "Products",
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
