"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { UserData } from "@/utils/interfaces";

// Shadcn UI Imports
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


interface UserProfileProps {
  user: UserData;
}

// Helper component to render clean key-value rows
const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon?: string;
  label: string;
  value?: string | number | null;
}) => {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0 border-border/50">
      <div className="flex items-center gap-2">
        {icon && <Icon icon={icon} className="text-muted-foreground w-4 h-4" />}
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      </div>
      <span className="text-sm font-semibold text-foreground text-right">{value}</span>
    </div>
  );
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const agreement = user?.agreement;
  const API_URL = "https://api.algopips.net";
  const downloadLink = `${API_URL}/${agreement}`;

  // Generate Initials for Avatar Fallback
  const initials = `${user?.personal_information?.firstName?.charAt(0) || ""}${user?.personal_information?.lastName?.charAt(0) || ""}`;

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
          <p className="text-muted-foreground">Manage user details and documents.</p>
        </div>
        <div className="flex gap-2">
           {/* Global Edit Button (Optional, if you want a master edit) */}
           <Button variant="outline" >
            <Link href={`/dashboard/admin/user/edit/${user?._id}`}>
              Edit Profile
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Identity & Actions */}
        <Card className="lg:col-span-1 h-fit shadow-sm">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4 relative">
              <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                <AvatarImage 
                  src={user?.personal_information?.photo} 
                  alt={user?.personal_information?.firstName}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl bg-muted">{initials}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-2 px-2 py-1" >
                Active
              </div>
            </div>
            <CardTitle className="text-2xl">
              {user?.personal_information?.firstName} {user?.personal_information?.lastName}
            </CardTitle>
            <CardDescription className="flex items-center justify-center gap-1 mt-1">
              <Icon icon="ic:outline-email" />
              {user?.personal_information?.email}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Icon icon="tdesign:location" className="mt-0.5 text-primary shrink-0" />
                <span>
                  {user?.contact_information?.address}, {user?.contact_information?.city}, {user?.contact_information?.country}
                </span>
              </div>
            </div>

            {agreement && (
              <Button
                className="w-full"
                variant="default"
              >
                <Link href={downloadLink} target="_blank">
                  <Icon icon="material-symbols-light:download" className="mr-2 h-5 w-5" />
                  Download Agreement
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* RIGHT COLUMN: Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Basic Information */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Icon icon="solar:user-id-bold-duotone" className="text-primary" />
                Basic Information
              </CardTitle>
              <Button variant="ghost" size="sm"  className="text-primary h-8">
                <Link href={`/dashboard/admin/user/edit/${user?._id}`}>
                   Edit
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <InfoRow label="First Name" value={user?.personal_information?.firstName} />
              <InfoRow label="Last Name" value={user?.personal_information?.lastName} />
              <InfoRow label="Email" value={user?.personal_information?.email} />
              <InfoRow label="Phone" value={user?.personal_information?.phone} />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Icon icon="solar:map-point-bold-duotone" className="text-primary" />
                Contact Address
              </CardTitle>
              <Button variant="ghost" size="sm"  className="text-primary h-8">
                <Link href={`/dashboard/admin/user/edit/${user?._id}`}>
                  Edit
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <InfoRow label="Address" value={user?.contact_information?.address} />
              <InfoRow label="City" value={user?.contact_information?.city} />
              <InfoRow label="Country" value={user?.contact_information?.country} />
              <InfoRow label="Zip Code" value={user?.contact_information?.zipcode} />
            </CardContent>
          </Card>

          {/* Billing Information */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Icon icon="solar:bill-list-bold-duotone" className="text-primary" />
                Billing Address
              </CardTitle>
              <Button variant="ghost" size="sm"  className="text-primary h-8">
                <Link href={`/dashboard/admin/user/edit/${user?._id}`}>
                  Edit
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <InfoRow label="Address" value={user?.billing_information?.address} />
              <InfoRow label="City" value={user?.billing_information?.city} />
              <InfoRow label="Country" value={user?.billing_information?.country} />
              <InfoRow label="Zip Code" value={user?.billing_information?.zipcode} />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;