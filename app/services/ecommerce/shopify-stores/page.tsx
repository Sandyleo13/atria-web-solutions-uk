import { getEcommerceService } from "../../../../data/ecommerce";
import EcommerceSubPage from "../../../components/services/EcommerceSubPage";

export default function ShopifyStoresPage() {
  const service = getEcommerceService("shopify-stores");

  if (!service) return null;

  return <EcommerceSubPage service={service} />;
}