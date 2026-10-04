import os
import re
import urllib.request
from bs4 import BeautifulSoup

screens = [
    {
        "route": "command-center",
        "name": "CommandCenter",
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1Y2YzMjdiNzQ2Y2UwOTY4OTAzNWY5MGU5MjM4EgsSBxD2z--XlR4YAZIBIwoKcHJvamVjdF9pZBIVQhM3MjgxMDUyNDE3NzA3MjIwNjUx&filename=&opi=89354086"
    },
    {
        "route": "rank-tracking",
        "name": "RankTracking",
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1Y2YzOTg3ZDNiOTgwMjNiZWYxZGQyMDQ1MDIxEgsSBxD2z--XlR4YAZIBIwoKcHJvamVjdF9pZBIVQhM3MjgxMDUyNDE3NzA3MjIwNjUx&filename=&opi=89354086"
    },
    {
        "route": "site-audit",
        "name": "SiteAudit",
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1Y2YzOTQzM2IwYWQwMjNiZWYxZGQyMDQ1MDIxEgsSBxD2z--XlR4YAZIBIwoKcHJvamVjdF9pZBIVQhM3MjgxMDUyNDE3NzA3MjIwNjUx&filename=&opi=89354086"
    },
    {
        "route": "backlinks",
        "name": "Backlinks",
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1Y2YzOWM5YzBmY2UwMjNiZWYxZGQyMDQ1MDIxEgsSBxD2z--XlR4YAZIBIwoKcHJvamVjdF9pZBIVQhM3MjgxMDUyNDE3NzA3MjIwNjUx&filename=&opi=89354086"
    },
    {
        "route": "ai-assistant",
        "name": "AiAssistant",
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1Y2YzMjcwYWIxMjIwOTY4OTAzNWY5MGU5MjM4EgsSBxD2z--XlR4YAZIBIwoKcHJvamVjdF9pZBIVQhM3MjgxMDUyNDE3NzA3MjIwNjUx&filename=&opi=89354086"
    }
]

def clean_html_for_react(content):
    react_code = re.sub(r'class="', r'className="', content)
    react_code = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', react_code)

    react_code = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', react_code)
    react_code = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', react_code)
    react_code = re.sub(r'<br>', r'<br />', react_code)
    react_code = re.sub(r'<hr(.*?)>', r'<hr\1/>', react_code)

    react_code = re.sub(r'stroke-width=', r'strokeWidth=', react_code)
    react_code = re.sub(r'stroke-linecap=', r'strokeLinecap=', react_code)
    react_code = re.sub(r'stroke-linejoin=', r'strokeLinejoin=', react_code)
    react_code = re.sub(r'stroke-dasharray=', r'strokeDasharray=', react_code)
    react_code = re.sub(r'stroke-dashoffset=', r'strokeDashoffset=', react_code)
    react_code = re.sub(r'fill-rule=', r'fillRule=', react_code)
    react_code = re.sub(r'clip-rule=', r'clipRule=', react_code)
    react_code = re.sub(r'viewbox=', r'viewBox=', react_code)
    react_code = re.sub(r'preserveaspectratio=', r'preserveAspectRatio=', react_code)
    react_code = re.sub(r'lineargradient', r'linearGradient', react_code)
    react_code = re.sub(r'stop-color=', r'stopColor=', react_code)
    react_code = re.sub(r'stop-opacity=', r'stopOpacity=', react_code)
    react_code = re.sub(r'stroke-opacity=', r'strokeOpacity=', react_code)

    react_code = re.sub(r'style="[^"]*"', '', react_code)
    react_code = react_code.replace(" > ", " {'&gt;'} ")
    react_code = react_code.replace('checked=""', 'defaultChecked')

    return react_code

def main():
    for screen in screens:
        route = screen['route']
        name = screen['name']
        url = screen['url']

        print(f"Processing {name}...")

        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')

        soup = BeautifulSoup(html, 'html.parser')
        main_tag = soup.find('main')

        if not main_tag:
            print(f"Warning: No <main> found for {name}")
            continue

        for script in main_tag.find_all('script'):
            script.decompose()

        content = main_tag.decode_contents()
        react_content = clean_html_for_react(content)

        dir_path = f"app/{route}"
        os.makedirs(dir_path, exist_ok=True)

        content_path = f"{dir_path}/{name}Content.tsx"
        with open(content_path, "w", encoding="utf-8") as f:
            f.write(f'export function {name}Content() {{\n  return (\n<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">\n{react_content}\n</main>\n  )\n}}')

        page_path = f"{dir_path}/page.tsx"
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(f'''import {{ Sidebar }} from "@/app/components/Sidebar"
import {{ {name}Content }} from "./{name}Content"

export default async function {name}() {{
  return (
    <div className="flex min-h-screen bg-[#0a1421]">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <{name}Content />
      </div>
    </div>
  )
}}
''')

if __name__ == "__main__":
    main()
