/*
# Create public portfolio contact messages

1. New Tables
- `contact_messages`
- `id` (uuid, primary key): Unique message identifier.
- `name` (text): Visitor name submitted through the contact form.
- `email` (text): Visitor email address used for follow-up.
- `message` (text): Visitor's message content.
- `created_at` (timestamptz): Timestamp automatically assigned when received.

2. Security
- Row Level Security is enabled.
- This portfolio has no sign-in screen, so anonymous visitors need INSERT access to submit messages.
- Anonymous and authenticated clients can insert messages, but cannot read, update, or delete them from the public browser client.
- The deny-by-default posture protects submitted contact details from public browsing.

3. Important Notes
- This table is intentionally write-only from the public website.
- The portfolio does not expose an admin inbox or message listing.
*/

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(trim(email)) BETWEEN 3 AND 320),
  message text NOT NULL CHECK (char_length(trim(message)) BETWEEN 10 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_can_submit_contact_messages" ON public.contact_messages;
CREATE POLICY "public_can_submit_contact_messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) BETWEEN 1 AND 120
  AND char_length(trim(email)) BETWEEN 3 AND 320
  AND char_length(trim(message)) BETWEEN 10 AND 5000
);

DROP POLICY IF EXISTS "public_cannot_read_contact_messages" ON public.contact_messages;
CREATE POLICY "public_cannot_read_contact_messages"
ON public.contact_messages
FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "public_cannot_update_contact_messages" ON public.contact_messages;
CREATE POLICY "public_cannot_update_contact_messages"
ON public.contact_messages
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "public_cannot_delete_contact_messages" ON public.contact_messages;
CREATE POLICY "public_cannot_delete_contact_messages"
ON public.contact_messages
FOR DELETE
TO anon, authenticated
USING (false);