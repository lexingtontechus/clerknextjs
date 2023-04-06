import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex col-auto 90vw justify-center uppercase text-center container mx-auto p-8">
    <SignUp
      appearance={{
        elements: {
          colorBackground: "bg-primary-900",
          colorTextOnPrimaryBackground: "text-primary-900",
          colorTextSecondary: "text-primary-900",
          colorBackground: "bg-primary-500",
          colorInputText: "text-primary-900",
          colorInputBackground: "bg-primary-500",
          formButtonPrimary:
            "bg-secondary-500 hover:bg-secondary-400 text-sm normal-case uppercase",
        },
      }}
    />
  </div>
);

export default SignUpPage;
