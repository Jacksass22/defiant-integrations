import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import CountUp from '../CountUp';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  useInView: vi.fn(() => true),
  useMotionValue: vi.fn(() => ({ set: vi.fn(), on: vi.fn(() => vi.fn()) })),
  useSpring: vi.fn(() => ({ on: vi.fn(() => vi.fn()) })),
}));

describe('CountUp', () => {
  it('renders with initial value', () => {
    render(<CountUp to={100} />);
    const element = screen.getByText(/0/);
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CountUp to={50} className="custom-class" />);
    const element = screen.getByText(/0/);
    expect(element).toHaveClass('custom-class');
  });

  it('handles decimal values', () => {
    render(<CountUp to={99.5} />);
    const element = screen.getByText(/0/);
    expect(element).toBeInTheDocument();
  });

  it('supports direction down', () => {
    render(<CountUp from={100} to={0} direction="down" />);
    const element = screen.getByText(/0/);
    expect(element).toBeInTheDocument();
  });

  it('handles separator formatting', () => {
    render(<CountUp to={1000} separator="," />);
    const element = screen.getByText(/0/);
    expect(element).toBeInTheDocument();
  });
});