'use client'
import fapp from "./firebase";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(fapp);

export default function SignOutButton(): JSX.Element {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "/signin";
    } catch (error: any) {
      console.error("Error signing out:", error);
    }
  };

  return <button className="bg-red-500 hover:bg-red- p-2 rounded-lg text-white" onClick={handleSignOut}>Sign Out</button>;
}
