import { db } from "@/lib/firebase";
import { Store } from "@/type-db";
import { doc, getDoc } from "firebase/firestore";

interface DashboaardOverviewProps {
  params: { storeId: string };
}

const DashboaardOverview = async ({ params }: DashboaardOverviewProps) => {
  const store = (
    await getDoc(doc(db, "stores", params.storeId))
  ).data() as Store;
  return <div>Overview: {store.name}</div>;
};

export default DashboaardOverview;
