import type { cartItemModel, shoppingCartModel } from "../../../Interfaces";

export interface orderSummaryProps {
    data: {
        id: number;
        cartItems: cartItemModel[];
        cartTotal: number;
    };
    userInput: {
        name: string;
        email: string;
        phoneNumber: string;
    };
}