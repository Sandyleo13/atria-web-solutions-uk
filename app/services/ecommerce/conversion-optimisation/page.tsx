import { getEcommerceService } from "../../../../data/ecommerce";
import EcommerceSubPage from "../../../components/services/EcommerceSubPage";

export default function ConversionOptimisationPage() {
  const service = getEcommerceService("conversion-optimisation");

  if (!service) return null;

  return <EcommerceSubPage service={service} />;
}