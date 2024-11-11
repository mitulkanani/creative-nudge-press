import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_API_URL = process.env.MAILCHIMP_API_URL;

    const { name, email, subject, message } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email is required' },
        { status: 400 },
      );
    }

    const data = {
      name: name || '',
      email,
      subject: subject || '',
      message: message || '',
    };

    const response = await fetch(
      `${MAILCHIMP_API_URL}/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    console.log(response, 'data');
    const responseData = await response.json();

    if (!response.ok) {
      if (responseData.title === 'Member Exists') {
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 400 },
        );
      }
      throw new Error(responseData.detail || 'Failed to submit the form');
    }

    return NextResponse.json(
      { message: 'Successfully submitted your message!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 },
    );
  }
}
