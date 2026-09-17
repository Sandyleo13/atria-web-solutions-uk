import { getBrandingSubService } from "../../../../data/branding";
import BrandingSubPage from "../../../components/services/BrandingSubPage";

export default function MarketingCollateralPage() {
  const service = getBrandingSubService("marketing-collateral");

  if (!service) return null;

  return <BrandingSubPage service={service} />;
}
