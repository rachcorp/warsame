import { NextResponse } from 'next/server';

// Update these constants with your specific form details
const FORM_API_BASE = 'https://forms.office.com/formapi/api';
const FORM_ID = 'b5a77831-48df-4ab3-8f68-40cdfb6976c2';
const USER_ID = 'd18d0c2c-3d71-443a-838a-17a0a65300ad';
const FORM_UNIQUE_ID = 'MXintd9Is0qPaEDN-2l2wiwMjdFxPTpEg4oXoKZTAK1UMkM4NU1HWFlaRzE3S0pNTTY5V0tBT1lRVS4u';

export async function POST(request: Request) {
  try {
    console.log('Starting POST request processing');
    const body = await request.json();
    console.log('Received body:', body);
    
    const { email, firstName, lastName, telephone } = body;

    // Validate required fields
    if (!email || !firstName || !lastName) {
      console.log('Validation failed:', { email, firstName, lastName });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiUrl = `${FORM_API_BASE}/${FORM_ID}/users/${USER_ID}/forms('${FORM_UNIQUE_ID}')/responses`;
    
    // Create answers array as a string to match exact format
    const answers = JSON.stringify([
      {
        questionId: 'r556d2147eb574c71abc3a5f84ebf6698',
        answer1: email
      },
      {
        questionId: 'rde0c3302ac17453197d4e472794e1cd2',
        answer1: firstName
      },
      {
        questionId: 'r4e0b1bac96df4ad6916c77109e053d53',
        answer1: lastName
      },
      {
        questionId: 'r0ffc0605b9f4434b9174cc4004817282',
        answer1: telephone || null
      }
    ]);

    const formPayload = {
      startDate: new Date().toISOString(),
      submitDate: new Date().toISOString(),
      answers: answers  // Note: this is already a string
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://forms.office.com',
          'Referer': 'https://forms.office.com/',
          '__requestverificationtoken': 'qg51wDbSrIFIrQwNQPm0BI4g-8g7pWPlfBZ6wShTF8CBiTSISZR1LIMcYb-Vbyb_8CvBAGk5N82r4sEflJro9HmZZDk1FOlTeJGwzfrmw3-ihTc8VoSOodVCAFaVL5dCi6aS_W2HQLaBtnAX2YGw9g2',
          'odata-maxverion': '4.0',
          'odata-version': '4.0',
          'x-correlationid': crypto.randomUUID(),
          'x-ms-form-request-ring': 'business',
          'x-ms-form-request-source': 'ms-formweb',
          'x-usersessionid': crypto.randomUUID()
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(formPayload),
      });

      const responseText = await response.text();
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers));
      console.log('Response body:', responseText);

      if (!response.ok) {
        console.error('Failed response:', {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        });
        throw new Error(`Forms API Error: Status ${response.status}, Body: ${responseText}`);
      }

      return NextResponse.json({ 
        success: true,
        message: 'Thank you for joining the movement!' 
      });

    } catch (error) {
      console.error('Form submission error:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      return NextResponse.json(
        { 
          error: 'Failed to submit form',
          details: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Request processing error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 