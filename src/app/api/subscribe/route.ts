import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_API_URL = process.env.MAILCHIMP_API_URL;
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const data = {
      email_address: email,
      status: 'subscribed',
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

    const responseData = await response.json();

    if (!response.ok) {
      if (responseData.title === 'Member Exists') {
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 400 },
        );
      }
      throw new Error(responseData.detail || 'Failed to subscribe');
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 },
    );
  }
}
