import { z } from "zod";

export const signInWithUsernameSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(1),
});

export const signInWithEmailSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export const signUpSchema = z.object({
    username: z.string().min(3),
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

export type SignInWithUsernameType = z.infer<typeof signInWithUsernameSchema>;
export type SignInWithEmailType = z.infer<typeof signInWithEmailSchema>;
export type SignUpType = z.infer<typeof signUpSchema>;
