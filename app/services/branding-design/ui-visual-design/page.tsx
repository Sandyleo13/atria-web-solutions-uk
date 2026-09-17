import { getBrandingSubService } from "../../../../data/branding";
import BrandingSubPage from "../../../components/services/BrandingSubPage";

export default function UiVisualDesignPage() {
  const service = getBrandingSubService("ui-visual-design");

  if (!service) return null;

  return <BrandingSubPage service={service} />;
}
