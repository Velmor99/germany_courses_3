const formData = require('form-data');
import Mailgun, { MessagesSendResult } from 'mailgun.js';
import { MailgunFormData } from './mailgun.props';
const mailgun = new Mailgun(formData);
const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API_KEY || ""
const USERNAME = process.env.NEXT_PUBLIC_MAILGUN_USERNAME || ""
const DOMAIN = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN || ""
const mg = mailgun.client({username: USERNAME, key: API_KEY});

export const sendMail = async ({phone, email, name, country, webpage}: MailgunFormData): Promise<MessagesSendResult> => {
  const msg = await mg.messages.create(DOMAIN, {
    from: "'Welingua' <weinfo@welingua.com>",
    to: ["weinfo@welingua.com"],
    subject: "Welingua new customer",
    text: `name: ${name}\nemail: ${email}\nphone: ${phone}\ncountry: ${country}\nfrom page: ${webpage}`
  })
  return msg;
  // .catch(err => {throw new Error(err)});
}