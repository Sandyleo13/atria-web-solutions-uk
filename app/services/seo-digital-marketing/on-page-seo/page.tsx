import { getSeoService } from "../../../../data/seo";
import SeoSubPage from "../../../components/services/SeoSubPage";

export default function OnPageSeoPage() {
  const service = getSeoService("on-page-seo");

  if (!service) return null;

  return <SeoSubPage service={service} />;
}