-- Supabase RAG System Setup
-- Run these commands in your Supabase SQL Editor

-- 1. Enable the vector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Create the documents table
CREATE TABLE IF NOT EXISTS documents (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  content text NOT NULL,
  metadata jsonb DEFAULT '{}',
  embedding vector(1536), -- OpenAI embedding dimension
  created_at timestamp with time zone DEFAULT now()
);

-- 3. Create an index on the vector column for faster similarity search
CREATE INDEX IF NOT EXISTS documents_embedding_idx ON documents 
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- 4. Create the match_documents function that your n8n workflow expects
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.78,
  match_count int DEFAULT 10
)
RETURNS TABLE (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.content,
    documents.metadata,
    (1 - (documents.embedding <=> query_embedding)) AS similarity
  FROM documents
  WHERE 1 - (documents.embedding <=> query_embedding) > match_threshold
  ORDER BY documents.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- 5. Enable Row Level Security (optional but recommended)
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- 6. Create a policy to allow read access (adjust as needed for your security requirements)
CREATE POLICY "Allow public read access" ON documents FOR SELECT USING (true);

-- 7. Sample insert for testing (you can remove this after testing)
INSERT INTO documents (content, metadata) VALUES 
(
  'Defiant Integrations is a premier AI consulting firm specializing in digital transformation and strategic AI implementation.',
  '{"source": "company_info", "type": "overview"}'
);

-- Note: You'll need to generate and insert the actual embeddings for the content
-- This typically requires calling OpenAI's embedding API from your application