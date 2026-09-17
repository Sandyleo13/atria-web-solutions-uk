import { getSeoService } from "../../../../data/seo";
import SeoSubPage from "../../../components/services/SeoSubPage";

export default function TechnicalSeoPage() {
  const service = getSeoService("technical-seo");

  if (!service) return null;

  return <SeoSubPage service={service} />;
}