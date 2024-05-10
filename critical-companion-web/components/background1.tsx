import type { NextPage } from "next";
import { useCallback } from "react";

const Background1: NextPage = () => {
  const onLinkLogo178pngClick = useCallback(() => {
    window.open("https://www.dndbeyond.com/");
  }, []);

  const onItemLinkFacebookpngClick = useCallback(() => {
    window.open("https://www.facebook.com/dndbeyond");
  }, []);

  const onItemLinkInstagrampngClick = useCallback(() => {
    // Please sync "www.dndbeyond.com by html.to.design ❤️ FREE version - 10/05/2024, 18:22:01 CEST" to the project
  }, []);

  const onItemLinkDiscordpngClick = useCallback(() => {
    window.open("https://dndbeyond.com/discord");
  }, []);

  const onItemLinkTwitchpngClick = useCallback(() => {
    window.open("https://www.twitch.tv/dndbeyond");
  }, []);

  const onItemLinkXpngClick = useCallback(() => {
    window.open("https://twitter.com/dndbeyond");
  }, []);

  const onItemLinkYoutubepngClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCPy-338BEVgDkQade0qJmkw");
  }, []);

  const onLinkGooglePlaypngClick = useCallback(() => {
    window.open("https://play.google.com/store/apps/details");
  }, []);

  const onLinkAppStorepngClick = useCallback(() => {
    window.open("https://apps.apple.com/us/app/d-d-beyond/id1501810129");
  }, []);

  return (
    <div className="self-stretch bg-wwwdndbeyondcom-shark flex flex-col items-center justify-start pt-0 px-0 pb-3 box-border min-h-[265px] text-left text-xs text-wwwdndbeyondcom-hit-gray font-wwwdndbeyondcom-roboto-regular-13">
      <div className="w-full flex flex-row items-start justify-between py-16 pr-[245.9px] pl-12 box-border max-w-[1440px] gap-[20px] mq825:pr-[61px] mq825:box-border mq1575:flex-wrap mq1575:justify-center mq1575:max-w-full mq450:pr-5 mq450:box-border mq1250:pl-6 mq1250:pr-[123px] mq1250:box-border">
        <div className="h-[142px] w-[178px] flex flex-col items-start justify-start">
          <img
            className="self-stretch h-[57px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/link--logo178png@2x.png"
            onClick={onLinkLogo178pngClick}
          />
        </div>
        <div className="w-[174.3px] flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[21px] uppercase">
              Support
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-mini text-wwwdndbeyondcom-nero">
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch relative leading-[21px] text-[inherit] [text-decoration:none]"
                href="https://dndbeyond-support.wizards.com/"
                target="_blank"
              >
                Help Portal
              </a>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch relative leading-[21px] text-[inherit] [text-decoration:none]"
                href="https://www.dndbeyond.com/forums/d-d-beyond-general/bugs-support"
                target="_blank"
              >
                Support Forum
              </a>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch h-[42px] relative leading-[21px] text-[inherit] flex items-center [text-decoration:none]"
                href="https://company.wizards.com/en/legal/wizards-coasts-privacy-policy#donotsell"
                target="_blank"
              >
                Don't Sell or Share My Info
              </a>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch relative leading-[21px] text-[inherit] [text-decoration:none]"
                href="https://www.dndbeyond.com/cookies"
                target="_blank"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
        <div className="w-[138.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border gap-[4px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[21px] uppercase">
              About
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-mini text-wwwdndbeyondcom-nero">
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch relative leading-[21px] text-[inherit] [text-decoration:none]"
                href="https://dndbeyond.zendesk.com/hc/en-us/articles/360055233654-Contact-Information"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch relative leading-[21px] text-[inherit] [text-decoration:none]"
                href="https://company.wizards.com/en/careers"
                target="_blank"
              >
                Careers
              </a>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <a
                className="self-stretch h-[42px] relative leading-[21px] text-[inherit] flex items-center [text-decoration:none]"
                href="https://company.wizards.com/"
                target="_blank"
              >
                Wizards of the Coast
              </a>
            </div>
          </div>
        </div>
        <div className="w-[264px] flex flex-col items-start justify-start pt-0 px-0 pb-[65px] box-border gap-[14px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[21px] uppercase">
              Find us on Socials
            </b>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start py-0 pr-1 pl-0">
            <div className="w-12 flex flex-col items-start justify-start pt-0 pb-4 pr-6 pl-0 box-border">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 object-contain cursor-pointer"
                loading="lazy"
                alt=""
                src="/item--link--facebookpng@2x.png"
                onClick={onItemLinkFacebookpngClick}
              />
            </div>
            <div className="w-12 flex flex-col items-start justify-start pt-0 pb-4 pr-6 pl-0 box-border ml-[-0.8px]">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 object-contain cursor-pointer"
                loading="lazy"
                alt=""
                src="/item--link--instagrampng@2x.png"
                onClick={onItemLinkInstagrampngClick}
              />
            </div>
            <div className="w-12 flex flex-col items-start justify-start pt-0 pb-4 pr-6 pl-0 box-border ml-[-0.8px]">
              <img
                className="w-6 h-[26px] relative overflow-hidden shrink-0 object-contain cursor-pointer"
                loading="lazy"
                alt=""
                src="/item--link--discordpng@2x.png"
                onClick={onItemLinkDiscordpngClick}
              />
            </div>
            <div className="w-12 flex flex-col items-start justify-start pt-0 pb-4 pr-6 pl-0 box-border ml-[-0.8px]">
              <img
                className="w-6 h-[26px] relative overflow-hidden shrink-0 object-contain cursor-pointer"
                loading="lazy"
                alt=""
                src="/item--link--twitchpng@2x.png"
                onClick={onItemLinkTwitchpngClick}
              />
            </div>
            <div className="w-12 flex flex-col items-start justify-start pt-0 pb-4 pr-6 pl-0 box-border ml-[-0.8px]">
              <img
                className="w-6 h-[23px] relative overflow-hidden shrink-0 object-contain cursor-pointer"
                loading="lazy"
                alt=""
                src="/item--link--xpng@2x.png"
                onClick={onItemLinkXpngClick}
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 ml-[-0.8px]">
              <img
                className="w-6 h-[25px] relative overflow-hidden shrink-0 object-cover cursor-pointer"
                loading="lazy"
                alt=""
                src="/item--link--youtubepng@2x.png"
                onClick={onItemLinkYoutubepngClick}
              />
            </div>
          </div>
        </div>
        <div className="w-[135px] flex flex-col items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[4px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[21px] uppercase">{`D&D Beyond App`}</b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <button className="cursor-pointer [border:none] pt-0 px-0 pb-1.5 bg-[transparent] self-stretch flex flex-col items-start justify-start">
              <img
                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
                alt=""
                src="/link--google-playpng@2x.png"
                onClick={onLinkGooglePlaypngClick}
              />
            </button>
            <button className="cursor-pointer [border:none] pt-0 pb-1.5 pr-[15px] pl-0 bg-[transparent] self-stretch flex flex-col items-start justify-start">
              <img
                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
                alt=""
                src="/link--app-storepng@2x.png"
                onClick={onLinkAppStorepngClick}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background1;
