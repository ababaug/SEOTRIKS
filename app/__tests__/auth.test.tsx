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

describe('Authentication Pages (Screens 1 - 5)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchParams.clear();
  });

  describe('Screen 1: Login Page', () => {
    it('renders login form with required fields, toggles, and social OAuth', () => {
      render(<LoginPage />);
      expect(screen.getByRole('heading', { name: /log in to seotriks/i })).toBeInTheDocument();
      expect(screen.getByLabelText(/work email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/remember me on this device/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /forgot password\?/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^log in/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /create free account/i })).toBeInTheDocument();
    });

    it('displays error for empty submit', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/work email address/i);
      fireEvent.submit(emailInput.closest('form')!);
      expect(screen.getByText(/please fill in both email and password fields/i)).toBeInTheDocument();
    });

    it('displays error for invalid email format', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/work email address/i);
      const passwordInput = screen.getByLabelText(/^password/i);

      fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });

    it('shows error message on invalid credentials test case', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/work email address/i);
      const passwordInput = screen.getByLabelText(/^password/i);

      fireEvent.change(emailInput, { target: { value: 'error@seotriks.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
    });

    it('shows error message on locked account test case', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/work email address/i);
      const passwordInput = screen.getByLabelText(/^password/i);

      fireEvent.change(emailInput, { target: { value: 'locked@seotriks.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/account temporarily locked/i)).toBeInTheDocument();
    });

    it('handles Google OAuth login', () => {
      jest.useFakeTimers();
      render(<LoginPage />);
      const googleBtn = screen.getByRole('button', { name: /continue with google/i });
      fireEvent.click(googleBtn);

      act(() => {
        jest.advanceTimersByTime(1200);
      });

      expect(mockPush).toHaveBeenCalledWith('/onboarding');
      jest.useRealTimers();
    });
  });

  describe('Screen 2: Registration Page', () => {
    it('renders registration form inputs, plan badges, and intent badges', () => {
      mockSearchParams.set('plan', 'growth');
      mockSearchParams.set('intent', 'audit');
      render(<RegisterPage />);

      expect(screen.getByRole('heading', { name: /create your free account/i })).toBeInTheDocument();
      expect(screen.getByText(/growth plan/i)).toBeInTheDocument();
      expect(screen.getByText(/instant full-domain audit configured for setup/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    it('displays password strength indicator', () => {
      render(<RegisterPage />);
      const passwordInput = screen.getByLabelText(/^password/i);

      fireEvent.change(passwordInput, { target: { value: 'short' } });
      expect(screen.getByText(/weak/i)).toBeInTheDocument();

      fireEvent.change(passwordInput, { target: { value: 'StrongPass123!' } });
      expect(screen.getByText(/strong/i)).toBeInTheDocument();
    });

    it('shows error if terms are not accepted', () => {
      render(<RegisterPage />);
      fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Alex' } });
      fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Morgan' } });
      fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'alex@company.com' } });
      fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Acme' } });
      fireEvent.change(screen.getByLabelText(/^password/i), { target: { value: 'Pass1234!' } });
      fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'Pass1234!' } });

      const emailInput = screen.getByLabelText(/work email/i);
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/you must agree to the terms/i)).toBeInTheDocument();
    });

    it('shows error if passwords do not match', () => {
      render(<RegisterPage />);
      fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Alex' } });
      fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Morgan' } });
      fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'alex@company.com' } });
      fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Acme' } });
      fireEvent.change(screen.getByLabelText(/^password/i), { target: { value: 'Pass1234!' } });
      fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'DifferentPass1!' } });
      fireEvent.click(screen.getByRole('checkbox'));

      const emailInput = screen.getByLabelText(/work email/i);
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });

    it('handles account already exists test case', () => {
      render(<RegisterPage />);
      fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Alex' } });
      fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Morgan' } });
      fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'exists@seotriks.com' } });
      fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'Acme' } });
      fireEvent.change(screen.getByLabelText(/^password/i), { target: { value: 'Pass1234!' } });
      fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'Pass1234!' } });
      fireEvent.click(screen.getByRole('checkbox'));

      const emailInput = screen.getByLabelText(/work email/i);
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/an account with this email address already exists/i)).toBeInTheDocument();
    });
  });

  describe('Screen 3: Verify Email Page', () => {
    it('renders verification pin inputs and email parameter', () => {
      mockSearchParams.set('email', 'user@company.com');
      render(<VerifyEmailPage />);
      expect(screen.getByText(/verify your email address/i)).toBeInTheDocument();
      expect(screen.getByText(/user@company.com/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /confirm & continue/i })).toBeInTheDocument();
    });

    it('shows error for incomplete pin entry', () => {
      render(<VerifyEmailPage />);
      const submitBtn = screen.getByRole('button', { name: /confirm & continue/i });
      fireEvent.click(submitBtn);
      expect(screen.getByText(/please enter all 6 digits/i)).toBeInTheDocument();
    });

    it('shows error for invalid verification code (000000)', () => {
      render(<VerifyEmailPage />);
      const inputs = screen.getAllByRole('textbox');
      inputs.forEach((input) => fireEvent.change(input, { target: { value: '0' } }));

      const submitBtn = screen.getByRole('button', { name: /confirm & continue/i });
      fireEvent.click(submitBtn);

      expect(screen.getByText(/invalid verification code/i)).toBeInTheDocument();
    });

    it('shows error for expired verification code (999999)', () => {
      render(<VerifyEmailPage />);
      const inputs = screen.getAllByRole('textbox');
      inputs.forEach((input) => fireEvent.change(input, { target: { value: '9' } }));

      const submitBtn = screen.getByRole('button', { name: /confirm & continue/i });
      fireEvent.click(submitBtn);

      expect(screen.getByText(/verification code expired/i)).toBeInTheDocument();
    });
  });

  describe('Screen 4: Forgot Password Page', () => {
    it('renders email input and sends reset instructions', () => {
      jest.useFakeTimers();
      render(<ForgotPasswordPage />);
      expect(screen.getByRole('heading', { name: /forgot password\?/i })).toBeInTheDocument();

      const emailInput = screen.getByLabelText(/work email address/i);

      fireEvent.change(emailInput, { target: { value: 'test@company.com' } });
      fireEvent.submit(emailInput.closest('form')!);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(screen.getByText(/reset link dispatched/i)).toBeInTheDocument();
      jest.useRealTimers();
    });

    it('shows error for invalid email format', () => {
      render(<ForgotPasswordPage />);
      const emailInput = screen.getByLabelText(/work email address/i);

      fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
      fireEvent.submit(emailInput.closest('form')!);

      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  describe('Screen 5: Reset Password Page', () => {
    it('renders password strength meter and updates password successfully', () => {
      jest.useFakeTimers();
      mockSearchParams.set('email', 'alex@company.com');
      render(<ResetPasswordPage />);

      expect(screen.getByRole('heading', { name: /set new password/i })).toBeInTheDocument();
      expect(screen.getByText(/alex@company.com/i)).toBeInTheDocument();

      const newPasswordInput = screen.getByLabelText(/^new password/i);
      const confirmPasswordInput = screen.getByLabelText(/confirm new password/i);

      fireEvent.change(newPasswordInput, { target: { value: 'StrongPass123!' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'StrongPass123!' } });

      expect(screen.getByText(/strength:/i)).toBeInTheDocument();
      expect(screen.getByText(/strong/i)).toBeInTheDocument();

      fireEvent.submit(newPasswordInput.closest('form')!);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(screen.getByText(/password reset complete/i)).toBeInTheDocument();
      jest.useRealTimers();
    });

    it('shows error for password mismatch', () => {
      render(<ResetPasswordPage />);
      const newPasswordInput = screen.getByLabelText(/^new password/i);
      const confirmPasswordInput = screen.getByLabelText(/confirm new password/i);

      fireEvent.change(newPasswordInput, { target: { value: 'StrongPass123!' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'MismatchPass123!' } });

      fireEvent.submit(newPasswordInput.closest('form')!);

      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });
  });
});
