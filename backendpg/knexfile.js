// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    version: '9.6',
    connection: {
      host : '192.168.60.151',
      user : 'postgres',
      password : '@admin#isgh',
      database : 'teste_postgres',
      schemaName : 'medpoint',
      port: 5433
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
