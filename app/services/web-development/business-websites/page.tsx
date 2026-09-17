
import { getWebDevelopmentService } from "../../../../data/web-development";
import WebDevelopmentSubPage from "../../../components/services/WebDevelopmentSubPage";

export default function BusinessWebsitesPage() {
  const service = getWebDevelopmentService("business-websites");

  if (!service) return null;

  return <WebDevelopmentSubPage service={service} />;
}