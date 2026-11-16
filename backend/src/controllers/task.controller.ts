import type {Request, Response} from 'express';
import {getAllTasks, createTask} from '../services/task.service.js';

export function getTasks(_req: Request, res: Response): void {
    const tasks = getAllTasks();
    res.status(200).json(tasks);
}

export function postTask(req: Request, res: Response): void {
    const task = createTask(req.body);
    res.status(201).json(task);
}
