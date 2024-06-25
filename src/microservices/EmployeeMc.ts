import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { env } from 'process';

import { ProtoGrpcType } from '../proto/employee';
import { EmployeeClient } from '../proto/employeePackage/Employee';
import { config } from 'dotenv';

config();
let employeeClient: EmployeeClient;

const getEmployeeClient = () => {
    if (employeeClient) {
        return employeeClient;
    }

    const { GRPC_EMPLOYEE_HOST, GRPC_EMPLOYEE_PORT } = env;

    const PROTO_FILE = '../proto/employee.proto';
    const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
    const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
    employeeClient = new grpcObj.employeePackage.Employee(
        `${GRPC_EMPLOYEE_HOST}:${GRPC_EMPLOYEE_PORT}`,
        grpc.credentials.createInsecure(),
    );

    return employeeClient;
};

export default getEmployeeClient;
