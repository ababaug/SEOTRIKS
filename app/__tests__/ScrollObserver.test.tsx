import React from 'react';
import { render, act } from '@testing-library/react';
import { ScrollObserver } from '../ScrollObserver';

const mockUsePathname = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('ScrollObserver', () => {
  let mockObserve: jest.Mock;
  let mockDisconnect: jest.Mock;
  let observerCallback: IntersectionObserverCallback;
  let mockIntersectionObserver: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers();
    mockUsePathname.mockReturnValue('/test-path');

    mockObserve = jest.fn();
    mockDisconnect = jest.fn();

    mockIntersectionObserver = jest.fn().mockImplementation((callback: IntersectionObserverCallback) => {
      observerCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: jest.fn(),
      };
    });

    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
    document.body.innerHTML = '';
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('renders null without throwing', () => {
    const { container } = render(<ScrollObserver />);
    expect(container.firstChild).toBeNull();
  });

  it('observes elements with class .reveal after timer', () => {
    const div1 = document.createElement('div');
    div1.className = 'reveal';
    document.body.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className = 'reveal';
    document.body.appendChild(div2);

    const div3 = document.createElement('div');
    div3.className = 'other';
    document.body.appendChild(div3);

    render(<ScrollObserver />);

    expect(mockObserve).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    expect(mockObserve).toHaveBeenCalledTimes(2);
    expect(mockObserve).toHaveBeenCalledWith(div1);
    expect(mockObserve).toHaveBeenCalledWith(div2);
    expect(mockObserve).not.toHaveBeenCalledWith(div3);
  });

  it('adds active class when element is intersecting', () => {
    const div = document.createElement('div');
    div.className = 'reveal';
    document.body.appendChild(div);

    render(<ScrollObserver />);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(div.classList.contains('active')).toBe(false);

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: true,
            target: div,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(div.classList.contains('active')).toBe(true);
  });

  it('does not add active class when element is not intersecting', () => {
    const div = document.createElement('div');
    div.className = 'reveal';
    document.body.appendChild(div);

    render(<ScrollObserver />);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    act(() => {
      observerCallback(
        [
          {
            isIntersecting: false,
            target: div,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver
      );
    });

    expect(div.classList.contains('active')).toBe(false);
  });

  it('clears timer and disconnects observer on unmount', () => {
    const { unmount } = render(<ScrollObserver />);

    unmount();

    expect(mockDisconnect).toHaveBeenCalledTimes(1);
  });

  it('re-runs effect on pathname change', () => {
    const { rerender } = render(<ScrollObserver />);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledTimes(1);

    mockUsePathname.mockReturnValue('/new-path');
    rerender(<ScrollObserver />);

    expect(mockDisconnect).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledTimes(2);
  });
});
