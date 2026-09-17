import { getSeoService } from "../../../../data/seo";
import SeoSubPage from "../../../components/services/SeoSubPage";

export default function SearchCampaignsPage() {
  const service = getSeoService("search-campaigns");

  if (!service) return null;

  return <SeoSubPage service={service} />;
}