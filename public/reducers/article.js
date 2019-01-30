const initialState ={
    articleList: [],
    articleDetail: {},
    pageNum: 1,
    total: 0,
    title:'',
    content:'',
};

export const actionTypes = {
    SAVE_ARTICLE_SUCCESS: 'SAVE_ARTICLE_SUCCESS',
    SAVE_ARTICLE_REQUEST: 'SAVE_ARTICLE_REQUEST',
    SAVE_ARTICLE_FAILURE: 'SAVE_ARTICLE_FAILURE',
    DELETE_ARTICLE_SUCCESS: 'DELETE_ARTICLE_SUCCESS',
    DELETE_ARTICLE_REQUEST: 'DELETE_ARTICLE_REQUEST',
    DELETE_ARTICLE_FAILURE: 'DELETE_ARTICLE_FAILURE',
    GET_ARTICLES_SUCCESS: 'GET_ARTICLES_SUCCESS',
    GET_ARTICLES_REQUEST: 'GET_ARTICLES_REQUEST',
    GET_ARTICLES_FAILURE: 'GET_ARTICLES_FAILURE',
    GET_ARTICLE_DETIAL_SUCCESS: 'GET_ARTICLE_DETIAL_SUCCESS',
    GET_ARTICLE_DETIAL_REQUEST: 'GET_ARTICLE_DETIAL_REQUEST',
    GET_ARTICLE_DETIAL_FAILURE: 'GET_ARTICLE_DETIAL_FAILURE', 
}

export const actions = {
    saveArticleRequest: (formData) => {
        return {
            type: actionTypes.SAVE_ARTICLE_REQUEST,
            formData,
        }
    },
    saveArticleSuccess: (response) => {
        return {
            type: actionTypes.SAVE_ARTICLE_SUCCESS,
            response,
        }
    },
    saveArticleFailure: (error) => {
        return {
            type: actionTypes.SAVE_ARTICLE_FAILURE,
            error,
        }
    },
    deleteArticleRequest: (formData) => {
        return {
            type: actionTypes.DELETE_ARTICLE_REQUEST,
            formData,
        }
    },
    deleteArticleSuccess: (response) => {
        return {
            type: actionTypes.DELETE_ARTICLE_SUCCESS,
            response,
        }
    },
    deleteArticleFailure: (error) => {
        return {
            type: actionTypes.DELETE_ARTICLE_FAILURE,
            error,
        }
    },
    getArticlesRequest: (formData) => {
        return {
            type: actionTypes.GET_ARTICLES_REQUEST,
            formData,
        }
    },
    getArticlesSuccess: (response) => {
        return {
            type: actionTypes.GET_ARTICLES_SUCCESS,
            response,
        }
    },
    getArticlesFailure: (error) => {
        return {
            type: actionTypes.GET_ARTICLES_FAILURE,
            error,
        }
    },
    getArticleDetialRequest: (formData) => {
        return {
            type: actionTypes.GET_ARTICLE_DETIAL_SUCCESS,
            formData,
        }
    },
    getArticleDetialSuccess: (response) => {
        return {
            type: actionTypes.GET_ARTICLE_DETIAL_SUCCESS,
            response,
        }
    },
    getArticleDetialFailure: (error) => {
        return {
            type: actionTypes.GET_ARTICLE_DETIAL_FAILURE,
            error,
        }
    },
}

export const articles = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                token: action.response.token,
            }
        case actionTypes.SIGNIN_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}