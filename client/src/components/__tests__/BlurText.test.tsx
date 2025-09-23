import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import BlurText from '../BlurText';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    span: vi.fn(({ children, ...props }) => <span {...props}>{children}</span>),
  },
}));

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

describe('BlurText', () => {
  it('renders text content', () => {
    render(<BlurText text="Hello World" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('splits text by words by default', () => {
    render(<BlurText text="Hello World Test" />);
    const spans = screen.getAllByText(/Hello|World|Test/);
    expect(spans).toHaveLength(3);
  });

  it('splits text by letters when animateBy is letters', () => {
    render(<BlurText text="Hi" animateBy="letters" />);
    const spans = screen.getAllByText(/H|i/);
    expect(spans).toHaveLength(2);
  });

  it('applies custom className', () => {
    const { container } = render(<BlurText text="Test" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles empty text', () => {
    render(<BlurText text="" />);
    const spans = screen.queryAllByText(/.+/);
    expect(spans).toHaveLength(0);
  });

  it('sets up intersection observer', () => {
    render(<BlurText text="Test" />);
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.1, rootMargin: '0px' }
    );
  });
});