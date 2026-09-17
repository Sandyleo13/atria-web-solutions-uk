import { getEmailSubService } from "../../../../data/email";
import EmailMarketingSubPage from "../../../components/services/EmailMarketingSubPage";

export default function AutomationPage() {
  const service = getEmailSubService("automation");

  if (!service) return null;

  return <EmailMarketingSubPage service={service} />;
}
