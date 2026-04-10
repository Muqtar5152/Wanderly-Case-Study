import HeroSection from "../components/casestudy/HeroSection";
import StickyNav from "../components/casestudy/StickyNav";
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
import DesignDecisions from "../components/casestudy/DesignDecisions";
import FooterSection from "../components/casestudy/FooterSection";

export default function CaseStudy() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <HeroSection />
      <StickyNav />
      <div id="overview"><ProjectOverview /><ProblemGoal /></div>
      <div id="research"><Research /><KeyInsights /></div>
      <div id="personas"><UserPersonas /></div>
      <div id="solution"><InformationArchitecture /><TaskFlows /></div>
      <div id="thinking"><DesignDecisions /></div>
      <div id="design"><DesignSystemSection /><WireframesToVisual /><FinalUIShowcase /></div>
      <div id="outcomes"><UsabilityTesting /><Reflection /></div>
      <FooterSection />
    </div>
  );
}