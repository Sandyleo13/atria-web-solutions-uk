import { getIndustry } from "../../../data/industries";
import IndustryPage from "../../components/industries/IndustryPage";

export default function StartupsPage() {
  const industry = getIndustry("startups");

  if (!industry) return null;

  return <IndustryPage industry={industry} />;
}