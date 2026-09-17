import { getReputationSubService } from "../../../../data/reputation";
import ReputationSubPage from "../../../components/services/ReputationSubPage";

export default function CrisisResponsePage() {
  const service = getReputationSubService("crisis-response");
  if (!service) return null;
  return <ReputationSubPage service={service} />;
}
