from bs4 import BeautifulSoup
import re

with open('stitch_dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
body_content = soup.body.decode_contents()

# Basic conversion of class to className and style adjustments for React
react_code = re.sub(r'class="', r'className="', body_content)
react_code = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', react_code)

with open('react_dashboard_body.jsx', 'w', encoding='utf-8') as f:
    f.write(react_code)
print("Converted HTML to JSX")
