import { getWebDevelopmentService } from "../../../../data/web-development";
import WebDevelopmentSubPage from "../../../components/services/WebDevelopmentSubPage";

export default function WebsiteRedesignsPage() {
  const service = getWebDevelopmentService("website-redesigns");

  if (!service) return null;

  return <WebDevelopmentSubPage service={service} />;
}