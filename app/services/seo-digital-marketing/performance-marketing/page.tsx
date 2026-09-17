import { getSeoService } from "../../../../data/seo";
import SeoSubPage from "../../../components/services/SeoSubPage";

export default function PerformanceMarketingPage() {
  const service = getSeoService("performance-marketing");

  if (!service) return null;

  return <SeoSubPage service={service} />;
}