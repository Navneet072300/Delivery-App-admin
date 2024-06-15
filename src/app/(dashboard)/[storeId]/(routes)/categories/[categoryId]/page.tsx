import { db } from "@/lib/firebase";
import { Billboards, Category } from "@/type-db";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import CategoryForm from "./_components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { storeId: string; categoryId: string };
}) => {
  const category = (
    await getDoc(
      doc(db, "stores", params.storeId, "categories", params.categoryId)
    )
  ).data() as Category;

  const billboardData = (
    await getDocs(collection(doc(db, "stores", params.storeId), "billboards"))
  ).docs.map((doc) => doc.data()) as Billboards[];

  return (
    <div className=" flex-col">
      <div className=" flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} billboards={billboardData} />
      </div>
    </div>
  );
};

export default BillboardPage;
