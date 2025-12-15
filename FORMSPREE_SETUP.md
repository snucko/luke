# Formspree Integration Guide

## Overview

This website uses **Formspree** to collect and manage booking inquiries from the contact form.

**Formspree Form ID**: `xyznjjld`  
**Formspree Dashboard**: https://formspree.io/forms

## How It Works

1. **User fills form** at `/contact.html`
2. **Form validates** input fields (HTML5)
3. **JavaScript submits** form data via AJAX to Formspree
4. **Formspree processes** the data
5. **Email notification** sent (configured in dashboard)
6. **Data stored** in Formspree inbox for viewing
7. **User sees** success message

## Form Fields

The contact form collects:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | text | Yes | Full name |
| email | email | Yes | Email address |
| phone | tel | No | Phone number |
| eventType | select | Yes | Type of event |
| date | date | Yes | Preferred date |
| message | textarea | No | Additional details |

### Event Types
- Birthday Party
- Corporate Event
- Wedding
- Private Event
- Other

## Formspree Dashboard

### Access Dashboard
1. Go to https://formspree.io/forms
2. Sign in with your account
3. Select "Magic by Luke" project
4. View form labeled "xyznjjld"

### View Submissions

**Inbox Tab:**
- See all received submissions
- View submission details
- Download as CSV/JSON
- Export to integrations

**Settings Tab:**
- Configure target email address
- Set spam filtering rules
- Enable autoresponse emails
- Configure integrations

## Configuration Options

### Email Notifications

**Current Setup:**
- All submissions sent to configured email
- Automatic notifications enabled

**To Change Email:**
1. Open Formspree dashboard
2. Select form "xyznjjld"
3. Go to Settings → General
4. Update "Target Email" address
5. Save changes

### Auto-Response Email

**Enable Automatic Reply:**
1. Dashboard → Settings → Autoresponse
2. Create email template
3. Enable "Send autoresponse"
4. Save

**Example Template:**
```
Subject: Thank You for Contacting Magic by Luke

Hi {{name}},

Thank you for your inquiry! We've received your booking request for {{eventType}}.

We'll review your details and get back to you within 24 hours to confirm availability and discuss details.

Best regards,
Magic by Luke
luke.tivnan@gmail.com
```

### Integrations

**Available Integrations:**
- Email (default)
- Slack - Get notifications in Slack
- Discord - Send to Discord channel
- Google Sheets - Auto-populate spreadsheet
- Airtable - Store in Airtable
- Mailchimp - Add to email list
- Webhooks - Custom integrations

**Enable Integration Example (Slack):**
1. Dashboard → Settings → Integrations
2. Click "Add Integration"
3. Select "Slack"
4. Authorize Slack account
5. Select target channel
6. Save

**Enable Integration Example (Google Sheets):**
1. Dashboard → Settings → Integrations
2. Click "Add Integration"
3. Select "Google Sheets"
4. Authorize Google account
5. Select or create spreadsheet
6. Map form fields to columns
7. Save

## Code Implementation

### Form HTML
```html
<contact-form></contact-form>
```

### JavaScript Implementation
**File**: `js/components/ContactForm.js`

**Key Details:**
```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyznjjld';

async handleSubmit(e) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: new FormData(e.target),
    headers: { 'Accept': 'application/json' }
  });
  
  if (response.ok) {
    // Show success message
    this.message = '✓ Thank you! We\'ll contact you soon.';
  } else {
    // Show error message
    this.message = 'Error submitting form.';
  }
}
```

### How AJAX Works

**Instead of:**
```html
<form action="https://formspree.io/f/xyznjjld" method="POST">
```
(Which reloads the page)

**We use:**
```javascript
fetch('https://formspree.io/f/xyznjjld', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
})
```
(No page reload, AJAX submission)

## Troubleshooting

### Form Not Submitting

**Check 1: Correct Endpoint**
- Verify endpoint in `ContactForm.js`
- Should be: `https://formspree.io/f/xyznjjld`

**Check 2: Form Validation**
- All required fields must be filled
- Email must be valid format
- Date must be valid

