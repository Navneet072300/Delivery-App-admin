"use client";

import Heading from "@/components/Heading";
import { Store } from "@/type-db";

interface SettingFormProps {
  initialData: Store;
}

const SettingForm = ({ initialData }: SettingFormProps) => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <Heading title="Settings" description=" Manage Store Preferences" />
      </div>
    </>
  );
};

export default SettingForm;
