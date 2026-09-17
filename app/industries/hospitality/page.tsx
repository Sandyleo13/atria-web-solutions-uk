import { getIndustry } from "../../../data/industries";
import IndustryPage from "../../components/industries/IndustryPage";

export default function HospitalityPage() {
  const industry = getIndustry("hospitality");

  if (!industry) return null;

  return <IndustryPage industry={industry} />;
}