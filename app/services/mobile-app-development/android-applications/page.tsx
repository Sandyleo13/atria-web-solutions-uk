import { getMobileSubService } from "../../../../data/mobile";
import MobileAppSubPage from "../../../components/services/MobileAppSubPage";

export default function AndroidApplicationsPage() {
  const service = getMobileSubService("android-applications");
  if (!service) return null;

  return <MobileAppSubPage service={service} />;
}
