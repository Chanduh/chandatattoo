import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAILTO = process.env.EMAILTO;
const EMAILFROM = process.env.EMAILFROM;
const PASSWORD = process.env.PASS;
const KEY = process.env.KEY;

export async function POST(request){
  const formData = await request.json();
  console.log(formData)

  const resend = new Resend(KEY);
    try {
      const data = await resend.emails.send({
        from: EMAILFROM,
        to: EMAILTO,
        subject: `Seppukoool Form Submission`,
        html: `${JSON.stringify(formData)}`
      });
      console.log(data);
      return NextResponse.json({ formData });

    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'Form submission failed' }, { status: 500 });    
    }
}
