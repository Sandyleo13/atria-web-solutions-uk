import { getMobileSubService } from "../../../../data/mobile";
import MobileAppSubPage from "../../../components/services/MobileAppSubPage";

export default function BusinessApplicationsPage() {
  const service = getMobileSubService("business-applications");
  if (!service) return null;

  return <MobileAppSubPage service={service} />;
}
