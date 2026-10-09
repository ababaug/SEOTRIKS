import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header } from '../Header';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock framer-motion to render children immediately without animation delays
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Header Component', () => {
  const mockUsePathname = usePathname as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUsePathname.mockReturnValue('/');
  });

  it('renders logo and brand name correctly', () => {
    render(<Header />);
    expect(screen.getByText('SEOtriks')).toBeInTheDocument();
    expect(screen.getByText('insights')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Header />);
    const expectedLinks = ['Home', 'About', 'Services', 'Blog', 'Contact', 'Pricing'];
    expectedLinks.forEach((linkName) => {
      expect(screen.getByRole('link', { name: linkName })).toBeInTheDocument();
    });
  });

  it('highlights the active navigation link based on usePathname', () => {
    mockUsePathname.mockReturnValue('/about');
    render(<Header />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toHaveClass('bg-secondary-container');

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).not.toHaveClass('bg-secondary-container');
  });

  it('toggles mobile menu when toggle button is clicked', async () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Mobile menu links should not be visible initially
    expect(screen.queryAllByRole('link', { name: 'About' }).length).toBe(1); // Only desktop link exists

    // Open mobile menu
    fireEvent.click(toggleButton);

    // After click, mobile menu should render (desktop + mobile = 2)
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBe(2);

    // Click toggle button again to close mobile menu
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(screen.queryAllByRole('link', { name: 'About' }).length).toBe(1);
    });
  });

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    fireEvent.click(toggleButton);

    const aboutLinks = screen.getAllByRole('link', { name: 'About' });
    expect(aboutLinks.length).toBe(2);

    // Click the mobile 'About' link preventing JSDOM navigation error
    fireEvent.click(aboutLinks[1], { button: 0, defaultPrevented: true });

    // Mobile menu should close
    await waitFor(() => {
      expect(screen.queryAllByRole('link', { name: 'About' }).length).toBe(1);
    });
  });
});
