"use client";

import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import BillingInfo from "./BillingInfo";
import Agreement from "./Agreement";
import Rigs from "./Rigs";
import Profit from "./Profit";
import { RigData } from "@/utils/interfaces";

interface EditProps {
  id: string;
  rigs: RigData[];
}

const Edit = ({ id, rigs }: EditProps) => {
  return (
<Tabs
  aria-label="Options"
  color="primary"
  variant="bordered"
  classNames={{
    tabList: "bg-white p-0 rounded-0",
    cursor: "w-full bg-primary",
    tab: "max-w-fit px-8 h-10 data-[selected=true]:text-white transition-colors duration-200",
  }}
>
      <Tab key="personal" title="Personal Info">
        <PersonalInfo id={id} />
      </Tab>
      <Tab key="contact" title="Contact Info">
        <ContactInfo id={id} />
      </Tab>
      <Tab key="bill" title="Billing Info">
        <BillingInfo id={id} />
      </Tab>
      <Tab key="agreement" title="Agreement">
        <Agreement id={id} />
      </Tab>
      <Tab key="rigs" title="Rigs">
        <Rigs id={id} rigs={rigs} />
      </Tab>
      <Tab key="profit" title="Profit">
        <Profit id={id} />
      </Tab>
    </Tabs>
  );
};

export default Edit;
