import type { SD_Status } from "../../../Common/SD";
import type { cartItemModel, shoppingCartModel } from "../../../Interfaces";

export interface orderSummaryProps {
    data: {
        id?: number;
        cartItems?: shoppingCartModel[];
        cartTotal?: number;
        userId?: string;
        stripePaymentIntentId?: string;
        status?: SD_Status;
    };
    userInput: {
        name: string;
        email: string;
        phoneNumber: string;
    };
}