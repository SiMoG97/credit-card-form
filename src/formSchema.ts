import * as z from "zod";

export const formSchema = z.object({
    cardHolderName: z
        .string({ required_error: "Required" })
        .min(7, { message: "Unvalid name" }),
    cardNumber: z
        .string()
        .length(19, { message: "Card number must contain exactly 16 numbers" }),
    year: z.number().max(99),
    month: z.number().max(12, { message: "Month <= 12" }).min(1),
    cvc: z
        .number()
        .max(999, { message: "CVC should be 3 digits long" })
        .min(100, { message: "CVC should be 3 digits long" }),
});

export type FormType = z.infer<typeof formSchema>;
