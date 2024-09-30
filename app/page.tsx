import BackgroundXO from "@/components/common/back";
import { FocusCardsDemo } from "@/components/common/cards";
import EmojiConfetti from "@/components/common/click";
import { CompareDemo } from "@/components/common/compare";
import Footer from "@/components/common/footer";
import Leaderboard from "@/components/common/leaderboard";
import NavBar from "@/components/common/Nav";
import { TextGenerateEffectDemo } from "@/components/common/nezs";
import GamifiedProgressBar from "@/components/common/pro";
import Hero from "@/components/hero";
import HomePage from "@/components/home/home";
import DopingImpact from "@/components/home/impacts";
import AthleteToolkit from "@/components/home/info";
import { CoverDemo } from "@/components/home/landing";
import Leader from "@/components/home/leader";
import NewsSection from "@/components/home/news";
import TestimonialCarousel from "@/components/home/test";
import Meteors from "@/components/magicui/meteors";
// import Profile from "@/components/profile/adel";
import Profile from "@/components/profile/profile";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Compare } from "@/components/ui/compare";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";
// bg-gradient-to-r from-blue-500 to-purple-700 block
// bg-opacity-40 backdrop-filter backdrop-blur-sm bg-black
export default async function Index() {
  return (
    <>
      <NavBar absoluteLago={true} />
      <div className="h-[100vh] ">
      <Image
      src="/bg.jpg"
      width={1600}
      height={637}
      alt="Picture of the author"
      className="w-full h-[100vh] absolute"
    />
    <div className="absolute left-[10vw] top-[20vw] text-white">
    <CoverDemo/>
    </div>
    
      </div>
      <TestimonialCarousel/>
      {/* <BackgroundXO/> */}
      {/* <Meteors/> */}
      {/* <Leader/> */}
      <Profile/>
      <GamifiedProgressBar progress={50}/>
      <Leaderboard/>
      
      {/* <div className="w-full h-[10vw] flex justify-center">
      <EmojiConfetti/>
      </div> */}
      <AthleteToolkit/>
      <NewsSection/>
      <CompareDemo/>
      
      {/* <TextGenerateEffectDemo/> */}
      <Footer/>
      {/* <DopingImpact/> */}
      {/* <FocusCardsDemo/> */}
      
      {/* <Component/> */}
      {/* <HomePage/> */}
    </>
  );
}
