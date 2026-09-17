import { getBrandingSubService } from "../../../../data/branding";
import BrandingSubPage from "../../../components/services/BrandingSubPage";

export default function LogoDesignPage() {
  const service = getBrandingSubService("logo-design");

  if (!service) return null;

  return <BrandingSubPage service={service} />;
}
