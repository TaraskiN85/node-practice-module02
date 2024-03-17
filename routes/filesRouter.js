import express from 'express';
import {
  createFile,
  getFile,
  getFiles,
} from '../controllers/filesControllers.js';
import validateBody from '../helpers/validateBody.js';
import { createFileSchema } from '../schemas/filesSchemas.js';
import { checkExtension } from '../middlewares/checkExtension.js';

const filesRouter = express.Router();

filesRouter.post(
  '/',
  validateBody(createFileSchema),
  checkExtension,
  createFile
);

filesRouter.get('/', getFiles);

filesRouter.get('/:filename', getFile);
// contactsRouter.get('/', getAllContacts);

// contactsRouter.get('/:id', getOneContact);

// contactsRouter.delete('/:id', deleteContact);

// contactsRouter.put('/:id', updateContact);

export default filesRouter;
