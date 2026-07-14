"use client";

import { authClient } from "@/lib/auth-client";

import {
  Person,
  Envelope,
  CircleCheckFill,
  Calendar,
  Pencil,
} from "@gravity-ui/icons";
import { Avatar, Button, Card, CardBody, Chip } from "@heroui/react";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        Loading...
      </div>
    );
  }

  const user = data?.user;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Card className="border shadow-lg rounded-3xl">
        <div className="p-0">
          {/* Cover */}
          <div className="h-44 bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-t-3xl"></div>

          {/* Avatar */}
          <div className="-mt-16 px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex items-end gap-5">
              <Avatar className="w-32 h-32 text-4xl border-4 border-white shadow-xl">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <div className="pb-3">
                <h1 className="text-3xl font-bold">{user?.name}</h1>

                <p className="text-default-500">{user?.email}</p>

                <Chip
                  color={user?.emailVerified ? "success" : "warning"}
                  variant="flat"
                  className="mt-3"
                >
                  {user?.emailVerified
                    ? "Verified Account"
                    : "Email Not Verified"}
                </Chip>
              </div>
            </div>

            <Button color="primary" variant="flat" startContent={<Pencil />}>
              Edit Profile
            </Button>
          </div>

          <div className="h-px bg-default-200 w-full" />

          {/* Info Cards */}

          <div className="grid md:grid-cols-2 gap-6 p-8">
            <Card shadow="none" className="border">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Person className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-default-500 text-sm">Full Name</p>

                    <h3 className="font-semibold">{user?.name}</h3>
                  </div>
                </div>

                <div className="h-px bg-default-200 w-full" />

                <div className="flex items-center gap-3">
                  <Envelope className="w-5 h-5 text-primary" />

                  <div>
                    <p className="text-default-500 text-sm">Email Address</p>

                    <h3 className="font-semibold">{user?.email}</h3>
                  </div>
                </div>

                <div className="h-px bg-default-200 w-full" />

                <div className="flex items-center gap-3">
                  <CircleCheckFill className="w-5 h-5 text-success" />

                  <div>
                    <p className="text-default-500 text-sm">
                      Email Verification
                    </p>

                    <h3 className="font-semibold">
                      {user?.emailVerified ? "Verified" : "Not Verified"}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>

            <Card shadow="none" className="border">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />

                  <div>
                    <p className="text-default-500 text-sm">Joined On</p>

                    <h3 className="font-semibold">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-default-200 w-full" />

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />

                  <div>
                    <p className="text-default-500 text-sm">Last Updated</p>

                    <h3 className="font-semibold">
                      {new Date(user?.updatedAt).toLocaleDateString()}
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-default-200 w-full" />

                <div>
                  <p className="text-default-500 text-sm">User ID</p>

                  <p className="font-mono text-xs break-all mt-1">{user?.id}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
