import {post, get} from './fetch';
import auth from './authAPI'

const getWithToken = (api ,token) => get(api, {
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
})

const postWithToken = (api, form, token) => post(api, form, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
})



const articleAPI = {
    getArticles(query){
        return get(`/v1/articles/getArticles?pageNum=${query.pageNum}&isPublish=${query.isPublish}`)
    },
    getArticleDetial(article){
        return get(`/v1/articles/getArticleDetail/${article.id}`)
    },
    saveArticle(article){
        return postWithToken('/v1/articles/addArticle', article, auth.getToken)
    },
    deleteArticle(article){
        return getWithToken(`/v1/articles/deleteArticle/${article.id}`, auth.getToken)
    },
    updateArticle(article){
        return postWithToken(`/v1/articles/updateArticle/${article.id}`, article, auth.getToken)
    }
}

export default articleAPI