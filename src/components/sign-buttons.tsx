"use client";

import { signOut, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SignButtons = ({ session }: { session: any }) => {
  const signInHandeler = () => signIn("google");
  const signOutHandeler = () => signOut();

  //   console.log(session);

  const content = session ? (
    <div>
      Signed in as {session.user?.name}
      <br />
      <Image
        src={session.user?.image}
        width={40}
        height={40}
        alt="profile-picture"
        style={{
          borderRadius: "100px",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      />
      <button style={{ padding: "10px" }} onClick={signOutHandeler}>
        Sign out
      </button>
    </div>
  ) : (
    <div>
      Not signed in <br />
      <button style={{ padding: "10px" }} onClick={signInHandeler}>
        Sign in
      </button>
    </div>
  );

  return content;
};

export default SignButtons;