**Check 3: Browser Console**
- Open DevTools (F12)
- Go to Console tab
- Check for error messages
- Look for CORS errors

**Check 4: Network Tab**
- Open DevTools → Network tab
- Submit form
- Look for request to formspree.io
- Check response status (should be 200)

### Not Receiving Email Notifications

**Check 1: Target Email Set**
1. Dashboard → Settings → General
2. Verify "Target Email" is configured
3. Confirm email is correct

**Check 2: Check Spam Folder**
- Formspree emails might go to spam
- Add to contacts to whitelist

**Check 3: Email Limits**
- Free plans have submission limits
- Check quota in dashboard
- Upgrade plan if needed

### Submissions Not Appearing in Dashboard

**Check 1: Form ID**
- Verify form ID is correct: `xyznjjld`
- Dashboard should show this form

**Check 2: Browser Cache**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Reload dashboard

**Check 3: Account Access**
- Ensure logged into correct Formspree account
- Check email address is verified

## Data Security

### Privacy
- Formspree complies with GDPR
- No tracking cookies on form
- Data encrypted in transit
- See [Formspree Privacy Policy](https://formspree.io/legal/privacy-policy/)

### Spam Protection
- Built-in spam filtering
- Machine learning detection
- Optional reCAPTCHA v2/v3
- Custom spam rules available

### Enable reCAPTCHA (if needed)
1. Dashboard → Settings → Spam
2. Enable "reCAPTCHA"
3. Choose v2 (checkbox) or v3 (invisible)
4. Save

## Monitoring & Analytics

### View Stats
- **Submissions Tab**: See all submissions
- **Analytics**: View trends over time
- **Export**: Download data as CSV/JSON

### Set Up Alerts
1. Dashboard → Settings → Alerts
2. Enable email notification
3. Set frequency (immediate, daily, weekly)
4. Specify alert triggers

## Changing Configuration

### Update Endpoint
If you need to change the Formspree form:

1. Create new form in Formspree dashboard
2. Get new form endpoint: `https://formspree.io/f/NEW_ID`
3. Update `ContactForm.js`:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/NEW_ID';
   ```
4. Commit and push changes
5. Test form on live site

### Add New Form Field

**In HTML** (`contact.html`):
```html
<label for="new-field">New Field</label>
<input type="text" id="new-field" name="new_field_name">
```

**Note:**
- `name` attribute must be unique
- Field automatically appears in Formspree submissions
- No code changes needed in `ContactForm.js`

## Formspree Plans

### Current Plan
- **Free Plan**: 50 submissions/month
- **Recommended for**: Low-traffic sites

### If You Need More

**Premium Plan Features:**
- Unlimited submissions
- Custom email templates
- Advanced spam filtering
- Priority support
- API access
- Webhooks

**Upgrade at**: https://formspree.io/plans

## Best Practices

### For Business Use
1. ✅ Set target email to business email
2. ✅ Enable autoresponse email
3. ✅ Add Slack/Discord integration
4. ✅ Monitor submissions weekly
5. ✅ Set up backup storage (Google Sheets)

### For Data Management
1. ✅ Export submissions regularly
2. ✅ Archive old submissions
3. ✅ Use integrations for backup
4. ✅ Monitor for spam

### For User Experience
1. ✅ Enable autoresponse for confirmation
2. ✅ Keep required fields minimal
3. ✅ Test form regularly
4. ✅ Monitor response times

## Support

### Formspree Help
- **Help Site**: https://help.formspree.io/
- **Status**: https://status.formspree.io/
- **Email Support**: help@formspree.io

### Magic by Luke Support
- **Email**: luke.tivnan@gmail.com
- **Repository**: https://github.com/snucko/luke

## Next Steps

1. **Verify Setup**: Test form at `/contact.html`
2. **Check Dashboard**: View submissions at Formspree
3. **Configure Email**: Set target email in Settings
4. **Enable Integrations**: Add Slack/Sheets if desired
5. **Set Up Autoresponse**: Create welcome email
6. **Monitor Regularly**: Check submissions weekly

---

**Formspree Form ID**: xyznjjld  
**Last Updated**: December 14, 2025  
**Status**: ✅ Active & Configured
