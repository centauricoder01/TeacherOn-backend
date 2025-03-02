import express from "express";
import { sendMail } from "../controllers/Mails/mail.controller";

const router = express.Router();

router.post("/send-email", sendMail);

export default router;
