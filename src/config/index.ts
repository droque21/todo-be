export const config = {
  port: process.env.PORT || 8080,
  host: process.env.HOST || 'localhost',
  db: {
    uri: process.env.DB_URI || 'mongodb+srv://admin:D53pHaGIC4PqaNZ2@cluster.nerwf.mongodb.net/todoApp?retryWrites=true&w=majority',
  },
  jwtSecret: process.env.JWT_SECRET || '%$#@!',
}