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

  describe('Onboarding Page Navigation & Step Renderers', () => {
    it('renders Step 1: Welcome screen initially', () => {
      render(<OnboardingPage />);
      expect(screen.getByText(/welcome to seotriks/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /start onboarding/i })).toBeInTheDocument();
    });

    it('advances from Step 1 to Step 2', () => {
      render(<OnboardingPage />);
      const startBtn = screen.getByRole('button', { name: /start onboarding/i });
      fireEvent.click(startBtn);

      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('step=2'));
    });

    it('validates website URL on Step 2 (Website Setup)', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /business & website setup/i })).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/please enter your website url to continue/i)).toBeInTheDocument();
    });

    it('handles invalid-url error state on Step 2', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      const urlInput = screen.getByLabelText(/primary website url/i);
      fireEvent.change(urlInput, { target: { value: 'invalid-url' } });

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/invalid website url format/i)).toBeInTheDocument();
    });

    it('renders Step 3: SEO Experience selection cards', () => {
      mockSearchParams.set('step', '3');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /what is your seo experience level\?/i })).toBeInTheDocument();
      expect(screen.getByText(/beginner/i)).toBeInTheDocument();
      expect(screen.getByText(/intermediate/i)).toBeInTheDocument();
      expect(screen.getByText(/advanced/i)).toBeInTheDocument();
      expect(screen.getByText(/agency \/ in-house/i)).toBeInTheDocument();
    });

    it('renders Step 4: SEO Goals multi-selection options', () => {
      mockSearchParams.set('step', '4');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /select your primary seo goals/i })).toBeInTheDocument();
      expect(screen.getByText(/increase organic traffic/i)).toBeInTheDocument();
      expect(screen.getByText(/rank #1 for key terms/i)).toBeInTheDocument();
      expect(screen.getByText(/fix technical seo friction/i)).toBeInTheDocument();
    });

    it('renders Step 5: Target Keywords with suggestion chips', () => {
      mockSearchParams.set('step', '5');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /target keywords/i })).toBeInTheDocument();
      expect(screen.getByText(/industry suggestions/i)).toBeInTheDocument();
      expect(screen.getByText(/technical seo tool/i)).toBeInTheDocument();
    });

    it('renders Step 6: Competitors management screen', () => {
      mockSearchParams.set('step', '6');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /add top competitors/i })).toBeInTheDocument();
      expect(screen.getByText(/suggested competitors/i)).toBeInTheDocument();
      expect(screen.getByText(/semrush.com/i)).toBeInTheDocument();
      expect(screen.getByText(/ahrefs.com/i)).toBeInTheDocument();
    });

    it('renders Step 7: Google Integrations connection cards', () => {
      mockSearchParams.set('step', '7');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /connect google integrations/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /google search console/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /google analytics 4/i })).toBeInTheDocument();
    });

    it('renders Step 8: Initial Site Audit / Analysis scanner state', () => {
      mockSearchParams.set('step', '8');
      render(<OnboardingPage />);

      expect(screen.getByText(/analyzing/i)).toBeInTheDocument();
      expect(screen.getByText(/seotriks js dom crawler/i)).toBeInTheDocument();
    });

    it('renders Step 9: Initial SEO Results with composite scores', () => {
      mockSearchParams.set('step', '9');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /initial seo results/i })).toBeInTheDocument();
      expect(screen.getByText(/78/i)).toBeInTheDocument();
      expect(screen.getByText(/critical issues/i)).toBeInTheDocument();
      expect(screen.getByText(/quick wins/i)).toBeInTheDocument();
      expect(screen.getByText(/opportunities/i)).toBeInTheDocument();
    });

    it('renders Step 10: Action Plan with priority triage engine cards', () => {
      mockSearchParams.set('step', '10');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /your personalized seo action plan/i })).toBeInTheDocument();
      expect(screen.getByText(/critical priority/i)).toBeInTheDocument();
      expect(screen.getByText(/quick win/i)).toBeInTheDocument();
      expect(screen.getByText(/improving/i)).toBeInTheDocument();
    });

    it('renders Step 11: Workspace Ready with summary tile and dashboard redirect CTA', () => {
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
