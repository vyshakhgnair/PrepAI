const express = require('express');
const app = express();
app.use(express.json());



const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://bfwjbnfzwdcjssavckeo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmd2pibmZ6d2RjanNzYXZja2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMDQ3NzAsImV4cCI6MjAyNzg4MDc3MH0.yKrytP2c74ya7RsrnRjzNVQwlHpL9-TGpu_nb9FqiBU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) return res.status(401).json({ error: error.message });
  return res.status(201).json({ user });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });
  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json({ user });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });