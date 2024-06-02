import { Timestamp } from "firebase/firestore";

export interface Store {
  id: number;
  name: string;
  userId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
