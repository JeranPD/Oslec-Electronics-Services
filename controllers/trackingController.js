import AddCustomer from "../models/AddCustomer.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermission from "../utils/checkPermission.js";
import mongoose from "mongoose";
import moment from "moment";

const trackStatus = async (req, res) => {
  AddCustomer.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // const data = await AddCustomer.findOne(req.body);
  // res.status(StatusCodes.OK).json({ data });
};

export { trackStatus };
