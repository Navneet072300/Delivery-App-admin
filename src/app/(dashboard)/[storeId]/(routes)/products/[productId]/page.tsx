import { db } from "@/lib/firebase";
import { Product } from "@/type-db";
import { doc, getDoc } from "firebase/firestore";
import ProductForm from "./_components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = (
    await getDoc(
      doc(db, "products", params.storeId, "products", params.productId)
    )
  ).data() as Product;

  return (
    <div className=" flex-col">
      <div className=" flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
