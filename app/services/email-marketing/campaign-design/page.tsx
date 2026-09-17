import { getEmailSubService } from "../../../../data/email";
import EmailMarketingSubPage from "../../../components/services/EmailMarketingSubPage";

export default function CampaignDesignPage() {
  const service = getEmailSubService("campaign-design");

  if (!service) return null;

  return <EmailMarketingSubPage service={service} />;
}
