import { Loan } from "src/loans/entities/loan.entity";

export type Loaner = {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  Loan: Loan[];
};
