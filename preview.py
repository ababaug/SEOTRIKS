from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Capture Dashboard
        page.goto("http://localhost:3000/dashboard")
        page.wait_for_timeout(2000)
        page.screenshot(path="dashboard_preview.png", full_page=True)

        # Capture Projects
        page.goto("http://localhost:3000/projects")
        page.wait_for_timeout(2000)
        page.screenshot(path="projects_preview.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
