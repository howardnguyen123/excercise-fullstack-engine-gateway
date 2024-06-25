import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import { promisify } from 'util';
import getEmployeeClient from '../microservices/EmployeeMc';
import { EmployeeResponseSchema } from './EmployeeSchema';
const employeeClient = getEmployeeClient();

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        create: {
            type: EmployeeResponseSchema,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(_, args) {
                return await promisify(employeeClient.CreateEmployee).call(employeeClient, args);
            },
        },
        update: {
            type: EmployeeResponseSchema,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
            },
            async resolve(_, args) {
                return await promisify(employeeClient.UpdateEmployee).call(employeeClient, args);
            },
        },
        delete: {
            type: EmployeeResponseSchema,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(_, args) {
                return await promisify(employeeClient.DeleteEmployee).call(employeeClient, args);
            },
        },
    },
});

export default Mutation;
