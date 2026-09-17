import { getWebDevelopmentService } from "../../../../data/web-development";
import WebDevelopmentSubPage from "../../../components/services/WebDevelopmentSubPage";

export default function CorporateWebsitesPage() {
  const service = getWebDevelopmentService("corporate-websites");

  if (!service) return null;

  return <WebDevelopmentSubPage service={service} />;
}