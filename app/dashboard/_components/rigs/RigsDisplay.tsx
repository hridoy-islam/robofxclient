"use client";

import React, { useEffect, useState } from "react";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { DecodedToken, RigData } from "@/utils/interfaces";
import Cookies from "universal-cookie";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Pagination from "@/components/Pagination";

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  const [showStartAllButton, setShowStartAllButton] = useState(true);
  const [showPauseAllButton, setShowPauseAllButton] = useState(false);

  useEffect(() => {
    const storedShowStartAllButton = localStorage.getItem("showStartAllButton");
    const storedShowPauseAllButton = localStorage.getItem("showPauseAllButton");

    if (
      storedShowStartAllButton !== null &&
      storedShowPauseAllButton !== null
    ) {
      setShowStartAllButton(storedShowStartAllButton === "true");
      setShowPauseAllButton(storedShowPauseAllButton === "true");
    }
  }, []);

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
    onOpen();
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
    setModalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const modalFormattedData = {
      ...modalFormData,
      efficiency: Number(modalFormData?.efficiency),
      proficiency: Number(modalFormData?.proficiency),
    };

    try {
      const apiUrl = `/rigs/${selectedRig?._id}`; // Adjust the API endpoint accordingly
      // Make a PUT request to update the rig data
      const response = await Axios.patch(apiUrl, modalFormattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response?.data?.message);
      router.refresh();
      onOpenChange();
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("Error updating rig data:", error);
    }
  };

  return (
    <>
      <Card className="my-6">
        <CardHeader className="tableHeader">
          <h2>
            Rigs assinged to {rigs[0]?.userid?.personal_information?.firstName}{" "}
            {rigs[0]?.userid?.personal_information?.lastName ||
              rigs[0]?.userid?.email}
          </h2>{" "}
          <div className="flex justify-between">
            {showStartAllButton && (
              <Button onClick={handleStartAllRigs} className="bg-primaryLight">
                <Icon icon="ph:play-fill" /> Start All Rigs
              </Button>
            )}
            {showPauseAllButton && (
              <Button onClick={handlePauseAllRigs} className="bg-[#f9e5e5]">
                <Icon icon="solar:pause-bold" /> Stop All Rigs
              </Button>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Rig Name</th>
                <th>GPU</th>
                <th>Efficiency</th>
                <th>Proficiency</th>
                <th>Temp</th>
                <th>fan</th>
                <th>Load</th>
                <th>Power</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rigs?.map((rig, index) => (
                <tr key={index}>
                  <td>{rig?.rigName}</td>
                  <td>{rig?.gpu}</td>
                  <td>{rig?.efficiency}</td>
                  <td>{rig?.proficiency}</td>
                  <td>{rig?.temp}</td>
                  <td>{rig?.fan}</td>
                  <td>{rig?.load}</td>
                  <td>{rig?.power}</td>
                  <td>
                    <Chip
                      className="text-white uppercase"
                      color={rig?.status === "mining" ? "success" : "warning"}
                    >
                      {rig?.status === "mining" ? "mining" : "stopped"}
                    </Chip>{" "}
                  </td>

                  <td>
                    <Button
                      onClick={() => handleOpen(rig)}
                      className="bg-primary text-white text-md"
                    >
                      <Icon icon="uil:edit" className="text-lg" />
                      <span>Edit</span>
                    </Button>{" "}
                    {/* <ViewButton /> */}
                    <DeleteButton id={rig?._id} label="rigs" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>

        <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-2 gap-2 items-center">
                        <div>
                          <div className="flex flex-col">
                            <label htmlFor="rigName">Rig Name</label>
                            <input
                              type="text"
                              name="rigName"
                              className="roboinput"
                              value={modalFormData?.rigName}
                              onChange={handleChangeModal}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="gpu">GPU</label>
                            <input
                              type="text"
                              name="gpu"
                              className="roboinput"
                              value={modalFormData?.gpu}
                              onChange={handleChangeModal}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col">
                            <label htmlFor="efficiency">Efficiency</label>
                            <input
                              type="number"
                              name="efficiency"
                              className="roboinput"
                              value={modalFormData?.efficiency}
                              onChange={handleChangeModal}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="power">Power</label>
                            <input
                              type="text"
                              name="power"
                              className="roboinput"
                              value={modalFormData?.power}
                              onChange={handleChangeModal}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="temp">Temp</label>
                          <input
                            type="text"
                            name="temp"
                            className="roboinput"
                            value={modalFormData?.temp}
                            onChange={handleChangeModal}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="load">Fan</label>
                          <input
                            type="text"
                            name="fan"
                            className="roboinput"
                            value={modalFormData?.fan}
                            onChange={handleChangeModal}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="load">Load</label>
                          <input
                            type="text"
                            name="load"
                            className="roboinput"
                            value={modalFormData?.load}
                            onChange={handleChangeModal}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="proficiency">Proficiency</label>
                          <input
                            type="number"
                            name="proficiency"
                            className="roboinput"
                            value={modalFormData.proficiency}
                            onChange={handleChangeModal}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={handleUpdate}
                    color="primary"
                    onPress={onClose}
                    className="text-white"
                  >
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>

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
