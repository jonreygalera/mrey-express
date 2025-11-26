import { Request, Response } from 'express';
import { createUser, deleteByUserById, getUserByEmail, getUserById, getUsers } from '../models/user/user.entity';
import { authentication } from '../../utils/auth';
import { random } from '../../core/utils/str.util';
import { errLog, infoLog } from '../../core/utils/logger.util';

export const getUserLists = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    errLog('Get user lists error:', error);
    return res.sendStatus(400);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      username
    } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingEmail = await getUserByEmail(email);

    if(existingEmail) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password)
      }
    });

    res.status(200).json(user).end();
  } catch(error) {
    errLog('Register user error:', error);
    res.sendStatus(400);
  }
}


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteByUserById(id);
    return res.json(deletedUser);
  } catch (error) {
    errLog('Delete user error:', error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if(!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);
    if(!user) {
      return res.sendStatus(404);
    }

    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    infoLog('Update User error:', error);
    return res.sendStatus(400);
  }
}