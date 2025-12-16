import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Simulated user data
const simulatedUsers = [
  { id: 1, email: 'user@example.com', password: 'password123', role: 'user' },
  { id: 2, email: 'admin@example.com', password: 'admin123', role: 'admin' },
];

export async function checkDatabaseConnection() {
  // Simulate a successful connection
  return { connected: true, message: 'Database connected successfully' };
}

export async function loginUser(email: string, password: string) {
  try {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if the user exists in our simulated data
    const user = simulatedUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      return { user: null, error: 'Invalid email or password' };
    }

    // Simulate a successful login
    return { user, error: null };
  } catch (error) {
    console.error('Login error:', error);
    return { user: null, error: 'An unexpected error occurred' };
  }
}