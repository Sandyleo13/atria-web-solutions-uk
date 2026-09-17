import { getIndustry } from "../../../data/industries";
import IndustryPage from "../../components/industries/IndustryPage";

export default function ProfessionalServicesPage() {
  const industry = getIndustry("professional-services");

  if (!industry) return null;

  return <IndustryPage industry={industry} />;
}