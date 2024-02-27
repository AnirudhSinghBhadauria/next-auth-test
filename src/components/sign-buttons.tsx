"use client";

import { signOut, signIn } from "next-auth/react";
import React from "react";

const SignButtons = ({ session }: { session: any }) => {
  const signInHandeler = () => signIn("google");
  const signOutHandeler = () => signOut();

  const content = session ? (
    <div>
      Signed in as {session.user?.name}
      <br />
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
