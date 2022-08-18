/* Replace with your SQL commands */
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'transaction_status') THEN
      CREATE TYPE "transaction_status" AS ENUM ('failed', 'pending', 'success');
    END IF;
END$$;


CREATE TABLE IF NOT EXISTS transaction (
   id serial PRIMARY KEY,
   transaction_amount INTEGER UNIQUE,
   type transaction_status DEFAULT 'pending',
   account_id INTEGER REFERENCES account(id),
   created_at TIMESTAMPTZ DEFAULT now(),
   updated_at TIMESTAMPTZ DEFAULT now()
)