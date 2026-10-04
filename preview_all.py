from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        screens = [
            'command-center',
            'rank-tracking',
            'site-audit',
            'backlinks',
            'ai-assistant'
        ]

        for screen in screens:
            page.goto(f"http://localhost:3000/{screen}")
            page.wait_for_timeout(2000)
            page.screenshot(path=f"/home/jules/verification/screenshots/{screen}_preview.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
