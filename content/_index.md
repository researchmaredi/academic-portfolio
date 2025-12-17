---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  # 1. THE MAIN PROFILE SECTION (Button removed)
  - block: resume-biography-3
    content:
      username: me
      text: ''
      # Button removed from here so it doesn't appear at the top
      headings:
        about: ''
        education: ''
        interests: ''
    
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
      # Important: Minimize bottom padding so the button block below sits closer
      spacing:
        padding: ["5rem", "0", "1rem", "0"]

  # 2. NEW SECTION: THE BUTTON (Placed manually at the bottom)
  - block: markdown
    content:
      text: |
        <div style="text-align: center;">
          <a class="btn btn-primary btn-lg" href="uploads/resume.pdf" target="_blank" rel="noopener">
            <i class="fas fa-download"></i> Download CV
          </a>
        </div>
    design:
      # Remove top padding so it looks like it belongs to the section above
      spacing:
        padding: ["0", "0", "5rem", "0"]
---