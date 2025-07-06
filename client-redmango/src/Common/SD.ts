export const baseUrl = 'https://localhost:7006';

export const baseUrlAPI = baseUrl + '/api/';

export const userId = '34cf8c9e-5877-42d5-9464-9b811c59b0e5';

export enum SD_Roles {
    ADMIN = "admin",
    CUTOMER = "customer",
}

export enum SD_Status {
    PENDING = "Pending",
    CONFIRMED = "Confirmed",
    BEING_COOKED = "Being Cooked",
    READY_FOR_PICKUP = "Ready for Pickup",
    COMPLETED = "Completed",
    CANCELLED = "Cancelled",
  }

   export enum SD_Categories {
    APPETIZER = "Appetizer",
    ENTREE = "Entree",
    DESSERT = "Dessert",
    BEVERAGES = "Beverages",
  }