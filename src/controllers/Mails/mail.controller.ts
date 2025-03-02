import { Request, Response } from "express";
import { sendEmail } from "../../services/mailService";
import { ApiResponse } from "../../utils";

export const sendMail = async (req: Request, res: Response): Promise<void> => {
  const userIP = req.ip;
  const { name, email, mobile, role } = req.body;

  try {
    await sendEmail({ name, email, mobile, role, ip: userIP || "" });
    return ApiResponse(res, 200, "Email sent Successfully");
  } catch (error) {
    return ApiResponse(res, 500, "Failed to send email", error);
  }
};
