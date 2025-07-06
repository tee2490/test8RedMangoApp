import type { SD_Status } from "../Common/SD";
import type orderDetail from "./orderDetailModel";

export default interface orderHeaderModel {
  orderHeaderId?: number;
  pickupName?: string;
  pickupPhoneNumber?: string;
  pickupEmail?: string;
  applicationUserId?: string;
  user?: any;
  orderTotal?: number;
  orderDate?: Date;
  stripePaymentIntentID?: string;
  status?: SD_Status;
  totalItems?: number;
  orderDetails?: orderDetail[];
}