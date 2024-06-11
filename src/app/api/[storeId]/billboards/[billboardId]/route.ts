import { db } from "@/lib/firebase";
import { Billboards } from "@/type-db";
import { auth } from "@clerk/nextjs/server";
import {
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
) => {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Un-Authorized", { status: 400 });
    }

    const { label, imageUrl } = body;

    if (!label) {
      return new NextResponse("Billboard name is missing", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Billboard image is missing", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store Id is missing", { status: 400 });
    }
    if (!params.billboardId) {
      return new NextResponse("Billboard Id is missing", { status: 400 });
    }

    const store = await getDoc(doc(db, "store", params.storeId));

    if (store.exists()) {
      let storeData = store.data();
      if (storeData?.userId !== userId) {
        console.log("ye wala error");
        return new NextResponse("Un-Authorized", { status: 500 });
      }
    }

    const billboardRef = await getDoc(
      doc(db, "store", params.storeId, "billboards", params.billboardId)
    );

    if (billboardRef.exists()) {
      await updateDoc(
        doc(db, "store", params.storeId, "billboards", params.billboardId),
        {
          ...billboardRef.data(),
          label,
          imageUrl,
          updatedAt: serverTimestamp(),
        }
      );
    } else {
      return new NextResponse("Billboard Not Found", { status: 400 });
    }

    const billboard = (
      await getDoc(
        doc(db, "store", params.storeId, "billboards", params.billboardId)
      )
    ).data() as Billboards;

    return NextResponse.json({ billboard });
  } catch (error) {
    console.log("dusra wala error");
    console.log(`STORES_POST: ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

//delete
export const DELETE = async (
  req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Un-Authorized", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store Id is missing", { status: 400 });
    }
    if (!params.billboardId) {
      return new NextResponse("Billboard Id is missing", { status: 400 });
    }

    const store = await getDoc(doc(db, "store", params.storeId));

    if (store.exists()) {
      let storeData = store.data();
      if (storeData?.userId !== userId) {
        console.log("ye wala error");
        return new NextResponse("Un-Authorized", { status: 500 });
      }
    }

    const billboardRef = doc(
      db,
      "store",
      params.storeId,
      "billboards",
      params.billboardId
    );
    await deleteDoc(billboardRef);

    const billboard = (
      await getDoc(
        doc(db, "store", params.storeId, "billboards", params.billboardId)
      )
    ).data() as Billboards;

    return NextResponse.json({ billboard });
  } catch (error) {
    console.log("dusra wala error");
    console.log(`STORES_POST: ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
