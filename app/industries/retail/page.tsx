import { getIndustry } from "../../../data/industries";
import IndustryPage from "../../components/industries/IndustryPage";

export default function RetailPage() {
  const industry = getIndustry("retail");

  if (!industry) return null;

  return <IndustryPage industry={industry} />;
}