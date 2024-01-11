"use client";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { Avatar, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function UserSidebar() {
  const pathname = usePathname();
  const sidebarmenu = [
    {
      path: "/dashboard/user",
      name: "Dashboard",
      icon: <Icon icon="solar:pie-chart-outline" />,
    },
    {
      path: "/dashboard/user/mining",
      name: "Mining",
      icon: <Icon icon="solar:layers-linear" />,
    },
    {
      path: "/dashboard/user/rigs",
      name: "Rigs",
      icon: <Icon icon="solar:user-id-outline" />,
    },
    {
      path: "/dashboard/user/withdraw",
      name: "Withdraw",
      icon: <Icon icon="ri:currency-fill" />,
    },
    {
      path: "/dashboard/user/settings",
      name: "Settings",
      icon: <Icon icon="solar:settings-linear" />,
    },
    {
      path: "/dashboard/user/invoice",
      name: "Invoice",
      icon: <Icon icon="basil:invoice-outline" />,
    },

    {
      path: "/dashboard/user/product",
      name: "Product",
      icon: <Icon icon="solar:bag-heart-linear" />,
    },
  ];
  return (
    <div className="w-1/5 flex flex-col justify-between h-screen bg-white border border-stroke p-4">
      <div>
        <Image src={logo} alt="robofx" className="mb-6" />
        <ul>
          {sidebarmenu.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`py-2 px-3 flex justify-start rounded-lg my-3 text-xl 
                ${
                  pathname.toString().includes(item.path.toString())
                    ? "bg-primary text-white"
                    : ""
                }`}
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <Button className="flex w-full justify-start border-stroke rounded-lg">
          <Avatar
            className="w-7 h-7 rounded-full"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <span>Easter Howard</span>
        </Button>
      </div>
    </div>
  );
}