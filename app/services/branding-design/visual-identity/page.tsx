import { getBrandingSubService } from "../../../../data/branding";
import BrandingSubPage from "../../../components/services/BrandingSubPage";

export default function VisualIdentityPage() {
  const service = getBrandingSubService("visual-identity");

  if (!service) return null;

  return <BrandingSubPage service={service} />;
}
