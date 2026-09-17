import { getEcommerceService } from "../../../../data/ecommerce";
import EcommerceSubPage from "../../../components/services/EcommerceSubPage";

export default function PaymentIntegrationPage() {
  const service = getEcommerceService("payment-integration");

  if (!service) return null;

  return <EcommerceSubPage service={service} />;
}