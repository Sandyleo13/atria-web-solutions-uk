import { getMobileSubService } from "../../../../data/mobile";
import MobileAppSubPage from "../../../components/services/MobileAppSubPage";

export default function CrossPlatformAppsPage() {
  const service = getMobileSubService("cross-platform-apps");
  if (!service) return null;

  return <MobileAppSubPage service={service} />;
}
