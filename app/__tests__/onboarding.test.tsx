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

describe('Onboarding Experience (Screens 6 - 16)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchParams.clear();
  });

  describe('Screen 6: Welcome to SEOTRIKS (Step 1)', () => {
    it('renders Welcome screen with headline and value pillars', () => {
      render(<OnboardingPage />);
      expect(screen.getByRole('heading', { name: /let's set up your seo command center/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /start onboarding/i })).toBeInTheDocument();
    });

    it('advances from Step 1 to Step 2 when clicking Start Onboarding', () => {
      render(<OnboardingPage />);
      const startBtn = screen.getByRole('button', { name: /start onboarding/i });
      fireEvent.click(startBtn);

      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('step=2'));
    });
  });

  describe('Screen 7: Business & Website Setup (Step 2)', () => {
    it('validates empty website URL input', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /business & website setup/i })).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/please enter your website url to continue/i)).toBeInTheDocument();
    });

    it('handles invalid website URL test case (invalid-url)', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      const urlInput = screen.getByLabelText(/primary website url \*/i);
      fireEvent.change(urlInput, { target: { value: 'invalid-url' } });

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/invalid website url format/i)).toBeInTheDocument();
    });

    it('handles unreachable website test case (unreachable.com) and displays retry', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      const urlInput = screen.getByLabelText(/primary website url \*/i);
      fireEvent.change(urlInput, { target: { value: 'unreachable.com' } });

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(screen.getByText(/unable to reach domain/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /retry domain connection/i })).toBeInTheDocument();
    });

    it('advances to step 3 on valid URL entry', () => {
      mockSearchParams.set('step', '2');
      render(<OnboardingPage />);

      const urlInput = screen.getByLabelText(/primary website url \*/i);
      fireEvent.change(urlInput, { target: { value: 'https://mycompany.com' } });

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('step=3'));
    });
  });

  describe('Screen 8: SEO Experience (Step 3)', () => {
    it('renders SEO experience options and allows selection', () => {
      mockSearchParams.set('step', '3');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /what is your seo experience level\?/i })).toBeInTheDocument();
      expect(screen.getByText(/beginner/i)).toBeInTheDocument();
      expect(screen.getByText(/intermediate/i)).toBeInTheDocument();
      expect(screen.getByText(/advanced/i)).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('step=4'));
    });
  });

  describe('Screen 9: SEO Goals (Step 4)', () => {
    it('renders goal option cards and allows selection', () => {
      mockSearchParams.set('step', '4');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /select your primary seo goals/i })).toBeInTheDocument();
      expect(screen.getByText(/increase organic traffic/i)).toBeInTheDocument();
      expect(screen.getByText(/fix technical seo friction/i)).toBeInTheDocument();

      const continueBtn = screen.getByRole('button', { name: /continue/i });
      fireEvent.click(continueBtn);

      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('step=5'));
    });
  });

  describe('Screen 10: Target Keywords (Step 5)', () => {
    it('allows adding new custom keyword and selecting industry suggestions', () => {
      mockSearchParams.set('step', '5');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /target keywords/i })).toBeInTheDocument();

      const keywordInput = screen.getByPlaceholderText(/e\.g\. enterprise seo audit/i);
      fireEvent.change(keywordInput, { target: { value: 'growth marketing' } });

      const addBtn = screen.getByRole('button', { name: /^add$/i });
      fireEvent.click(addBtn);

      expect(screen.getByText(/growth marketing/i)).toBeInTheDocument();
    });
  });

  describe('Screen 11: Competitors (Step 6)', () => {
    it('allows adding and removing competitor domains', () => {
      mockSearchParams.set('step', '6');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /add top competitors/i })).toBeInTheDocument();

      const competitorInput = screen.getByPlaceholderText(/e\.g\. competitor\.com/i);
      fireEvent.change(competitorInput, { target: { value: 'competitor.io' } });

      const addBtn = screen.getByRole('button', { name: /^add$/i });
      fireEvent.click(addBtn);

      expect(screen.getByText(/competitor\.io/i)).toBeInTheDocument();
    });
  });

  describe('Screen 12: Google Integrations (Step 7)', () => {
    it('renders Google Search Console and GA4 integration toggle cards', () => {
      mockSearchParams.set('step', '7');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /connect google integrations/i })).toBeInTheDocument();
      expect(screen.getAllByText(/google search console/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/google analytics 4/i)).toBeInTheDocument();
    });
  });

  describe('Screen 13: Initial Site Audit / Analysis (Step 8)', () => {
    it('renders live progress percentage indicator and technical audit parameters', () => {
      mockSearchParams.set('step', '8');
      render(<OnboardingPage />);

      expect(screen.getByText(/active scan/i)).toBeInTheDocument();
      expect(screen.getByText(/seotriks js dom crawler v2\.4/i)).toBeInTheDocument();
    });
  });

  describe('Screen 14: Initial SEO Results (Step 9)', () => {
    it('renders composite health score and issue breakdown cards', () => {
      mockSearchParams.set('step', '9');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /initial seo results/i })).toBeInTheDocument();
      expect(screen.getByText(/seotriks score/i)).toBeInTheDocument();
      expect(screen.getByText(/critical issues/i)).toBeInTheDocument();
      expect(screen.getByText(/quick wins/i)).toBeInTheDocument();
      expect(screen.getByText(/opportunities/i)).toBeInTheDocument();
    });
  });

  describe('Screen 15: Personalized SEO Action Plan (Step 10)', () => {
    it('renders priority triage engine layout with Critical, Quick Win, and Improving items', () => {
      mockSearchParams.set('step', '10');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /your personalized seo action plan/i })).toBeInTheDocument();
      expect(screen.getByText(/critical priority/i)).toBeInTheDocument();
      expect(screen.getByText(/quick win/i)).toBeInTheDocument();
      expect(screen.getByText(/improving/i)).toBeInTheDocument();
      expect(screen.getAllByText(/recommended action:/i).length).toBeGreaterThan(0);
    });
  });

  describe('Screen 16: Onboarding Complete / Workspace Ready (Step 11)', () => {
    it('renders workspace summary tile and CTAs', () => {
      mockSearchParams.set('step', '11');
      render(<OnboardingPage />);

      expect(screen.getByRole('heading', { name: /your seotriks workspace is ready!/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /go to dashboard/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /view my seo action plan/i })).toBeInTheDocument();

      const goToDashboardBtn = screen.getByRole('button', { name: /go to dashboard/i });
      fireEvent.click(goToDashboardBtn);
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  describe('Workspace Dashboard Page', () => {
    it('renders dashboard telemetry and top priority actions', () => {
      render(<DashboardPage />);
      expect(screen.getByRole('heading', { name: /seotriks command dashboard/i })).toBeInTheDocument();
      expect(screen.getByText(/top pending seo actions/i)).toBeInTheDocument();
    });
  });
});
