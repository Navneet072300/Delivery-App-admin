"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellImage from "./cell-image";

export type BillboardColumns = {
  id: string;
  label: string;
  imageUrl: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumns>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const { imageUrl } = row.original;
      return <CellImage imageUrl={imageUrl} />;
    },
  },
  {
    accessorKey: "label",
    header: "Billboard Name",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
