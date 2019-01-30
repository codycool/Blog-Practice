import Express from 'express';
import User from '../models/users';
import { throwError, throwIf, sendError, sendResponse, getCleanUser } from '../utils/mix';
import { getToken } from '../utils/auth';

const router = Express.Router();

router.post('/signin',async (req, res) => {
    try{
        const { email, password} = req.body
        const user = User.findOne({ email })
        .then(
            throwIf(r => !r, 401, 401001, 'Email or password is invalid'),
            throwError(500, 500002, 'Mongoose error')
        )

        const isPassword = user.validatePassword(password)
        .then(
            throwIf(r => !r, 401, 401001, 'Email or password is invalid'),
            throwError(500, 500003, 'bcrypt error')
        )

        const userId = user._id;
        const token = await getToken['JWT']({ userId, email });

        const response = {
            auth: {
                token,
                ...getCleanUser(user)
            },
        }
        sendResponse(res, 200003, 'Signin success')(response)

    }catch(err){
        sendError(res)(error)
    }
});

router.post('/signup', async (req, res) => {
    try {
      const { email, nickname } = req.body
      
      const accountExist = await User.findOne({ email })
      .then(
            throwIf(r => !r, 403, 403002, 'The email has already been registered'),
            throwError(500, 500002, 'Mongoose error')
        )
      
      let newUser = new User(req.body)
      await newUser.save()

      const user = User.findOne({ email })
        .then(
            throwIf(r => !r, 500, 500002, 'Mongoose error'),
            throwError(500, 500002, 'Mongoose error')
        )

      const userId = user._id;
      const token = await getToken['JWT']({ userId, email });

      const response = {
            auth: {
                token,
                ...getCleanUser(user)
            },
        } 
      

      sendResponse(res, 200002, 'Signup success')(response)
    } catch (err) {
        sendError(res)(error)
    }
});

export default router; 