module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfhghjcgqg40klh9v3pg-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'miusiq'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '1YcwK5yStkGqjqqq5JfjNp5564CGludm'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
