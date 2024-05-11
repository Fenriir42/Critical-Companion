import type { NextPage } from "next";
import { useState, useEffect } from "react";
import BackgroundHorizontalBorder from "../components/background-horizontal-border";
import CampaignSheet from "../components/CampaignSheet";

const Home: NextPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns data from the API
    fetch("http://localhost:3001/campaigns/list", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
      });
  }, []);

  return (
    <div className="w-full relative overflow-y-auto flex flex-col items-start justify-start gap-[20px] bg-[url('/bg.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 box-border min-w-[1903px] min-h-[859px] max-w-full text-left text-mini text-wwwdndbeyondcom-hit-gray1 font-wwwdndbeyondcom-roboto-regular-13">
        <BackgroundHorizontalBorder />
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs">
            <div className="w-[1200px] flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[12px] max-w-[1200px] mq1250:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full text-[27.8px] text-wwwdndbeyondcom-black font-inter">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-[0px] mq1250:flex-wrap">
                    <div className="w-[969px] flex flex-col items-start justify-start max-w-full">
                      <b className="self-stretch relative tracking-[1.01px] leading-[56px] mq450:text-[22px] mq450:leading-[45px]">
                        My Campaigns
                      </b>
                    </div>
                    <button className="cursor-pointer py-1.5 px-5 bg-wwwdndbeyondcom-outer-space rounded flex flex-row items-center justify-start whitespace-nowrap border-[1px] border-solid border-wwwdndbeyondcom-outer-space hover:bg-dimgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                      <a
                        className="relative text-base leading-[28px] uppercase font-medium font-wwwdndbeyondcom-roboto-regular-13 text-wwwdndbeyondcom-nero text-left [text-decoration:none]"
                        href="https://www.dndbeyond.com/characters/builder"
                        target="_blank"
                      >
                        Create A Campaign
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full text-base text-wwwdndbeyondcom-boulder">
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch rounded-t-none rounded-b-[3.01px] bg-wwwdndbeyondcom-porcelain box-border flex flex-row flex-wrap items-start justify-start pt-[15px] pb-4 pr-[15.5px] pl-4 gap-[16px] max-w-full border-t-[1px] border-solid border-wwwdndbeyondcom-hit-gray">
                    <div className="h-[57px] flex-1 rounded bg-wwwdndbeyondcom-nero box-border flex flex-col items-start justify-start py-[19px] px-3 gap-[10.4px] min-w-[524px] max-w-full border-[1px] border-solid border-wwwdndbeyondcom-submarine mq825:h-auto mq825:min-w-full">
                      <button className="mt-[-27.19999999999999px] cursor-pointer [border:none] py-0 pr-px pl-[3px] bg-[transparent] h-[16.8px] [background:linear-gradient(180deg,_#ecedee_50%,_#fff_50%)] flex flex-row items-end justify-start box-border shrink-0">
                        <div className="mb-[-2.7999999999999545px] relative text-xs tracking-[0.56px] leading-[23px] font-wwwdndbeyondcom-roboto-regular-13 text-wwwdndbeyondcom-rolling-stone text-left inline-block min-w-[41px]">
                          Search
                        </div>
                      </button>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[5.4px] box-border max-w-full shrink-0">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[8px] max-w-full mq825:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                            <img
                              className="w-4 h-4 relative"
                              alt=""
                              src="/svg-2.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[348px] max-w-full z-[1] mq825:min-w-full">
                            <div className="relative">
                              Search by Name, Level, Class, Race, or Campaign
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[57px] w-[200px] flex flex-col items-start justify-start relative min-w-[200px] text-[17.6px] text-wwwdndbeyondcom-bunker">
                      <div className="!m-[0] absolute w-full top-[0px] right-[0px] left-[0px] rounded bg-wwwdndbeyondcom-nero box-border flex flex-row items-start justify-start pt-4 px-[17px] pb-[17px] h-full border-[1px] border-solid border-wwwdndbeyondcom-submarine">
                        <div className="w-[102px] relative leading-[21px] flex items-center whitespace-nowrap">
                          Created: Oldest
                        </div>
                        <div className="w-[62px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
                          <div className="self-stretch h-[17.6px] relative min-w-[17.59000015258789px]">
                            <img
                              className="absolute top-[0px] left-[44.4px] w-[17.6px] h-[17.6px]"
                              alt=""
                              src="/frame.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[16.8px] !m-[0] absolute w-[23.65%] top-[-6.2px] right-[70.4%] left-[5.95%] [background:linear-gradient(180deg,_#ecedee_50%,_#fff_50%)] flex flex-row items-end justify-start py-0 pr-[1.3px] pl-[3px] box-border whitespace-nowrap z-[1] text-xs text-wwwdndbeyondcom-rolling-stone">
                        <div className="mb-[-2.7999999999999545px] relative tracking-[0.56px] leading-[23px] inline-block min-w-[43px]">
                          Sort By
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer py-3.5 px-3 bg-wwwdndbeyondcom-nero rounded flex flex-row items-start justify-start gap-[6px] border-[1px] border-solid border-wwwdndbeyondcom-submarine">
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-[22px] h-5 relative"
                          alt=""
                          src="/svg-3.svg"
                        />
                      </div>
                      <div className="relative text-mini leading-[26px] font-medium font-wwwdndbeyondcom-roboto-regular-13 text-wwwdndbeyondcom-outer-space text-center inline-block min-w-[56px] max-h-[26.010000228881836px]">
                        Settings
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full text-7xl text-wwwdndbeyondcom-nero">
                    <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
                      {campaigns.map((campaign, index) => (
                        <CampaignSheet
                          key={index}
                          owner={campaign.owner}
                          role={campaign.role}
                          characterName={campaign.characterName}
                          numberOfPlayers={campaign.numberOfPlayers}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
