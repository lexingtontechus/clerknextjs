import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex col-auto 90vw justify-center uppercase text-center container mx-auto p-8">
    <UserProfile path="/user" routing="path" />;
  </div>
);
export default UserProfilePage;
