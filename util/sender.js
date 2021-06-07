import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function SendEmail(recipient_email, subject, text) {
  try {
    const result = await sgMail.send({
      to: recipient_email,
      from: "arampenthal@outlook.com",
      subject: subject,
      text: text,
    });
    console.log(`Successfully send email to: ${recipient_email}`);
  } catch (error) {}
}
