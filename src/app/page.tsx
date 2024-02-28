import SignButtons from "@/components/sign-buttons";
import { authOptions } from "@/lib/next-auth/next-auth-options";
import { getServerSession } from "next-auth";
import React from "react";

const Auth = async () => {
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <SignButtons session={session} />
    </div>
  );
};

export default Auth;
