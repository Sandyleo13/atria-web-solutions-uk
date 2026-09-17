import { getEcommerceService } from "../../../../data/ecommerce";
import EcommerceSubPage from "../../../components/services/EcommerceSubPage";

export default function StoreRedesignsPage() {
  const service = getEcommerceService("store-redesigns");

  if (!service) return null;

  return <EcommerceSubPage service={service} />;
}