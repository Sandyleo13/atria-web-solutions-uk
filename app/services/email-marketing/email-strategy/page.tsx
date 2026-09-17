import { getEmailSubService } from "../../../../data/email";
import EmailMarketingSubPage from "../../../components/services/EmailMarketingSubPage";

export default function EmailStrategyPage() {
  const service = getEmailSubService("email-strategy");

  if (!service) return null;

  return <EmailMarketingSubPage service={service} />;
}
