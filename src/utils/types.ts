export type ConversationType = {
    id: number;
    name: string;
    lastMessage: string;
}

export type CreateUserParams = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}