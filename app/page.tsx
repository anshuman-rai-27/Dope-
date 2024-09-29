import BackgroundXO from "@/components/common/back";
import { FocusCardsDemo } from "@/components/common/cards";
import EmojiConfetti from "@/components/common/click";
import { CompareDemo } from "@/components/common/compare";
import NavBar from "@/components/common/Nav";
import Hero from "@/components/hero";
import HomePage from "@/components/home/home";
import DopingImpact from "@/components/home/impacts";
import Leader from "@/components/home/leader";
import TestimonialCarousel from "@/components/home/test";
import Meteors from "@/components/magicui/meteors";
// import Profile from "@/components/profile/adel";
import Profile from "@/components/profile/profile";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Compare } from "@/components/ui/compare";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <NavBar absoluteLago={true} />
      <div className="h-[100vh] bg-gradient-to-r from-blue-500 to-purple-700 block">dsfsdklkfnkl</div>
      <TestimonialCarousel/>
      {/* <BackgroundXO/> */}
      {/* <Meteors/> */}
      {/* <Leader/> */}
      <Profile/>
      
      <div className="w-full h-[10vw] flex justify-center">
      <EmojiConfetti/>
      </div>
      <CompareDemo/>
      {/* <DopingImpact/> */}
      {/* <FocusCardsDemo/> */}
      
      {/* <Component/> */}
      {/* <HomePage/> */}
    </>
  );
}
