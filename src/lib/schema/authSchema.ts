import { z } from 'zod'

export const loginSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(6, 'Username is too short')
    .max(100, 'Username is too long')
    .toLowerCase()
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password is too short')
    .max(100, 'Password is too long'),
  remember: z.boolean().optional(),
})

export const registerSchema = z.object({
  firstname: z
    .string({ required_error: 'Firstname is required' })
    .min(3, 'Firstname is too short')
    .max(100, 'Firstname is too long'),
  lastname: z
    .string({ required_error: 'Lastname is required' })
    .min(3, 'Lastname is too short')
    .max(100, 'Lastname is too long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email is invalid')
    .toLowerCase()
    .trim(),
  username: z
    .string({ required_error: 'Username is required' })
    .min(6, 'Username is too short')
    .max(100, 'Username is too long')
    .toLowerCase()
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password is too short')
    .max(100, 'Password is too long'),
  remember: z.boolean().optional(),
})
