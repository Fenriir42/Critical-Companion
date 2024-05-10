import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AsideType = {
  cellphonesef75d36c69f40bd?: string;
  googlePlayBadgeaff0a61d6c?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onLinkDownloadTheDDBeyondClick?: () => void;
  onLinkDownloadTheDDBeyond2Click?: () => void;
};

const Aside: NextPage<AsideType> = ({
  cellphonesef75d36c69f40bd,
  googlePlayBadgeaff0a61d6c,
  propFlex,
  propBackgroundImage,
  propAlignSelf,
  onLinkDownloadTheDDBeyondClick,
  onLinkDownloadTheDDBeyond2Click,
}) => {
  const asideStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      backgroundImage: propBackgroundImage,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propBackgroundImage, propAlignSelf]);

  return (
    <div
      className="flex-1 overflow-hidden flex flex-row items-center justify-center py-[2.2px] px-6 box-border bg-[url('/aside@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[48px] max-w-full [row-gap:20px] text-left text-2xl text-wwwdndbeyondcom-nero font-inter mq1250:flex-wrap"
      style={asideStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px] box-border min-w-[303px] max-w-full mq1250:flex-1">
        <h3 className="m-0 self-stretch relative text-inherit tracking-[1.01px] leading-[41px] font-normal font-inherit mq450:text-mid mq450:leading-[33px]">
          Play Anywhere, Anytime
        </h3>
      </div>
      <img
        className="h-[68.1px] w-[200px] relative overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src={cellphonesef75d36c69f40bd}
      />
      <div className="flex-[0.721] flex flex-row items-center justify-end py-0 pr-0 pl-[130px] box-border gap-[16px] min-w-[303px] max-w-full mq825:flex-wrap mq825:pl-[65px] mq825:box-border mq1250:flex-1">
        <div
          className="w-[120px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onLinkDownloadTheDDBeyondClick}
        >
          <img
            className="self-stretch h-[40.1px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/applestorebadge8c4986ee4828b47d16f5svg.svg"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-start justify-start min-w-[87px]"
          onClick={onLinkDownloadTheDDBeyond2Click}
        >
          <img
            className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src={googlePlayBadgeaff0a61d6c}
          />
        </button>
        <button className="cursor-pointer py-[11px] px-3 bg-wwwdndbeyondcom-bunker w-[50px] rounded box-border flex flex-row items-center justify-center border-[1px] border-solid border-wwwdndbeyondcom-bunker">
          <img className="h-6 w-6 relative" alt="" src="/svg-1.svg" />
        </button>
      </div>
    </div>
  );
};

export default Aside;
