import { getReputationSubService } from "../../../../data/reputation";
import ReputationSubPage from "../../../components/services/ReputationSubPage";

export default function ReviewManagementPage() {
  const service = getReputationSubService("review-management");
  if (!service) return null;
  return <ReputationSubPage service={service} />;
}
