import getOrderById from "@/app/actions/getOrderById";
import SingleOrderView from "@/app/dashboard/_components/Order/SingleOrderView";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const id = params?.id;

  let order;
  if (id) {
    order = await getOrderById(id);
  }
  return <SingleOrderView order={order?.data} />;
};

export default Page;
