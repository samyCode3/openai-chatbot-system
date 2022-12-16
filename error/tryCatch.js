module.exports = {
    tryAndCatch: (controllers) => async (req, res, next) => {
    try {
        await controllers(req, res)
    } catch (error) {
         return next(error)
    }   
}}