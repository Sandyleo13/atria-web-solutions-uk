import { getEcommerceService } from "../../../../data/ecommerce";
import EcommerceSubPage from "../../../components/services/EcommerceSubPage";

export default function ProductExperiencesPage() {
  const service = getEcommerceService("product-experiences");

  if (!service) return null;

  return <EcommerceSubPage service={service} />;
}