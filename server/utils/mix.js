export const throwError = (statusCode, code, errorMessege) => error => {
    if(!error) error = new Error (errorMessege || 'Default Error')
    error.statusCode = statusCode
    error.code = code
    throw error
}


export const throwIf = (fn, statusCode, code, errorMessege) => result => {
    if(fn(result)){
        return throwError(statusCode, code, errorMessege)()
    }
    return result
}

export const sendResponse = (res, code, message) => data => {
    res.status(200).json({status: 'Success', code, message, data})
}

export const sendError = (res) => error => {   
    res.status(error.statusCode).json({status: 'Error', code: error.code, message: error.message})
}

export const getCleanUser = (user) => {
  const u = user.toObject()
  return {
    id: u._id,
    nickname: u.nickname,
    email: u.email,
    avatar: u.avatar,
  }
}

export const getCleanArticle = (article) => {
  const { author } = article
  const a = article.toObject()
  return {
    id: a._id,
    author: getCleanUser(author),
    title: a.title,
    content: a.content,
    viewCount: a.likeCount,
    isPublish: a.dislikeCount,
    CommentCount: a.realCommentCount,
    created_time: a.createdAt,
  }
}