import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px]">
    <SignIn />
  </div>;
}