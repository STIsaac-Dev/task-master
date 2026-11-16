import type {Task} from '../types/task.js';
import {randomUUID} from 'node:crypto';

const tasks: Task[] = [
    {
        id: randomUUID(),
        title: 'Task 1',
        description: 'Description for Task 1',
        completed: false,
        createdAt: new Date(),
    },
    {
        id: randomUUID(),
        title: 'Task 2',
        completed: true,
        createdAt: new Date(),
    }
];

export function getAllTasks(): Task[] {
    return tasks;
}
