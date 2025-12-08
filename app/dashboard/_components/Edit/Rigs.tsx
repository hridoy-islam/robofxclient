"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react";
import Cookies from "universal-cookie";
import { RigData } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import DeleteButton from "@/components/DeleteButton";
import Axios from "@/utils/axios";

interface RigsProps {
  id: string;
  rigs: RigData[];
}

const Rigs = ({ id, rigs }: RigsProps) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const router = useRouter();

  const [rigData, setRigData] = useState({
    rigName: "",
    efficiency: 0,
    gpu: "",
    power: "",
    temp: "",
    load: "",
    fan: "",
    proficiency: 0,
    quantity: 1,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRig, setSelectedRig] = useState<RigData | null>(null);
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

  const [showStartAllButton, setShowStartAllButton] = useState(true);
  const [showPauseAllButton, setShowPauseAllButton] = useState(false);

  useEffect(() => {
    const storedStart = localStorage.getItem("showStartAllButton");
    const storedPause = localStorage.getItem("showPauseAllButton");
    if (storedStart !== null && storedPause !== null) {
      setShowStartAllButton(storedStart === "true");
      setShowPauseAllButton(storedPause === "true");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRigData((prev) => ({
      ...prev,
      [name]: name.includes("efficiency") || name.includes("proficiency") || name === "quantity"
        ? Number(value) || 0
        : value,
    }));
  };

  const handleChangeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModalFormData((prev) => ({
      ...prev,
      [name]: name.includes("efficiency") || name.includes("proficiency")
        ? Number(value) || 0
        : value,
    }));
  };

  const saveData = async () => {
    try {
      const formattedData = {
        userid: id,
        ...rigData,
        efficiency: Number(rigData.efficiency),
        proficiency: Number(rigData.proficiency),
        quantity: Number(rigData.quantity),
      };

      const response = await Axios.post("/rigs", formattedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(response.data.message || "Rig saved successfully!");
      router.refresh();
      setRigData({
        rigName: "",
        efficiency: 0,
        gpu: "",
        power: "",
        temp: "",
        load: "",
        fan: "",
        proficiency: 0,
        quantity: 1,
      });
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Failed to save rig.");
    }
  };

  const handleStartAllRigs = async () => {
    try {
      const response = await Axios.post(`/history/startall/${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setShowStartAllButton(false);
        setShowPauseAllButton(true);
        localStorage.setItem("showStartAllButton", "false");
        localStorage.setItem("showPauseAllButton", "true");
        toast.success(response.data.message);
        router.refresh();
      }
    } catch (error) {
      console.error("Start all error:", error);
      toast.error("Failed to start all rigs.");
    }
  };

  const handlePauseAllRigs = async () => {
    try {
      const response = await Axios.post(`/history/pauseall/${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setShowStartAllButton(true);
        setShowPauseAllButton(false);
        localStorage.setItem("showStartAllButton", "true");
        localStorage.setItem("showPauseAllButton", "false");
        toast.success(response.data.message);
        router.refresh();
      }
    } catch (error) {
      console.error("Pause all error:", error);
      toast.error("Failed to pause all rigs.");
    }
  };

  const handleOpen = (rig: RigData) => {
    setSelectedRig(rig);
    setModalFormData({
      rigName: rig.rigName || "",
      efficiency: rig.efficiency || 0,
      gpu: rig.gpu || "",
      power: rig.power || "",
      temp: rig.temp || "",
      load: rig.load || "",
      fan: rig.fan || "",
      proficiency: rig.proficiency || 0,
    });
    setModalOpen(true);
  };

  const handleUpdate = async () => {
    if (!selectedRig?._id) return;

    try {
      const formattedData = {
        ...modalFormData,
        efficiency: Number(modalFormData.efficiency),
        proficiency: Number(modalFormData.proficiency),
      };

      const response = await Axios.patch(`/rigs/${selectedRig._id}`, formattedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success(response.data.message || "Rig updated successfully!");
      router.refresh();
      setModalOpen(false);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update rig.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Rig Card */}
      <Card className="border">
        <CardHeader>
          <CardTitle>Assign New Rig</CardTitle>
          <CardDescription>Add a new mining rig for this user.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="rigName">Rig Name</label>
              <Input
                id="rigName"
                name="rigName"
                value={rigData.rigName}
                onChange={handleChange}
                placeholder="e.g., Rig-01"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gpu">GPU</label>
              <Input
                id="gpu"
                name="gpu"
                value={rigData.gpu}
                onChange={handleChange}
                placeholder="e.g., RTX 4090"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="efficiency">Efficiency (MH/s)</label>
              <Input
                id="efficiency"
                name="efficiency"
                type="number"
                value={rigData.efficiency || ""}
                onChange={handleChange}
                placeholder="e.g., 120"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="proficiency">Proficiency (%)</label>
              <Input
                id="proficiency"
                name="proficiency"
                type="number"
                value={rigData.proficiency || ""}
                onChange={handleChange}
                placeholder="e.g., 95"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="quantity">Quantity</label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                value={rigData.quantity || ""}
                onChange={handleChange}
                placeholder="e.g., 3"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="power">Power (W)</label>
              <Input
                id="power"
                name="power"
                value={rigData.power}
                onChange={handleChange}
                placeholder="e.g., 350W"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="temp">Temp (°C)</label>
              <Input
                id="temp"
                name="temp"
                value={rigData.temp}
                onChange={handleChange}
                placeholder="e.g., 68°C"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fan">Fan Speed (%)</label>
              <Input
                id="fan"
                name="fan"
                value={rigData.fan}
                onChange={handleChange}
                placeholder="e.g., 75%"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="load">Load (%)</label>
              <Input
                id="load"
                name="load"
                value={rigData.load}
                onChange={handleChange}
                placeholder="e.g., 92%"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() =>
              setRigData({
                rigName: "",
                efficiency: 0,
                gpu: "",
                power: "",
                temp: "",
                load: "",
                fan: "",
                proficiency: 0,
                quantity: 1,
              })
            }
          >
            Reset
          </Button>
          <Button onClick={saveData} className="bg-primary text-white">
            Save Rig
          </Button>
        </CardFooter>
      </Card>

      {/* Rigs List */}
      {rigs?.length > 0 ? (
        <Card className="border">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>
                Rigs Assigned to{" "}
                {rigs[0]?.userid?.personal_information?.firstName}{" "}
                {rigs[0]?.userid?.personal_information?.lastName}
              </CardTitle>
              <CardDescription>{rigs.length} rig(s) configured</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              {showStartAllButton && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleStartAllRigs}
                  className="flex items-center gap-1"
                >
                  <Icon icon="ph:play-fill" className="text-base" />
                  Start All Rigs
                </Button>
              )}
              {showPauseAllButton && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handlePauseAllRigs}
                  className="flex items-center gap-1"
                >
                  <Icon icon="solar:pause-bold" className="text-base" />
                  Pause All Rigs
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/dashboard/admin/user/${id}/rigs`)}
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rig Name</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">GPU</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Efficiency</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Proficiency</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Temp</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fan</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Power</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Load</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rigs.map((rig) => (
                    <tr key={rig._id} className="border-b hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">{rig.rigName}</td>
                      <td className="px-4 py-3">{rig.gpu}</td>
                      <td className="px-4 py-3">{rig.efficiency} MH/s</td>
                      <td className="px-4 py-3">{rig.proficiency}%</td>
                      <td className="px-4 py-3">{rig.temp}</td>
                      <td className="px-4 py-3">{rig.fan}</td>
                      <td className="px-4 py-3">{rig.power}</td>
                      <td className="px-4 py-3">{rig.load}</td>
                      <td className="px-4 py-3">
                        <div
                          className={`p-2 ${
                            rig.status === "mining"
                              ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                              : "bg-orange-100 text-orange-800 border-orange-300"
                          }`}
                        >
                          {rig.status === "mining" ? "Mining" : "Stopped"}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1 justify-end">
                          <Button
                            className=""
                            onClick={() => handleOpen(rig)}
                          >
                            <Icon icon="uil:edit" className="text-lg" />
                            Edit
                          </Button>
                          <DeleteButton id={rig._id} label="rigs" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border border-dashed">
          <CardContent className="py-12 text-center">
            <Icon
              icon="ph:computer-tower-light"
              className="mx-auto h-12 w-12 text-muted-foreground mb-3"
            />
            <p className="text-muted-foreground">No rigs assigned yet.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Add a rig above to get started.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Edit Rig Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Rig</DialogTitle>
            <CardDescription>Update rig specifications and performance metrics.</CardDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <label htmlFor="modal-rigName">Rig Name</label>
              <Input
                id="modal-rigName"
                name="rigName"
                value={modalFormData.rigName}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-gpu">GPU</label>
              <Input
                id="modal-gpu"
                name="gpu"
                value={modalFormData.gpu}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-efficiency">Efficiency (MH/s)</label>
              <Input
                id="modal-efficiency"
                name="efficiency"
                type="number"
                value={modalFormData.efficiency || ""}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-proficiency">Proficiency (%)</label>
              <Input
                id="modal-proficiency"
                name="proficiency"
                type="number"
                value={modalFormData.proficiency || ""}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-power">Power</label>
              <Input
                id="modal-power"
                name="power"
                value={modalFormData.power}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-temp">Temp</label>
              <Input
                id="modal-temp"
                name="temp"
                value={modalFormData.temp}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-fan">Fan Speed</label>
              <Input
                id="modal-fan"
                name="fan"
                value={modalFormData.fan}
                onChange={handleChangeModal}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="modal-load">Load</label>
              <Input
                id="modal-load"
                name="load"
                value={modalFormData.load}
                onChange={handleChangeModal}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleUpdate} className="bg-primary text-white">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rigs;