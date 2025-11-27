import serverless from "serverless-http";
import kernel from "../src/core/app";
import { Request, Response } from "express";

let cachedHandler: any = null;

export default async function handler(req: Request, res: Response) {
  try {
    if (!cachedHandler) {
      const app = await kernel();
      if (!app) {
        throw new Error("Failed to initialize Express application.");
      }
      cachedHandler = serverless(app);
    }
    return cachedHandler(req, res);
  } catch (err) {
    console.error("Serverless error:", err);
    if (!res.headersSent) {
      res.status(500).send("Internal Server Error");
    }
  }
}
