import { Response } from "express";

type TypeResponse = {
  code?: number;
  success: boolean;
  message: string;
  data?: any;
  error?: any;
};

export const ApiResponse = (
  res: Response,
  code: number,
  message: string,
  data: any = null,
  error: any = null
) => {
  const success: boolean = code < 400;

  const response: TypeResponse = { success, message, code };

  if (data) response.data = data;
  if (error) response.error = error;
  res.status(code).json(response);
};
