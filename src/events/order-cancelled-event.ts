import { Subjects } from "./types/subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;

  // Bare minimum approach in this case, no future-proofing unlike the other event where we include all fields
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
