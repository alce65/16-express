interface iTask {
    id: number;
    title: string;
    responsible: string;
    isCompleted: boolean;
}

export const initialTasks: Array<iTask> = [
    { id: 1, title: 'Hacer algo', responsible: 'Pepe', isCompleted: false },
    {
        id: 2,
        title: 'Hacer otra cosa',
        responsible: 'Luisa',
        isCompleted: false,
    },
    { id: 3, title: 'No Hacer nada', responsible: 'Yo', isCompleted: false },
];
