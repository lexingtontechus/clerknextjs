"use client";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignInWithMetamaskButton,
} from "@clerk/nextjs";
//import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const logoImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Header = () => (
  <header
    style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
  >
    <Image
      loader={logoImage}
      alt="LXT GROUP LLC"
      height="40"
      width="40"
      className="max-w-full rounded-lg inline-block text-primary-100"
      src="logo_lxtgroup_circle.svg"
    />
    <span className="text-lg font-bold text-primary-100">LXT GROUP LLC</span>

    <SignedIn>
      {/* Mount the UserButton component */}
      <UserButton
        userProfileMode="navigation"
        userProfileUrl="/user"
        afterSignOutUrl="/"
        afterMultiSessionSingleSignOutUrl="/"
      />
    </SignedIn>

    <SignedOut>
      <Link
        href="/sign-in"
        className="uppercase rounded-md p-2 border border-2 border-secondary-400 font-semibold text-primary-100 hover:bg-secondary-400"
      >
        Sign in
      </Link>
    </SignedOut>
    
    <SignInButton
      mode="modal"
      afterSignInUrl="/user"
      afterSignUpUrl="/user"
    >
      <button className="btn uppercase rounded-md p-2 border border-2 border-secondary-400 font-semibold text-primary-100">
        Modal Sign in
      </button>
    </SignInButton>
  </header>
);

export default Header;
