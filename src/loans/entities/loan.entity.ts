import { Loaner } from "src/loaners/entities/loaner.entity";

export type Loan = {
    id: String;
    value: number;
    loaner: Loaner;
    loanerId: String;
    createdAt: Date;
    updatedAt: Date;
}
