import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.post(
  '/api/posts/new',
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, content } = req.body;

    if (!title || !content) {
      const error = new Error('Title and content are required') as CustomError;
      error.status = 400;
      return next(error);
    }
    res.send('Hi there!');
  }
);

export { router as newPostRouter };
