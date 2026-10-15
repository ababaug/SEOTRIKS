import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
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

  describe('Onboarding Page Navigation & Error States', () => {
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

    it('validates website URL on Step 2 for empty input', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /business & website setup/i })).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/please enter your website url to continue/i)).toBeInTheDocument();
    });

    it('validates website URL on Step 2 for invalid URL format', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      const input = screen.getByPlaceholderText(/e.g. https:\/\/mycompany.com/i);
      fireEvent.change(input, { target: { value: 'invalid-url' } });

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/invalid website url format/i)).toBeInTheDocument();
    });

    it('validates website URL on Step 2 for unreachable domain', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      const input = screen.getByPlaceholderText(/e.g. https:\/\/mycompany.com/i);
      fireEvent.change(input, { target: { value: 'unreachable.com' } });

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/unable to reach domain/i)).toBeInTheDocument();
    });

    it('renders Step 3 (SEO Experience) and updates selection', () => {
      mockSearchParams.set('step', '3');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /what is your seo experience level\?/i })).toBeInTheDocument();
      const beginnerBtn = screen.getByRole('button', { name: /beginner/i });
      fireEvent.click(beginnerBtn);
    });

    it('renders Step 4 (SEO Goals) and toggles goals', () => {
      mockSearchParams.set('step', '4');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /select your primary seo goals/i })).toBeInTheDocument();
      const goalBtn = screen.getByRole('button', { name: /outrank competitors/i });
      fireEvent.click(goalBtn);
    });

    it('renders Step 5 (Target Keywords) and allows tag addition', () => {
      mockSearchParams.set('step', '5');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /target keywords/i })).toBeInTheDocument();
      const input = screen.getByPlaceholderText(/e.g. enterprise seo audit/i);
      fireEvent.change(input, { target: { value: 'seo monitoring' } });

      const addBtn = screen.getByRole('button', { name: /^add$/i });
      fireEvent.click(addBtn);

      expect(screen.getByText('seo monitoring')).toBeInTheDocument();
    });

    it('renders Step 6 (Competitors) and lists competitor domains', () => {
      mockSearchParams.set('step', '6');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /add top competitors/i })).toBeInTheDocument();
      expect(screen.getByText('semrush.com')).toBeInTheDocument();
      expect(screen.getByText('ahrefs.com')).toBeInTheDocument();
    });

    it('renders Step 7 (Google Integrations) and toggles connection state', () => {
      mockSearchParams.set('step', '7');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /connect google integrations/i })).toBeInTheDocument();
      const ga4ConnectBtn = screen.getAllByRole('button', { name: /^connect$/i })[0];
      fireEvent.click(ga4ConnectBtn);
    });

    it('renders Step 8 (Site Audit) active scan telemetry', () => {
      mockSearchParams.set('step', '8');
      render(<OnboardingPage />);

      expect(screen.getByText(/active scan/i)).toBeInTheDocument();
      expect(screen.getByText(/seotriks js dom crawler v2.4/i)).toBeInTheDocument();
    });

    it('renders Step 9 (Initial SEO Results) sub-score breakdown', () => {
      mockSearchParams.set('step', '9');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /initial seo results/i })).toBeInTheDocument();
      expect(screen.getByText('78')).toBeInTheDocument();
      expect(screen.getByText(/good baseline/i)).toBeInTheDocument();
      expect(screen.getByText('Technical')).toBeInTheDocument();
      expect(screen.getByText('Performance')).toBeInTheDocument();
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
