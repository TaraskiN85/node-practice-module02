import path from 'path';
import fs from 'fs/promises';
import HttpError from '../helpers/HttpError.js';

const folderPath = path.resolve('files');

export const createFile = async (req, res, next) => {
  const { fileName, content } = req.body;
  const filePath = path.resolve('files', fileName);
  try {
    await fs.writeFile(filePath, JSON.stringify(content));
    res.status(201).json({
      message: 'File created successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getFiles = async (req, res, next) => {
  try {
    const files = await fs.readdir(folderPath);
    console.log(files);
    if (files.length === 0) {
      throw HttpError(404, 'The folder is empty');
    }
    res.json(files);
  } catch (err) {
    next(err);
  }
};

export const getFile = async (req, res, next) => {
  try {
    const fileNames = await fs.readdir(folderPath);
    const { filename } = req.params;
    const folderHasFile = fileNames.includes(filename);
    if (!folderHasFile) throw HttpError(404, 'File not found');
    const filePath = path.resolve(folderPath, filename);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    res.json({ content: fileContent });
  } catch (err) {
    next(err);
  }
};
