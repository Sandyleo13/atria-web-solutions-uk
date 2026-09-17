import { getEmailSubService } from "../../../../data/email";
import EmailMarketingSubPage from "../../../components/services/EmailMarketingSubPage";

export default function NewsletterSystemsPage() {
  const service = getEmailSubService("newsletter-systems");

  if (!service) return null;

  return <EmailMarketingSubPage service={service} />;
}
