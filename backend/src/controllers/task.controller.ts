import type {Request, Response} from 'express';
import {getAllTasks} from '../services/task.service.js';

export function getTasks(_req: Request, res: Response): void {
    const tasks = getAllTasks();
    res.status(200).json(tasks);
}
