import { useMutation, gql } from "@apollo/client";
import { User } from "../models/User";

// create interface for the input data
interface CreateUserInput {
    createUserInput: {
        email: string;
        password: string;
    };
}

// create a mutation to create a user
const CREATE_USER = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
        }
    }
`;

// useMutation hook to create a user
const useCreateUser = () => {
    // this is a generic hook that returns a mutation function
    return useMutation<User, CreateUserInput>(CREATE_USER);
}

export { useCreateUser }; 

