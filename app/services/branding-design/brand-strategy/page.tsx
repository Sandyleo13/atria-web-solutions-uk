import { getBrandingSubService } from "../../../../data/branding";
import BrandingSubPage from "../../../components/services/BrandingSubPage";

export default function BrandStrategyPage() {
  const service = getBrandingSubService("brand-strategy");

  if (!service) return null;

  return <BrandingSubPage service={service} />;
}
