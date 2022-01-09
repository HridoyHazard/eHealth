import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import medsRouter from "./routes/medsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import doctorsRouter from "./routes/doctorsRoutes.js";
import ambulancesRouter from "./routes/ambulancesRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import appoinmentRouter from "./routes/appoinmentRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/meds", medsRouter);
app.use("/api/doctors", doctorsRouter);
app.use("/api/ambulances", ambulancesRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/appoinment", appoinmentRouter);

app.use("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`App is Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
