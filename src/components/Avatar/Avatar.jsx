import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import toast from "react-hot-toast";

export default function UserAvatar({ user }) {
  const handelSignOut = async () => {
    await authClient.signOut();
    toast.success("Sign Out Successful")
  }

  return (
    <div className="flex gap-4">
      <Avatar>
        <Avatar.Image
          alt={user.name}
          src={user?.image}
          referrerPolicy="no-referrer"
        />
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      <Button onClick={()=>handelSignOut()} variant="outline" className="text-black" >Sign Out</Button>
    </div>
  );
}
