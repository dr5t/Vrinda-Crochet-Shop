import os
import glob

replacements = {
    '#F8FAFF': '#fffcf7',
    '#7FD8FF': '#596859',
    '#CDB4FF': '#875858',
    '#FFC8A2': '#6c6450',
    '#1A1A1A': '#383833',
    '#6B7280': '#65655e',
    '#9CA3AF': '#bbb9b2'
}

for root, _, files in os.walk('/Users/shauryatiwari/pari_di/mobile/src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            new_content = content
            for old_color, new_color in replacements.items():
                new_content = new_content.replace(old_color, new_color)
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
