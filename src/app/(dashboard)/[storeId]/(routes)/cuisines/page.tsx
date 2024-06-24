import { collection, doc, getDocs } from "firebase/firestore";

import { format } from "date-fns";
import { db } from "@/lib/firebase";
import { CuisineClient } from "./components/client";
import { Cuisine } from "@/type-db";
import { CuisineColumns } from "./components/columns";

const CuisinesPage = async ({ params }: { params: { storeId: string } }) => {
  const cuisinesData = (
    await getDocs(collection(doc(db, "stores", params.storeId), "cuisines"))
  ).docs.map((doc) => doc.data()) as Cuisine[];

  const formattedCuisines: CuisineColumns[] = cuisinesData.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: item.createdAt
      ? format(item.createdAt.toDate(), "MMMM do, yyyy")
      : "",
  }));

  return (
    <div className=" flex-col">
      <div className=" flex-1 space-y-4 p-8 pt-6">
        <CuisineClient data={formattedCuisines} />
      </div>
    </div>
  );
};

export default CuisinesPage;
