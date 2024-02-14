import {Router, Request, Response} from "express";
import multer from "multer";

const controller = Router();
const multipart = multer();
export {controller as EmployeeHttpController};

controller.post('/',multipart.single('picture'),saveEmployee);

async function saveEmployee(req : Request, res: Response){
    const employee = req.body;
    console.log(employee);
    console.log(req.file);
    res.sendStatus(201);
}

