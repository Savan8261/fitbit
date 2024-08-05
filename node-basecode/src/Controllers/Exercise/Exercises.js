const uploadFileToFirebase = require('../../config/Firebase/firebase-upload');
const { Exercise } = require('../../database/models/index');
const AppError = require('../../utils/appError');
const fs = require('fs');
const deleteFileFromFirebase = require('../../config/Firebase/firebase-delete');

const AddExercise = async (req, res, next) => {
  console.log(req);
  const { file, logo } = req.files;
  if (file == undefined || logo == undefined) {
    return next(new AppError('Please upload a file', 400));
  }
  const filePath = `SYSTEM/EXERCISES/${file[0].filename}`;
  const filePublicUrl = await uploadFileToFirebase(file[0], filePath);
  fs.unlinkSync(file[0].path);

  // Upload logo to Firebase
  const logoPath = `SYSTEM/EXERCISES/${logo[0].filename}`;
  const logoPublicUrl = await uploadFileToFirebase(logo[0], logoPath);
  fs.unlinkSync(logo[0].path);

  const data = {
    uuid: req.body.uuid,
    name: req.body.name,
    description: req.body.description,
    logo: logoPublicUrl,
    file: filePublicUrl,
    type: req.body.type,
    setOfExercise: req.body.setOfExercise,
    exerciseCategory: req.body.exerciseCategory,
    status: req.body.status || true,
  };
  try {
    const exercise = await Exercise.create(data);
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

const GetExercises = async (req, res, next) => {
  try {
    const data = await Exercise.findAll();
    res.send(data);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const GetExerciseById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const exercise = await Exercise.findOne({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const GetExerceisesByCategoryId = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const exercise = await Exercise.findAll({
      where: {
        exerciseCategory: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const DeleteExercise = async (req, res, next) => {
  const id = req.params.id;
  try {
    const exercise = await Exercise.destroy({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const UpdateExercise = async (req, res, next) => {
  const id = req.params.id;
  let currentExercise;
  const oldExercise = await Exercise.findOne({ where: { id } });
  currentExercise = oldExercise.dataValues;
  if (!currentExercise) {
    return next(new AppError("Exercise entry not found", 404));
  }

  console.log(req.files.logo[0].filename)
  console.log(req.files.file[0].filename)

  if(req.files.logo){
  // Upload logo to Firebase
  const logoPath = `SYSTEM/EXERCISES/${req.files.logo[0].filename}`;
  const oldLogoUrl = currentExercise.logo;
  const oldFilePath = oldLogoUrl.replace('https://storage.googleapis.com/fitbit-ca9f5.appspot.com/', '');
  await deleteFileFromFirebase(oldFilePath);
  const logoPublicUrl = await uploadFileToFirebase(req.files.logo[0], logoPath);
  fs.unlinkSync(req.files.logo[0].path);
  req.body.logo = logoPublicUrl;
  }


  if(req.files.file){

  // Upload File to Firebase
  const filePath = `SYSTEM/EXERCISES/${req.files.file[0].filename}`;
  const oldFileUrl = currentExercise.file;
  const oldFilePath = oldFileUrl.replace('https://storage.googleapis.com/fitbit-ca9f5.appspot.com/', '');
  await deleteFileFromFirebase(oldFilePath);
  const filePublicUrl = await uploadFileToFirebase(req.files.file[0], filePath);
  fs.unlinkSync(req.files.file[0].path);
  req.body.file = filePublicUrl;
  }




  const data = {
    uuid: req.body.uuid,
    name: req.body.name,
    description: req.body.description,
    logo: req.body.logo || currentExercise.logo,
    file: req.body.file || currentExercise.file,
    type: req.body.type,
    setOfExercise: req.body.setOfExercise,
    exerciseCategory: req.body.exerciseCategory,
    status: req.body.status || true,
  };
  try {
    const exercise = await Exercise.update(data, {
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  AddExercise,
  GetExercises,
  GetExerciseById,
  DeleteExercise,
  UpdateExercise,
  GetExerceisesByCategoryId,
};
