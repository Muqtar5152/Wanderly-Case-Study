import HeroSection from "../components/casestudy/HeroSection";
import ProjectOverview from "../components/casestudy/ProjectOverview";
import ProblemGoal from "../components/casestudy/ProblemGoal";
import Research from "../components/casestudy/Research";
import KeyInsights from "../components/casestudy/KeyInsights";
import UserPersonas from "../components/casestudy/UserPersonas";
import InformationArchitecture from "../components/casestudy/InformationArchitecture";
import TaskFlows from "../components/casestudy/TaskFlows";
import DesignSystemSection from "../components/casestudy/DesignSystemSection";
import WireframesToVisual from "../components/casestudy/WireframesToVisual";
import FinalUIShowcase from "../components/casestudy/FinalUIShowcase";
import UsabilityTesting from "../components/casestudy/UsabilityTesting";
import Reflection from "../components/casestudy/Reflection";
import FooterSection from "../components/casestudy/FooterSection";

export default function CaseStudy() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <HeroSection />
      <ProjectOverview />
      <ProblemGoal />
      <Research />
      <KeyInsights />
      <UserPersonas />
      <InformationArchitecture />
      <TaskFlows />
      <DesignSystemSection />
      <WireframesToVisual />
      <FinalUIShowcase />
      <UsabilityTesting />
      <Reflection />
      <FooterSection />
    </div>
  );
}