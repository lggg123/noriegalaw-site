import { NextResponse } from 'next/server';
import { mistralClient } from '@/lib/mistral';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }
    
    const response = await mistralClient.chat.complete({
      model: "mistral-tiny",
      messages: [{ role: "user", content: message }],
    });

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}