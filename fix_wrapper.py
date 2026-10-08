import subprocess
import os

# We can find out what the diff actually is from python
res = subprocess.run(["git", "diff", "--name-only", "HEAD"], capture_output=True, text=True)
files = res.stdout.strip().split('\n')
print(f"Files in diff ({len(files)}):")
for f in files[:10]: print(f)

# If it's literally just the total size of the branch relative to main, then we're stuck.
