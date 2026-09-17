import { getWebDevelopmentService } from "../../../../data/web-development";
import WebDevelopmentSubPage from "../../../components/services/WebDevelopmentSubPage";

export default function CmsDevelopmentPage() {
  const service = getWebDevelopmentService("cms-development");

  if (!service) return null;

  return <WebDevelopmentSubPage service={service} />;
}