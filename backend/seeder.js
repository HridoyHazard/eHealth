import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import meds from "./data/meds.js";
import User from "./models/userModel.js";
import Meds from "./models/medsModel.js";
import Order from "./models/orderModel.js";
import doctors from "./data/doctors.js";
import Doctors from "./models/doctorsModel.js";
import ambulances from "./data/ambulances.js";
import Ambulances from "./models/ambulancesModel.js";
import Appoinment from "./models/appointmentModel.js";
import connectDB from './config/db.js';


dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Appoinment.deleteMany();
    await Meds.deleteMany();
    await Doctors.deleteMany();
    await Ambulances.deleteMany();
    await User.deleteMany();
    
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleMeds = meds.map((meds) => {
      return {...meds, user: adminUser };
    });

    const sampleDoctors = doctors.map((doctors) => {
      return {...doctors, user: adminUser };
    });
    const sampleAmbulances = ambulances.map((ambulances) => {
      return {...ambulances, user: adminUser };
    });

    await Doctors.insertMany(sampleDoctors);
    await Ambulances.insertMany(sampleAmbulances);
    await Meds.insertMany(sampleMeds);
    console.log("Data Imported!");
    process.exit();

  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Appoinment.deleteMany();
    await Meds.deleteMany();
    await Doctors.deleteMany();
    await Ambulances.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed!");
    process.exit();

  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
