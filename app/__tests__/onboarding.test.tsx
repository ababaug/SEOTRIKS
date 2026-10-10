import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OnboardingPage from '../onboarding/page';
import DashboardPage from '../dashboard/page';

const mockPush = jest.fn();
const mockReplace = jest.fn();
const mockSearchParams = new Map<string, string>();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
  }),
  useSearchParams: () => ({
    get: (key: string) => mockSearchParams.get(key) || null,
  }),
}));

describe('Onboarding Flow and Workspace Dashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchParams.clear();
  });

  describe('Onboarding Page Navigation', () => {
    it('renders Welcome screen (Step 1) initially', () => {
      render(<OnboardingPage />);
      expect(screen.getByText(/welcome to seotriks/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /start onboarding/i })).toBeInTheDocument();
    });

    it('advances from Step 1 to Step 2 (Website Setup)', () => {
      render(<OnboardingPage />);
      const startBtn = screen.getByRole('button', { name: /start onboarding/i });
      fireEvent.click(startBtn);

      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('step=2'));
    });

    it('validates website URL on Step 2', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /business & website setup/i })).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/please enter your website url to continue/i)).toBeInTheDocument();
    });

    it('renders Step 10 (Action Plan) with priority triage engine cards', () => {
      mockSearchParams.set('step', '10');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /your personalized seo action plan/i })).toBeInTheDocument();
      expect(screen.getByText(/critical priority/i)).toBeInTheDocument();
      expect(screen.getByText(/quick win/i)).toBeInTheDocument();
      expect(screen.getByText(/improving/i)).toBeInTheDocument();
    });

    it('renders Step 11 (Workspace Ready) with summary tile and dashboard redirect CTA', () => {
      mockSearchParams.set('step', '11');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /your seotriks workspace is ready!/i })).toBeInTheDocument();
      const goToDashboardBtn = screen.getByRole('button', { name: /go to dashboard/i });

      fireEvent.click(goToDashboardBtn);
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  describe('Workspace Dashboard', () => {
    it('renders dashboard telemetry and top priority actions', () => {
      render(<DashboardPage />);
      expect(screen.getByRole('heading', { name: /seotriks command dashboard/i })).toBeInTheDocument();
      expect(screen.getByText(/top pending seo actions/i)).toBeInTheDocument();
    });
  });
});
