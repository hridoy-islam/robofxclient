import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
export default function EditButton() {
  return (
    <Button className="bg-primary text-white text-md">
      <Icon icon="uil:edit" className="text-lg" />
      <span>Edit</span>
    </Button>
  );
}
