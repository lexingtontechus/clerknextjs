"use client";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

//import { useState } from "react";
import Head from "next/head";
import "../styles/index.css";
import "../styles/globals.css";
import Layout from "../components/layout";

const clerkpubkey = "pk_test_d29ydGh5LXNlYWwtMTAuY2xlcmsuYWNjb3VudHMuZGV2JA"; //process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const openGraphImage = {
  images: [
    "https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/logo_lxtgroup_circle.svg",
  ],
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        variables: {
          colorPrimary: "#2dd4bf",
          colorText: "#fafaf9",
          colorInputText: "#1c1917",
        },
        baseTheme: dark,
        layout: {
          helpPageUrl: "/support",
          logoImageUrl:
            "https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/logo_lxtgroup_circle.svg",
          logoPlacement: "inside",
          privacyPageUrl: "/privacy",
          showOptionalFields: true,
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "/terms",
        },
      }}
    >
      <Head>
        <title>Clerk + Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};
export default MyApp;
