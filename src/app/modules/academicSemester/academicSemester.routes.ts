import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.post('/', AcademicSemesterController.insertIntoDB);

export const academicSemesterRoutes = router;
