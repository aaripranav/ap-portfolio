# Resend Email Setup

## Local Development

Your Resend API key is configured in `.env.local` and ready for local testing.

To test locally:
```bash
npm run dev
```

Then visit the contact form and submit a test message.

## Vercel Deployment

To deploy with email functionality on Vercel:

1. Go to your Vercel project dashboard: https://vercel.com/projects
2. Select your `ap-portfolio` project
3. Navigate to **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_4NgML5dS_EYdUYq4KrWq2xqJoXrNVDx4f`
   - **Environments:** Select `Production`, `Preview`, and `Development`
5. Click **Save**
6. Redeploy your project (or push a new commit to trigger automatic redeploy)

## How It Works

- When someone fills out the contact form, it submits to `/api/send-email`
- The serverless function uses your Resend API key to send emails
- Your receive emails at: `aaripranav@gmail.com`
- Users get an automatic confirmation email

## Email Configuration

**From:** Currently using Resend's onboarding domain (`onboarding@resend.dev`)

To use your own domain:
1. Add your domain to Resend dashboard
2. Verify DNS records
3. Update `api/send-email.ts` line 18:
   ```typescript
   from: "your-email@yourdomain.com"
   ```

## Testing

Submit a test contact form entry to verify:
- ✅ Email received in your inbox
- ✅ Confirmation email sent to user
- ✅ Error handling works for invalid emails
