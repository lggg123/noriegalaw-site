import { NextResponse } from 'next/server';
import { Mistral } from '@mistralai/mistralai';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    // Validate input
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' }, 
        { status: 400 }
      );
    }
    
    const apiKey = process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      console.error("Missing Mistral API key");
      return NextResponse.json(
        { error: 'API configuration error' }, 
        { status: 500 }
      );
    }
    
    const client = new Mistral({ apiKey });
    const response = await client.chat.complete({
      model: 'mistral-large-latest',
      messages
    });
    
    return NextResponse.json(response);
  } catch (error) {
    console.error("Legal assistant API error:", error);
    return NextResponse.json(
      { error: 'Failed to process request' }, 
      { status: 500 }
    );
  }
}