import { getMobileSubService } from "../../../../data/mobile";
import MobileAppSubPage from "../../../components/services/MobileAppSubPage";

export default function CustomerAppsPage() {
  const service = getMobileSubService("customer-apps");
  if (!service) return null;

  return <MobileAppSubPage service={service} />;
}
