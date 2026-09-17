import { getSeoService } from "../../../../data/seo";
import SeoSubPage from "../../../components/services/SeoSubPage";

export default function ContentStrategyPage() {
  const service = getSeoService("content-strategy");

  if (!service) return null;

  return <SeoSubPage service={service} />;
}