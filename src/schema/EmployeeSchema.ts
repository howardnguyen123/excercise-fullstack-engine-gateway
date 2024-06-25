import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const EmployeeSchema = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
        },
        message: {
            type: GraphQLString,
        },
    }),
});

export const EmployeeResponseSchema = new GraphQLObjectType({
    name: 'EmployeeResponseSchema',
    fields: () => ({
        data: {
            type: EmployeeSchema,
        },
        status: {
            type: GraphQLString,
        },
        message: {
            type: GraphQLString,
        },
    }),
});

export const EmployeeResponseListSchema = new GraphQLObjectType({
    name: 'EmployeeResponseListSchema',
    fields: () => ({
        data: {
            type: new GraphQLList(EmployeeSchema),
        },
        status: {
            type: GraphQLString,
        },
        message: {
            type: GraphQLString,
        },
    }),
});
