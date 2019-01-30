import Express from 'express';
import Article from '../models/articles';
import { throwError, throwIf, sendError, sendResponse, getCleanArticle } from '../utils/mix';

const router = Express.Router();

router.get('/getArticles',async (req, res) => {
    try {
        let isPublish = req.query.isPublish;
        let searchCondition = {
            isPublish,
        };
        if (isPublish === 'false') {
            searchCondition = null
        }
        let skip = (req.query.pageNum - 1) == 0 ? 0 : (req.query.pageNum - 1) * 5;
        let total = await Article.count(searchCondition)
        let articles = await Article.find(searchCondition).select('-comments -tags').skip(skip).limit(5).populate('author').exe()
        
        const response = {
            total: total,
            articles: articles.map(article => getCleanArticle(article))
        }
        
        sendResponse(res, 200005, 'Get articles success')(response)
    } catch (err) {
        sendError(res)(error)
    }

});

router.get('/getArticleDetail/:articleID',async (req, res) => {
    try{
        // 檢查 articleID 是否存在
        const { articleID } = req.params
        const article = await Article.findById(articleID)
        .then(
            throwIf(r => !r, 404, 404003, 'This article is not exist'),
            throwError(500, 500002, 'Mongoose error')
        )
        let viewCount = article.viewCount
        const updatedArticle = await Article.findByIdAndUpdate(articleID, {viewCount: viewCount+1} , { new: true })
        await updatedArticle.populate('author').exec()

        const response = {
            article: getCleanArticle(updatedArticle)
        }
        sendResponse(res, 200006, 'Get article detial success')(response)
    } catch(err){
        sendError(res)(error)
    }
});

router.get('/deleteArticle/:articleID',async (req, res) => {
    try {
      // 從 token 找回 user id
      const authorization = req.get('Authorization')
      const { userId } = await checkAuth(authorization)
      .then(
          throwIf(r => !r, 401, 401002, 'Token is not valid or expired'),
          throwError(401, 401002, 'Token is not valid or expired')
      )
      
      // 檢查 articleID 是否存在
      const { articleID } = req.params
      const article = await Article.findById(articleID)
      .then(
          throwIf(r => !r, 404, 404003, 'This article is not exist'),
          throwError(500, 500002, 'Mongoose error')
      )
      // 只有作者本人才可刪除文章
      let { author } = article
      author = author.toString()
      if (author !== userId) {
        throwError(403, 403005, `Delete other people's post is not allowed`)
      }
      // (1) Delete the target post
      const updatedArticle = await Article.findByIdAndRemove(articleID)
      
      sendResponse(res, 200008, 'Delete article success')("")
    } catch (err) {
      sendError(res)(error)
    }

});

router.post('/addArticle',async (req, res) => {
    try {
      // 從 token 找回 user id
      const authorization = req.get('Authorization')
      const { userId } = await checkAuth(authorization)
      .then(
          throwIf(r => !r, 401, 401002, 'Token is not valid or expired'),
          throwError(401, 401002, 'Token is not valid or expired')
      )

      const article = {
        author: userId,
        ...req.body,
      }

      const article = new Article(article)
      await article.save()
      await article.populate('author').exec()

      const response = {
        article: getCleanArticle(article)
      }
      sendResponse(res, 200004, 'Add article success')(response)
    } catch (err) {
        sendError(res)(error)
    }
});

router.post('/updateArticle/:articleID',async (req, res) => {
    try {
      // 從 token 找回 user id
      const authorization = req.get('Authorization')
      const { userId } = await checkAuth(authorization)
      .then(
          throwIf(r => !r, 401, 401002, 'Token is not valid or expired'),
          throwError(401, 401002, 'Token is not valid or expired')
      )
      // 檢查 articleID 是否存在
      const { articleID } = req.params
      const article = await Article.findById(articleID)
      .then(
          throwIf(r => !r, 404, 404003, 'This article is not exist'),
          throwError(500, 500002, 'Mongoose error')
      )
      // 只有作者本人才可編輯文章
      let { author } = article
      author = author.toString()
      if (author !== userId) {
        throwError(403, 403004, `Edit other people's post is not allowed`)
      }
      const updatedArticle = await Article.findByIdAndUpdate(articleID, req.body, { new: true })
      
      sendResponse(res, 200007, 'Update article success')("")
    } catch (err) {
      sendError(res)(error)
    }

});

export default router;