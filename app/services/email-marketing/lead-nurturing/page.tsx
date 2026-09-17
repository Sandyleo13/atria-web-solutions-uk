import { getEmailSubService } from "../../../../data/email";
import EmailMarketingSubPage from "../../../components/services/EmailMarketingSubPage";

export default function LeadNurturingPage() {
  const service = getEmailSubService("lead-nurturing");

  if (!service) return null;

  return <EmailMarketingSubPage service={service} />;
}
