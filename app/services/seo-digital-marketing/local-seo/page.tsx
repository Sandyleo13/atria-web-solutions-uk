import { getSeoService } from "../../../../data/seo";
import SeoSubPage from "../../../components/services/SeoSubPage";

export default function LocalSeoPage() {
  const service = getSeoService("local-seo");

  if (!service) return null;

  return <SeoSubPage service={service} />;
}