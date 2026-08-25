import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let Profile = () => {
  let navigateTo = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const getCurrentUser = async () => {
    const token = localStorage.getItem("token");

    let response = await axios.get("https://markd-5jlq.onrender.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let userName = response.data.data.name;
    let email = response.data.data.email;

    setUserName(userName);
    setEmail(email);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-deep border-dark border-2 h-8 w-8 md:h-10 md:w-10 rounded-full font-[bricolage] flex items-center justify-center text-surface overflow-hidden text-base md:text-lg select-none cursor-pointer"
      >
        <h1>{userName.charAt(0).toLowerCase()}</h1>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 md:top-14 w-60 rounded-md bg-surface border-2 border-light shadow-xl p-2 z-50">
          <div className="px-3 py-3">
            <div className="flex items-center gap-3">
              <div className="bg-deep h-10 w-10 md:h-12 md:w-12 text-md md:text-xl rounded-full flex items-center justify-center text-surface font-[bricolage] shrink-0">
                {userName.charAt(0).toLowerCase()}
              </div>

              <div className="min-w-0">
                <p className="font-[bricolage] text-sm md:text-base font-medium text-deep truncate">
                  {userName[0].toUpperCase() + userName.slice(1).toLowerCase()}
                </p>

                <p className="font-[coolvetica] text-xs md:text-sm text-deep/50 truncate">
                  {email}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-deep/10 mx-2" />

          <button
            className="bg-red-700 text-surface rounded font-[bricolage] text-xs w-full mt-2 py-2 px-4 md:text-sm cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              navigateTo("/login");
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
