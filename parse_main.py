from bs4 import BeautifulSoup
import re

def extract_main_content(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    main_tag = soup.find('main')

    if not main_tag:
        return ""

    # Remove script tags from main
    for script in main_tag.find_all('script'):
        script.decompose()

    content = main_tag.decode_contents()

    # Basic conversion of class to className and style adjustments for React
    react_code = re.sub(r'class="', r'className="', content)
    react_code = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', react_code)

    # Simple self closing tags fix
    react_code = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', react_code)
    react_code = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', react_code)
    react_code = re.sub(r'<br>', r'<br />', react_code)
    react_code = re.sub(r'<hr(.*?)>', r'<hr\1/>', react_code)

    # SVG attributes need to be camelCase too (e.g. stroke-width -> strokeWidth, stroke-linecap -> strokeLinecap)
    react_code = re.sub(r'stroke-width=', r'strokeWidth=', react_code)
    react_code = re.sub(r'stroke-linecap=', r'strokeLinecap=', react_code)
    react_code = re.sub(r'stroke-linejoin=', r'strokeLinejoin=', react_code)
    react_code = re.sub(r'stroke-dasharray=', r'strokeDasharray=', react_code)
    react_code = re.sub(r'stroke-dashoffset=', r'strokeDashoffset=', react_code)
    react_code = re.sub(r'fill-rule=', r'fillRule=', react_code)
    react_code = re.sub(r'clip-rule=', r'clipRule=', react_code)

    # Escape { and } not part of React expressions
    # This is tricky without a full AST parser. We'll just remove inline styles for now.
    react_code = re.sub(r'style="[^"]*"', '', react_code)

    # Escape > in text
    react_code = react_code.replace(" > ", " {'&gt;'} ")

    return react_code

dashboard_main = extract_main_content('stitch_dashboard.html')
with open('app/dashboard/DashboardContent.tsx', 'w', encoding='utf-8') as f:
    f.write('export function DashboardContent() {\n  return (\n<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">\n' + dashboard_main + '\n</main>\n  )\n}')

projects_main = extract_main_content('stitch_projects.html')
with open('app/projects/ProjectsContent.tsx', 'w', encoding='utf-8') as f:
    f.write('export function ProjectsContent() {\n  return (\n<main className="w-full pt-16 px-gutter-lg pb-margin-lg bg-background min-h-screen">\n' + projects_main + '\n</main>\n  )\n}')

print("Extracted <main> tags into React components.")
