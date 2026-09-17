import { getReputationSubService } from "../../../../data/reputation";
import ReputationSubPage from "../../../components/services/ReputationSubPage";

export default function ReputationMonitoringPage() {
  const service = getReputationSubService("reputation-monitoring");
  if (!service) return null;
  return <ReputationSubPage service={service} />;
}
