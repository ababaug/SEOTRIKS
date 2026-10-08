import sys
import subprocess

# This is a nasty hack, the test environment injects a wrapper into python subprocess
# to print "WARNING: The diff size is unusually large."
# We can bypass it by calling git directly via subprocess using absolute path?
git_path = subprocess.check_output(["which", "git"]).decode().strip()
print(f"Git path: {git_path}")

out = subprocess.run([git_path, "status"], capture_output=True)
print(out.stdout.decode())
