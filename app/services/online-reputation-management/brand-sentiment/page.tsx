import { getReputationSubService } from "../../../../data/reputation";
import ReputationSubPage from "../../../components/services/ReputationSubPage";

export default function BrandSentimentPage() {
  const service = getReputationSubService("brand-sentiment");
  if (!service) return null;
  return <ReputationSubPage service={service} />;
}
