import { getMobileSubService } from "../../../../data/mobile";
import MobileAppSubPage from "../../../components/services/MobileAppSubPage";

export default function IosApplicationsPage() {
  const service = getMobileSubService("ios-applications");
  if (!service) return null;

  return <MobileAppSubPage service={service} />;
}
