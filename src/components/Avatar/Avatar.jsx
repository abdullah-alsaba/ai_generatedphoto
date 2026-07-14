import { Avatar } from "@heroui/react";

export default function UserAvatar({ user }) {
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
    </div>
  );
}
