import {body, param} from "express-validator";


const postNameValidation = body('title')
    .isString()
    .withMessage('Title must be a string')
    .trim()
    .isLength({ min: 3,  max: 30 })
    .withMessage('Length of title is not correct')

const postDescriptionValidation = body('shortDescription')
    .isString()
    .withMessage('Description must be a string')
    .trim()
    .isLength({ min: 3,  max: 100 })
    .withMessage('Length of description is not correct')

const postContentValidation = body('content')
    .isString()
    .withMessage('Content must be a string')
    .trim()
    .isLength({ min: 3,  max: 1000 })
    .withMessage('Length of Content is not correct')
const postBlogIdValidation = body('blogId')
    .exists()
    .withMessage('ID is required') // Проверка на наличие
    .isString()
    .withMessage('ID must be a string') // Проверка, что это строка
    .isLength({ min: 1 })
    .withMessage('ID must not be empty') // Проверка, что строка не пустая
    .isNumeric()
    .withMessage('ID must be a numeric string');



export const postInputDtoValidation = [
    postNameValidation,
    postDescriptionValidation,
    postContentValidation,
    postBlogIdValidation
];