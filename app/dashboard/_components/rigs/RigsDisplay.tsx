"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cookies from "universal-cookie";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

// --- SHADCN/UI Imports ---
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// -------------------------

// Custom components
import DeleteButton from "@/components/DeleteButton";
import Pagination from "@/components/Pagination";

import { RigData } from "@/utils/interfaces";

interface AllRigsData {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: RigData[];
}

interface RigsDisplayProps {
  response: AllRigsData;
  userid: string;
}

const RigsDisplay = ({ response, userid }: RigsDisplayProps) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const router = useRouter();

  const rigs = response?.result;
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const totalPages = response?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/user/${userid}/rigs?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/user/${userid}/rigs?page=${previousPage}`;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [showStartAllButton, setShowStartAllButton] = useState(true);
  const [showPauseAllButton, setShowPauseAllButton] = useState(false);

  useEffect(() => {
    setCurrentPage(Number(page) || 1);

    const storedShowStartAllButton = localStorage.getItem("showStartAllButton");
    const storedShowPauseAllButton = localStorage.getItem("showPauseAllButton");

    if (
      storedShowStartAllButton !== null &&
      storedShowPauseAllButton !== null
    ) {
      setShowStartAllButton(storedShowStartAllButton === "true");
      setShowPauseAllButton(storedShowPauseAllButton === "true");
    }
  }, [page]);

  // --- INDIVIDUAL MINING ACTIONS ---

  const handleStartMining = (rig: RigData) => {
    const url = `/history/start/${rig?._id}`;

    Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
      })
      .catch((error) => {
        // toast.error("Something went wrong!");
        router.refresh();
      });
  };

  const handlePauseMining = (rig: RigData) => {
    const url = `/history/pause/${rig?._id}`;

    Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        router.refresh();
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  // --- BULK MINING ACTIONS ---

  const handleStartAllRigs = async () => {
    const url = `/history/startall/${userid}`;

    await Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setShowStartAllButton(false);
          setShowPauseAllButton(true);
          localStorage.setItem("showStartAllButton", "false");
          localStorage.setItem("showPauseAllButton", "true");
          toast.success(response?.data?.message);
          router.refresh();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error starting rigs:", error);
      });
  };

  const handlePauseAllRigs = async () => {
    const url = `/history/pauseall/${userid}`;

    await Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setShowStartAllButton(true);
          setShowPauseAllButton(false);
          localStorage.setItem("showStartAllButton", "true");
          localStorage.setItem("showPauseAllButton", "false");
          toast.success(response?.data?.message);
          router.refresh();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error pausing rigs:", error);
      });
  };

  // --- EDIT MODAL LOGIC ---

  const [selectedRig, setSelectedRig] = useState<RigData>();

  const [modalFormData, setModalFormData] = useState({
    rigName: "",
    efficiency: 0,
    gpu: "",
    power: "",
    temp: "",
    load: "",
    fan: "",
    proficiency: 0,
  });

  const handleOpen = (rig: RigData) => {
    setIsModalOpen(true);
    setSelectedRig(rig);
    setModalFormData({
      rigName: rig?.rigName,
      efficiency: rig?.efficiency,
      gpu: rig?.gpu,
      power: rig?.power,
      temp: rig?.temp,
      load: rig?.load,
      fan: rig?.fan,
      proficiency: rig?.proficiency,
    });
  };

  const handleChangeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isNumeric = ["efficiency", "proficiency"].includes(name);
    const finalValue: string | number = isNumeric
      ? parseFloat(value) || 0
      : value;

    setModalFormData((prevData) => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    const modalFormattedData = {
      ...modalFormData,
      efficiency: Number(modalFormData.efficiency),
      proficiency: Number(modalFormData.proficiency),
    };

    try {
      const apiUrl = `/rigs/${selectedRig?._id}`;
      const response = await Axios.patch(apiUrl, modalFormattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(
        response?.data?.message || "Rig data updated successfully!"
      );
      router.refresh();
      setIsModalOpen(false);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
      console.error("Error updating rig data:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusClasses = (status: string): string => {
    if (status === "mining") {
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    }
    return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
  };

  return (
    <>
      <Card className="my-6 shadow-lg">
        <CardHeader className="p-4 border-b flex flex-row justify-start gap-4 items-center">
          <div className="text-xl font-semibold  ">
            {rigs?.[0]?.userid?.personal_information?.firstName ||
            rigs?.[0]?.userid?.email
              ? `Rigs assigned to ${
                  rigs[0]?.userid?.personal_information?.firstName
                } ${rigs[0]?.userid?.personal_information?.lastName || ""}`
              : "User Rigs"}
          </div>

          <div className="flex space-x-3">
            {showStartAllButton && (
              <Button
                onClick={handleStartAllRigs}
                variant="default"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Icon icon="ph:play-fill" className="h-5 w-5" /> Start All Rigs
              </Button>
            )}
            {showPauseAllButton && (
              <Button onClick={handlePauseAllRigs} variant="destructive">
                <Icon icon="solar:pause-bold" className="h-5 w-5" /> Stop All
                Rigs
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Rig Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  GPU
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Efficiency
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Proficiency
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Temp
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Fan
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Load
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Power
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Status
                </th>
                {/* Widened Action column to accommodate new button */}
                <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground min-w-[200px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rigs?.length > 0 ? (
                rigs.map((rig, index) => (
                  <tr
                    key={index}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle font-medium">
                      {rig?.rigName}
                    </td>
                    <td className="p-4 align-middle">{rig?.gpu}</td>
                    <td className="p-4 align-middle">{rig?.efficiency}</td>
                    <td className="p-4 align-middle">{rig?.proficiency}</td>
                    <td className="p-4 align-middle">{rig?.temp}</td>
                    <td className="p-4 align-middle">{rig?.fan}</td>
                    <td className="p-4 align-middle">{rig?.load}</td>
                    <td className="p-4 align-middle">{rig?.power}</td>
                    <td className="p-4 align-middle">
                      <span
                        className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase rounded-full ${getStatusClasses(
                          rig?.status
                        )}`}
                      >
                        {rig?.status === "mining" ? "mining" : "stopped"}
                      </span>
                    </td>
                    <td className="p-4 align-middle text-center">
                      <div className="flex justify-center items-center space-x-2">
                        {/* --- NEW BUTTON LOGIC HERE --- */}
                        {rig.status === "mining" ? (
                          <Button
                            onClick={() => handlePauseMining(rig)}
                            size="sm"
                            className="h-8 bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 flex items-center gap-1 text-xs"
                          >
                            <Icon icon="solar:pause-bold" className="text-sm" />
                            Pause
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleStartMining(rig)}
                            size="sm"
                            className="h-8 flex items-center gap-1 text-xs"
                          >
                            <Icon icon="ph:play-fill" className="text-sm" />
                            Start
                          </Button>
                        )}
                        {/* ----------------------------- */}

                        <Button
                          onClick={() => handleOpen(rig)}
                          variant="outline"
                          size="sm"
                          className="h-8 p-2"
                        >
                          <Icon icon="uil:edit" className="h-4 w-4" />
                        </Button>
                        <DeleteButton id={rig?._id} label="rigs" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <td
                    colSpan={10}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No rigs assigned to this user.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* --- Edit Modal --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Rig: {selectedRig?.rigName}</DialogTitle>
            <DialogDescription>
              Update performance and component data for this mining rig.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="rigName" className="text-sm font-medium">
                Rig Name
              </label>
              <Input
                id="rigName"
                type="text"
                name="rigName"
                value={modalFormData?.rigName}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gpu" className="text-sm font-medium">
                GPU
              </label>
              <Input
                id="gpu"
                type="text"
                name="gpu"
                value={modalFormData?.gpu}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="efficiency" className="text-sm font-medium">
                Efficiency
              </label>
              <Input
                id="efficiency"
                type="number"
                name="efficiency"
                value={modalFormData.efficiency}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="proficiency" className="text-sm font-medium">
                Proficiency
              </label>
              <Input
                id="proficiency"
                type="number"
                name="proficiency"
                value={modalFormData.proficiency}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="power" className="text-sm font-medium">
                Power
              </label>
              <Input
                id="power"
                type="text"
                name="power"
                value={modalFormData?.power}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="temp" className="text-sm font-medium">
                Temp
              </label>
              <Input
                id="temp"
                type="text"
                name="temp"
                value={modalFormData?.temp}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fan" className="text-sm font-medium">
                Fan
              </label>
              <Input
                id="fan"
                type="text"
                name="fan"
                value={modalFormData?.fan}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="load" className="text-sm font-medium">
                Load
              </label>
              <Input
                id="load"
                type="text"
                name="load"
                value={modalFormData?.load}
                onChange={handleChangeModal}
                disabled={isUpdating}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              disabled={isUpdating}
            >
              Close
            </Button>
            <Button onClick={handleUpdate} disabled={isUpdating}>
              {isUpdating ? (
                <>
                  <Icon
                    icon="lucide:loader-2"
                    className="mr-2 h-4 w-4 animate-spin"
                  />
                  Updating...
                </>
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </>
  );
};

export default RigsDisplay;
