import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export async function SendEmail(recipient_email, subject, text) {
  try {
    const result = await sgMail.send({
      to: recipient_email,
      from: {
        email: process.env.SENDGRID_SENDER,
        name: "Wuphf Support",
      },
      subject: subject,
      text: text,
    });
    if (result[0].statusCode === 202) {
      console.log(`Successfully sent email to: ${recipient_email}`);
    } else {
      console.log("##### Something went wrong with the email request #####");
    }
  } catch (error) {}
}

export async function SendSMS(phone_number) {
  client.messages.create({
    body: "WUPHF!!!!!!WUPHF!!!!!!",
    to: phone_number, // Text this number
    from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
  });
}
