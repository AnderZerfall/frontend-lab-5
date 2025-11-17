import { SectionLayout } from "../../core/components/layout/SectionLayout";
import { Banner } from "./components/banner/Banner";
import { FounderTable } from "./components/founder/FounderTable";
import { MissionCard } from "./components/mission-card/MissionCard";
import { RunningEmoji } from "./components/running-emoji/RunningEmoji";
import { founders, missions } from "./configs";
import { useTypeWriter } from "./hooks/useTypeWriter";

enum MainPageBlocks {
  Mission = "mission",
  Founders = "founders",
}

export const MainPage = () => {
  const { displayedText } = useTypeWriter({
    text: "⭐ Your gateway to creativity and fun! ⭐",
  });
  const renderMissions = () =>
    missions.map((mission) => (
      <MissionCard missionContent={mission} key={mission.id} />
    ));

  return (
    <>
      <Banner title={"FUKURO"} subtitle={displayedText} />
      <SectionLayout name={MainPageBlocks.Mission} title="Our Mission">
        <div className="mission__cards">{renderMissions()}</div>
        <RunningEmoji />
      </SectionLayout>
      <SectionLayout name={MainPageBlocks.Founders} title="Founders">
        <FounderTable founders={founders} />
      </SectionLayout>
    </>
  );
};
