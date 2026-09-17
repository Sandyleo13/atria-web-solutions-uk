import { getWebDevelopmentService } from "../../../../data/web-development";
import WebDevelopmentSubPage from "../../../components/services/WebDevelopmentSubPage";

export default function LandingPagesPage() {
  const service = getWebDevelopmentService("landing-pages");

  if (!service) return null;

  return <WebDevelopmentSubPage service={service} />;
}