import Express from 'express';
import articles from './articles';
import auth from './auth';

const router = Express.router();

router.use('/auth',auth);
router.use('/articles',articles);

router.use((req, res, next) => {
  var err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

router.use((err, req, res, next) => { 
    res.status(err.statusCode || 500);
    res.json({
      status: err.status || 'Error',
      message: err.message || 'System Error',
      code: err.code || '50001'
    });
});

export default router;

