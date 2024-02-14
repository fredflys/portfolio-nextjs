// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("email: ", email);
  try {
    const data = await resend.emails.send({
      from: `Visitor <${process.env.FROM_EMAIL}>`,
      to: ["fredskyward@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            Thank you for contacting me. I have received your email and will get
            back to you asap. Take care!
          </p>
          <h5>message:</h5>
          <p>{message}</p>
        </>
      ),
    });
    console.log("data: ", data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
