CREATE TABLE IF NOT EXISTS inquiries (
 id BIGSERIAL PRIMARY KEY, full_name VARCHAR(120) NOT NULL,
 email VARCHAR(180) NOT NULL, country_interest VARCHAR(120),
 travel_month VARCHAR(50), group_size INTEGER, message TEXT,
 created_at TIMESTAMPTZ DEFAULT NOW()
);
