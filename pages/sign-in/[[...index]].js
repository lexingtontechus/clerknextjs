import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex col-auto 90vw justify-center uppercase text-center container mx-auto p-8">
    <SignIn
      appearance={{
        elements: {
          colorTextOnPrimaryBackground: "#1c1917", //#1c1917
          colorTextSecondary: "#1c1917",
          colorBackground: "#1c1917",
          colorInputText: "#1c1917",
          colorInputBackground: "#1c1917",
          formButtonPrimary:
            "bg-secondary-500 hover:bg-secondary-400 text-sm normal-case uppercase",
        },
      }}
    />
  </div>
);

export default SignInPage;
