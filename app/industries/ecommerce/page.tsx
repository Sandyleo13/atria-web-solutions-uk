import { getIndustry } from "../../../data/industries";
import IndustryPage from "../../components/industries/IndustryPage";

export default function EcommercePage() {
  const industry = getIndustry("ecommerce");

  if (!industry) return null;

  return <IndustryPage industry={industry} />;
}