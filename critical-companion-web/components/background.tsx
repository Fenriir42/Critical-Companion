import type { NextPage } from "next";
import { useCallback } from "react";

const Background: NextPage = () => {
  const onLinkEsrbpngClick = useCallback(() => {
    window.open("https://www.esrb.org/EPCConfirm/916/");
  }, []);

  return (
    <div className="w-full bg-wwwdndbeyondcom-black flex flex-row items-center justify-center pt-3.5 px-[16.5px] pb-4 box-border gap-[134px] max-w-[1440px] text-left text-xs text-wwwdndbeyondcom-hit-gray font-wwwdndbeyondcom-roboto-regular-13 mq825:gap-[33px] mq1575:flex-wrap mq1575:justify-start mq1575:max-w-full mq1575:w-[calc(100%_-_40px)] mq450:gap-[17px] mq1250:gap-[67px]">
      <div className="w-[946px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[4px] max-w-[946px] shrink-0 mq1250:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[21px] uppercase">
            © 2017-2024 Wizards of the Coast LLC | All Rights Reserved
          </b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[21px]">
            <p className="m-0">{`Dungeons & Dragons, D&D Beyond, D&D, Wizards of the Coast, the dragon ampersand, and all other Wizards of the Coast product names, campaign settings, their`}</p>
            <p className="m-0">
              respective logos, and The World's Greatest Roleplaying Game are ©
              and trademark Wizards of the Coast in the U.S.A. and other
              countries. © 2024 Wizards.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start p-5">
        <a
          className="relative leading-[21px] uppercase font-bold text-[inherit] inline-block [text-decoration:none] min-w-[94px] whitespace-nowrap"
          href="https://company.wizards.com/en/legal/wizards-coasts-privacy-policy"
          target="_blank"
        >
          Privacy Policy
        </a>
      </div>
      <div className="w-[44.2px] flex flex-col items-start justify-start p-5 box-border shrink-0">
        <a
          className="w-[109px] relative leading-[21px] uppercase font-bold text-[inherit] flex items-center [text-decoration:none]"
          href="https://www.dndbeyond.com/terms-conditions"
          target="_blank"
        >
          Terms of Service
        </a>
      </div>
      <div className="h-[63px] w-[41px] flex flex-col items-start justify-start pt-0 px-5 pb-[7px] box-border shrink-0">
        <img
          className="w-[42px] flex-1 relative max-h-full overflow-hidden object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/link--esrbpng@2x.png"
          onClick={onLinkEsrbpngClick}
        />
      </div>
    </div>
  );
};

export default Background;
