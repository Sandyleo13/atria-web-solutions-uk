import { getReputationSubService } from "../../../../data/reputation";
import ReputationSubPage from "../../../components/services/ReputationSubPage";

export default function ReputationStrategyPage() {
  const service = getReputationSubService("reputation-strategy");
  if (!service) return null;
  return <ReputationSubPage service={service} />;
}
