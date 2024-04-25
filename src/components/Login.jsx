import { signIn } from "@junobuild/core";
import { Button } from "./Button";

export const Login = () => {
  return (
    <>
      <h1 className="dark:text-white text-6xl md:text-6xl font-black tracking-tight md:pt-24">
        DeCert
      </h1>
      <p className="dark:text-white py-4 md:max-w-lg text-xl">
        Store And Access Your Documents And Certificates <br></br>
        Securely And Efficiently On The ICP Network
      </p>
      <Button onClick={signIn}>Sign in</Button>;
    </>
  );
};
