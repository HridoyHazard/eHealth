import path from 'path'
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import medsRouter from "./routes/medsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import doctorsRouter from "./routes/doctorsRoutes.js";
import ambulancesRouter from "./routes/ambulancesRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

app.use("/api/meds", medsRouter);
app.use("/api/doctors", doctorsRouter);
app.use("/api/ambulances", ambulancesRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});
/*
server.listen(4000, function () {
  console.log("listening on port 4000");
});
*/
const PORT = process.env.PORT || 5000 ;
app.listen(
  PORT,
  console.log(`App is Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);