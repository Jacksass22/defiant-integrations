import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the database dependencies
vi.mock('@neondatabase/serverless', () => ({
  Pool: vi.fn(),
  neonConfig: {
    webSocketConstructor: null,
  },
}));

vi.mock('drizzle-orm/neon-serverless', () => ({
  drizzle: vi.fn(),
}));

vi.mock('ws', () => ({
  default: vi.fn(),
}));

vi.mock('@shared/schema', () => ({}));

describe('Database Configuration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.DATABASE_URL;
  });

  it('throws error when DATABASE_URL is not set', async () => {
    // Clear the require cache to re-import the module
    delete require.cache[require.resolve('../db')];

    await expect(async () => {
      await import('../db');
    }).rejects.toThrow('DATABASE_URL must be set. Did you forget to provision a database?');
  });

  it('initializes database connection when DATABASE_URL is set', async () => {
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';

    // Clear the require cache to re-import the module
    delete require.cache[require.resolve('../db')];

    const { Pool } = await import('@neondatabase/serverless');
    const { drizzle } = await import('drizzle-orm/neon-serverless');

    // Import the module
    await import('../db');

    expect(Pool).toHaveBeenCalledWith({
      connectionString: 'postgresql://test:test@localhost:5432/test'
    });
    expect(drizzle).toHaveBeenCalled();
  });
});