import BackgroundXO from "@/components/common/back";
import NavBar from "@/components/common/Nav";
import Hero from "@/components/hero";
import HomePage from "@/components/home/home";
import Leader from "@/components/home/leader";
import Meteors from "@/components/magicui/meteors";
// import Profile from "@/components/profile/adel";
import Profile from "@/components/profile/profile";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <NavBar absoluteLago={true} />
      <div className="h-[100vh] bg-gradient-to-r from-blue-500 to-purple-700 block">dsfsdklkfnkl</div>
      {/* <BackgroundXO/> */}
      {/* <Meteors/> */}
      {/* <Leader/> */}
      <Profile/>
      {/* <Component/> */}
      {/* <HomePage/> */}
    </>
  );
}
