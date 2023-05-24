export const PhotoValidator = (file: File) => {
  let error = null;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (!allowedExtensions.exec(file.name)) {
    error = "File format not supported. Upload a .jpg, .jpeg or .png file";
  }

  return error;
};
