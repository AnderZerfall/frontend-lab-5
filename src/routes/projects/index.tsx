import { DefaultBanner } from "../../core/components/layout/DefaultBanner";
import { SectionLayout } from "../../core/components/layout/SectionLayout";
import { Slider } from "./components/Slider";
import { slidesContent } from "./config";

enum ProjectPageBlocks {
  Projects = "projects",
}

export const ProjectsPage = () => {

  return (
    <>
      <DefaultBanner title="🗂️ Projects" />
      <SectionLayout name={ProjectPageBlocks.Projects}>
        <div className="container projects-block__container">
          <Slider content={slidesContent}/>
        </div>
      </SectionLayout>
    </>
  );
};
