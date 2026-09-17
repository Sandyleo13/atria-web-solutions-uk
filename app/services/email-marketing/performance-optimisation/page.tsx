import { getEmailSubService } from "../../../../data/email";
import EmailMarketingSubPage from "../../../components/services/EmailMarketingSubPage";

export default function PerformanceOptimisationPage() {
  const service = getEmailSubService("performance-optimisation");

  if (!service) return null;

  return <EmailMarketingSubPage service={service} />;
}
