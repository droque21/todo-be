export const errorHandlingMiddleware = (err, req, res, next) => {
  err.statusCode ??= 500;
  return err.customMessage || err.message
    ? res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.customMessage || err.message,
      erros: err.arrayMessages || []
    })
    : res.status(err.statusCode).json({ status: err.statusCode, message: err });
}