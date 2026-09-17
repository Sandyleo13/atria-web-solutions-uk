import { getWebDevelopmentService } from "../../../../data/web-development";
import WebDevelopmentSubPage from "../../../components/services/WebDevelopmentSubPage";

export default function CustomWebApplicationsPage() {
  const service = getWebDevelopmentService("custom-web-applications");

  if (!service) return null;

  return <WebDevelopmentSubPage service={service} />;
}