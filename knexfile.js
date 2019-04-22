// Update with your config settings.
localPgConnection = {
  host: 'localhost', 
  database: 'blackhole',
  user: 'me',
  password: 'password'
} // dummy version so the app doesn't crash

const prodDbConnection = process.env.DATABASE_URL || localPgConnection; 


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/blackhole.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: prodDbConnection,
    ssl: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    }, 
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection,

    migrations: {
      directory: './database/migrations'
    }, 
    seeds: {
      directory: './database/seeds'
    }
  }

};
