import React from "react";
import getAllWithdrawsById from "@/app/actions/getAllWithdrawsById";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  // console.log(params)
  const withdraw = await getAllWithdrawsById(params?.id);
  return <UpdateWithdraw withdraw={withdraw?.data} />;
};

export default page;
