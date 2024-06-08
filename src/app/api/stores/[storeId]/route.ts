import { db } from "@/lib/firebase";
import { Store } from "@/type-db";
import { auth } from "@clerk/nextjs/server";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  { params }: { params: { storedId: string } }
) => {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Un-Authorized", { status: 400 });
    }
    if (!params.storedId) {
      return new NextResponse("Store Id is Required", { status: 400 });
    }

    const { name } = body;

    if (!name) {
      return new NextResponse("Store name is missing", { status: 400 });
    }

    const docRef = doc(db, "stores", params.storedId);
    await updateDoc(docRef, { name });
    const store = (await getDoc(docRef)).data() as Store;

    return NextResponse.json(store);
  } catch (error) {
    console.log(`STORES_PATCH: ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

//delete

export const DELETE = async (
  req: Request,
  { params }: { params: { storedId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Un-Authorized", { status: 400 });
    }
    if (!params.storedId) {
      return new NextResponse("Store Id is Required", { status: 400 });
    }

    const docRef = doc(db, "stores", params.storedId);

    //TODO: delete all the subcollections and along with those data file urls

    await deleteDoc(docRef);

    return NextResponse.json({
      msg: "Store and all it's sub collection deleted",
    });
  } catch (error) {
    console.log(`STORES_PATCH: ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
