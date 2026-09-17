import { getReputationSubService } from "../../../../data/reputation";
import ReputationSubPage from "../../../components/services/ReputationSubPage";

export default function SearchPresencePage() {
  const service = getReputationSubService("search-presence");
  if (!service) return null;
  return <ReputationSubPage service={service} />;
}
