import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
export default function page(){
    return<>
    <Card>
      <CardHeader>
        <h2>Add New User</h2>
      </CardHeader>
      <CardBody className="border border-t border-stroke">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="roboinput"
              // {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="roboinput"
              id=""
              // {...register("password", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-6">
          <Button className="bg-primary text-white cursor-pointer">
            Create
          </Button>
        </div>
      </CardBody>
    </Card>
    </>
}