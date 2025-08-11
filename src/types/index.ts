export interface ExampleProps {
    title: string;
    description?: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
};

export interface State {
    users: User[];
    loading: boolean;
    error?: string;
}