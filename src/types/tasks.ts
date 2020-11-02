type TaskType = {
    completed: boolean,
    _id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}
export type TasksType = {
    tasks: Array <TaskType>;
}