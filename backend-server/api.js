// api.js
const BASE_URL = 'https://api.example.com';

export async function sendOTP(email) {
  try {
    const response = await fetch(`${BASE_URL}/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error };
    }
  } catch (error) {
    return { success: false, error: 'An error occurred.' };
  }
}
