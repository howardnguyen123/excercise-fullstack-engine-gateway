import { GraphQLInt, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { promisify } from 'util';

import getEmployeeClient from '../microservices/EmployeeMc';
import { EmployeeResponseListSchema } from './EmployeeSchema';
import Mutation from './Mutation';

const employeeClient = getEmployeeClient();

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employees: {
            type: EmployeeResponseListSchema,
            args: {
                limit: { type: GraphQLInt },
            },
            async resolve(_, { limit }) {
                const response = await promisify(employeeClient.FetchEmployees).call(employeeClient, { limit });

                return {
                    data: response?.employees,
                    message: response?.message,
                    status: response?.status,
                }
            },
        },
    },
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
