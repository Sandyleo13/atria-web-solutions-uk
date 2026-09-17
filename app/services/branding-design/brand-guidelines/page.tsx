import { getBrandingSubService } from "../../../../data/branding";
import BrandingSubPage from "../../../components/services/BrandingSubPage";

export default function BrandGuidelinesPage() {
  const service = getBrandingSubService("brand-guidelines");

  if (!service) return null;

  return <BrandingSubPage service={service} />;
}
