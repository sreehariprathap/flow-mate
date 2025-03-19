interface FlowInterface {
    id: string;
    userId: string;
    description: string | null;
    name: string;
    definition: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export default FlowInterface;