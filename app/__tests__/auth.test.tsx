import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import LoginPage from '../login/page';
import RegisterPage from '../register/page';
import VerifyEmailPage from '../verify-email/page';
import ForgotPasswordPage from '../forgot-password/page';
import ResetPasswordPage from '../reset-password/page';

// Mock Next.js navigation hooks
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

describe('Authentication Pages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchParams.clear();
  });

  describe('Login Page', () => {
    it('renders login form with inputs and submit button', () => {
      render(<LoginPage />);
      expect(screen.getByRole('heading', { name: /log in to seotriks/i })).toBeInTheDocument();
      expect(screen.getByLabelText(/work email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^log in/i })).toBeInTheDocument();
    });

    it('shows error message on invalid email submit', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/work email address/i);
      const passwordInput = screen.getByLabelText(/^password/i);
      const submitBtn = screen.getByRole('button', { name: /^log in/i });

      fireEvent.change(emailInput, { target: { value: 'error@seotriks.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitBtn);

      expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
    });
  });

  describe('Register Page', () => {
    it('renders registration form inputs and plan badges', () => {
      mockSearchParams.set('plan', 'growth');
      render(<RegisterPage />);
      expect(screen.getByRole('heading', { name: /create your free account/i })).toBeInTheDocument();
      expect(screen.getByText(/growth plan/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    });

    it('shows error if terms are not accepted', () => {
      render(<RegisterPage />);
      fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Alex' } });
      fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Morgan' } });
      fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'alex@company.com' } });
      fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Acme' } });
      fireEvent.change(screen.getByLabelText(/^password/i), { target: { value: 'Pass1234!' } });
      fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'Pass1234!' } });

      const submitBtn = screen.getByRole('button', { name: /create free account/i });
      fireEvent.click(submitBtn);

      expect(screen.getByText(/you must agree to the terms/i)).toBeInTheDocument();
    });
  });

  describe('Verify Email Page', () => {
    it('renders verification pin inputs and resend timer', () => {
      mockSearchParams.set('email', 'user@company.com');
      render(<VerifyEmailPage />);
      expect(screen.getByText(/verify your email address/i)).toBeInTheDocument();
      expect(screen.getByText(/user@company.com/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /confirm & continue/i })).toBeInTheDocument();
    });
  });

  describe('Forgot Password Page', () => {
    it('submits email and displays confirmation banner', () => {
      jest.useFakeTimers();
      render(<ForgotPasswordPage />);
      const emailInput = screen.getByLabelText(/work email address/i);
      const submitBtn = screen.getByRole('button', { name: /send reset link/i });

      fireEvent.change(emailInput, { target: { value: 'test@company.com' } });
      fireEvent.click(submitBtn);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(screen.getByText(/reset link dispatched/i)).toBeInTheDocument();
      jest.useRealTimers();
    });
  });

  describe('Reset Password Page', () => {
    it('renders password strength meter and updates password', () => {
      render(<ResetPasswordPage />);
      expect(screen.getByRole('heading', { name: /set new password/i })).toBeInTheDocument();

      const newPasswordInput = screen.getByLabelText(/^new password/i);
      fireEvent.change(newPasswordInput, { target: { value: 'StrongPass123!' } });

      expect(screen.getByText(/strength:/i)).toBeInTheDocument();
      expect(screen.getByText(/strong/i)).toBeInTheDocument();
    });
  });
});
