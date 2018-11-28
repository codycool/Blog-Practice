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

export const sendResponse = (res, code) => data => {
    res.status(200).json({status: 'Success', code, data})
}

export const sendError = (res) => error => {   
    res.status(error.statusCode).json({status: 'Error', code: error.code, message: error.message})
}