import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Preloader } from '../Preloader';

jest.mock('framer-motion', () => {
  const MockDiv = React.forwardRef(({ children, initial, animate, exit, transition, ...props }: any, ref: any) => (
    <div ref={ref} {...props}>{children}</div>
  ));
  MockDiv.displayName = 'MockMotionDiv';

  const MockH2 = React.forwardRef(({ children, initial, animate, exit, transition, ...props }: any, ref: any) => (
    <h2 ref={ref} {...props}>{children}</h2>
  ));
  MockH2.displayName = 'MockMotionH2';

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: MockDiv,
      h2: MockH2,
    },
  };
});

describe('Preloader Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders the preloader initially', () => {
    render(<Preloader />);
    expect(screen.getByText('SEOtriks')).toBeInTheDocument();
    expect(screen.getByText('insights')).toBeInTheDocument();
  });

  it('hides the preloader after 800ms', () => {
    render(<Preloader />);
    expect(screen.getByText('SEOtriks')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(800);
    });

    expect(screen.queryByText('SEOtriks')).not.toBeInTheDocument();
  });

  it('cleans up timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const { unmount } = render(<Preloader />);
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
