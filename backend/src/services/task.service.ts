import { title } from 'node:process';
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

export function createTask(data: {title: string; description?: string}): Task {
    const newTask: Task = {
        ...data,
        id: randomUUID(),
        completed: false,
        createdAt: new Date(),
    };
    tasks.push(newTask);
    return newTask;
}
