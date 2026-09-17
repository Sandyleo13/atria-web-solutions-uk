import { getMobileSubService } from "../../../../data/mobile";
import MobileAppSubPage from "../../../components/services/MobileAppSubPage";

export default function MvpsPrototypesPage() {
  const service = getMobileSubService("mvps-prototypes");
  if (!service) return null;

  return <MobileAppSubPage service={service} />;
}
