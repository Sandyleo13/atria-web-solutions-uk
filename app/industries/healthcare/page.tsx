import { getIndustry } from "../../../data/industries";
import IndustryPage from "../../components/industries/IndustryPage";

export default function HealthcarePage() {
  const industry = getIndustry("healthcare");

  if (!industry) return null;

  return <IndustryPage industry={industry} />;
}