import HttpError from '../helpers/HttpError.js';

export const checkExtension = (req, res, next) => {
  const { fileName } = req.body;
  const EXTENSIONS = ['.txt', '.html', '.css', '.doc', '.sass'];

  // const index = fileName.lastIndexOf('.');
  // const fileExtension = fileName.slice(index);
  // const hasExtension = EXTENSIONS.includes(fileExtension);
  // if (!hasExtension)
  //   next(HttpError(400, `Does not support ${fileExtension} extension`));
  // next();

  for (const extension of EXTENSIONS) {
    if (fileName.includes(extension)) {
      return next();
    }
  }
  console.log('hey');
  next(HttpError(400, error.message));
};
