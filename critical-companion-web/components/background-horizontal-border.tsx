import { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { APIReq } from "../api/APIReq"

const Header: NextPage = () => {
  const isLoggedIn = !!APIReq.getAccessToken();

  const handleLogout = useCallback(() => {
    APIReq.removeAccessToken();
    // Add any additional logout logic here
  }, []);

  return (
    <header className="self-stretch bg-wwwdndbeyondcom-cod-gray box-border flex flex-col items-center justify-start py-0 px-0 max-w-full text-left text-lg text-wwwdndbeyondcom-manatee font-wwwdndbeyondcom-roboto-regular-13 border-b-[1px] border-solid border-wwwdndbeyondcom-monza">
      <div className="w-full h-16 flex flex-row items-center justify-between py-0 px-0 box-border max-w-[1200px] mq1250:max-w-full">
        <div className="flex items-center">
          {/* Add other components on the left side if needed */}
        </div>
        <div className="flex items-center ml-auto mr-0">
          {isLoggedIn ? (
            <div onClick={handleLogout} className="text-white hover:text-gray-300 cursor-pointer text-sm">Logout</div>
          ) : (
            <>
              <Link href="/login">
                <div className="mr-4 text-white hover:text-gray-300 cursor-pointer text-sm">Login</div>
              </Link>
              <Link href="/register">
                <div className="text-white hover:text-gray-300 cursor-pointer text-sm">Register</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
