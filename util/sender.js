import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function SendEmail(recipient_email, subject, text) {
  try {
    const result = await sgMail.send({
      to: recipient_email,
      from: process.env.SENDGRID_SENDER,
      subject: subject,
      text: text,
    });
    console.log(result);
    console.log(`Successfully sent email to: ${recipient_email}`);
  } catch (error) {}
}
