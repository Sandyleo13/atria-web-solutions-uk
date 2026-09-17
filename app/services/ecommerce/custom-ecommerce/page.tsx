import { getEcommerceService } from "../../../../data/ecommerce";
import EcommerceSubPage from "../../../components/services/EcommerceSubPage";

export default function CustomEcommercePage() {
  const service = getEcommerceService("custom-ecommerce");

  if (!service) return null;

  return <EcommerceSubPage service={service} />;
}