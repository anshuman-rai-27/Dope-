
// import 'ionicons/dist/css/ionicons.min.css';


const Profile: React.FC = () => {
    return (
    <div className="container  flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-[#AA33AA] text-white p-2 mb-4">My Profile</div>
        <div className=" p-4">
          <div className="bg-[#AA33AA] w-12 h-12 flex items-center justify-center mb-4"><ion-icon size="large" name="pause"></ion-icon></div>
          <div className="text-black font-bold mb-2">lol lol</div>
          <div className="text-black mb-2">gohak27790@aiworldx.com</div>
          <div className="text-black mb-2">Country: India</div>
          <div className="text-black mb-2">Sport: Aesthetic Group Gymnastics</div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-[#AA33AA]">CHANGE PASSWORD</button>
          <button className="text-[#AA33AA]">MY ACTIVITIES</button>
          <button className="text-[#AA33AA]">MY PROFILE</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-[#AA33AA] text-white p-2 mb-4">Leaderboard</div>
        <div className="border border-gray-300 p-4 mb-4">
          <div className="text-black mb-2">Your last awarded badges</div>
          <div className="flex items-center">
            <div className="bg-[#F0E68C] w-12 h-12 flex items-center justify-center relative">
              <ion-icon name="trophy" size="large"></ion-icon>
              <div className="absolute top-[-10px] right-[-10px] bg-black text-white px-1 rounded-sm text-xs">50</div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mb-4 flex justify-between">
          <div className="flex items-center">
            <ion-icon name="star" size="small" color="danger"></ion-icon>
            <div className="ml-2">
              <div className="text-black">1</div>
              <div className="text-[#AA33AA] text-sm">My awarded badges</div>
            </div>
          </div>
          <div className="flex items-center">
            <ion-icon name="star" size="small" color="warning"></ion-icon>
            <div className="ml-2">
              <div className="text-black">50</div>
              <div className="text-[#AA33AA] text-sm">My total poin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
    }
    
    export default Profile;