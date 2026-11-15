# East Africa Discovery
A responsive culture-led tourism discovery website covering the eight East African Community partner states: Burundi, Democratic Republic of the Congo, Kenya, Rwanda, Somalia, South Sudan, Tanzania and Uganda.

## Stack
Node.js 20+, Express, PostgreSQL, HTML/CSS/JavaScript.

## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `DATABASE_URL`, `PGSSL` and `ADMIN_API_KEY`.
4. Run `schema.sql` against your PostgreSQL database.
5. Run `npm start` and visit http://localhost:3000.

The editorial website loads without a database; enquiry submissions require PostgreSQL.

## Render deployment
1. Push all project files to a GitHub repository.
2. Create a PostgreSQL database on Render.
3. Create a Web Service connected to the repository.
4. Build command: `npm install`; Start command: `npm start`; Root Directory blank if files are at repository root.
5. Add `DATABASE_URL` (Render Internal Database URL), `PGSSL=true` if required, and a strong random `ADMIN_API_KEY`.
6. Run `schema.sql` on the database, deploy, and test `/api/health` and the enquiry form.

## API
- GET `/api/health`
- GET `/api/countries`
- POST `/api/inquiries`
- GET `/api/admin/inquiries` (requires `x-admin-key`)

## Before launch
Replace sample images with imagery you own or have licensed for commercial use. Verify all destination information, contact details, visa/entry requirements, travel logistics and current government travel advisories. Security conditions vary substantially: South Sudan, Somalia and parts of the DRC require current, region-specific risk assessment. This is an enquiry site, not a booking or payment platform. It does not confirm reservations.
