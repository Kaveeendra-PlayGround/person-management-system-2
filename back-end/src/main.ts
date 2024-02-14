import express from 'express';
import {EmployeeHttpController} from "./api/employee.http.controller.js";

const app = express();

app.use('/api/v1/employees', EmployeeHttpController);
app.listen(5050, ()=> console.log('server is running on 5050 port'));