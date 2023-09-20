import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);
    const { refreshToken, ...others } = result.data;

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Logged in successfully',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser
};
