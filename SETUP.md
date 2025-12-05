# GitHub Pages Setup Instructions

This document explains how to enable GitHub Pages for this repository.

## Steps to Enable GitHub Pages

1. **Navigate to Repository Settings:**
   - Go to [https://github.com/scions-of-silverymoon/user-guide](https://github.com/scions-of-silverymoon/user-guide)
   - Click on "Settings" tab

2. **Configure GitHub Pages:**
   - Scroll down to "Code and automation" section in the left sidebar
   - Click on "Pages"

3. **Set Source:**
   - Under "Build and deployment"
   - Source: Select "GitHub Actions"

4. **Merge This PR:**
   - Once this PR is merged to the main branch
   - The GitHub Actions workflow will automatically build and deploy the site

5. **Access Your Site:**
   - After the first successful deployment
   - The site will be available at: [https://scions-of-silverymoon.github.io/user-guide/](https://scions-of-silverymoon.github.io/user-guide/)

## Workflow Details

The `.github/workflows/pages.yml` workflow will:
- Trigger automatically on every push to the main branch
- Build the Jekyll site using GitHub's official actions
- Deploy to GitHub Pages
- Can also be triggered manually via "workflow_dispatch"

## Next Steps

After the infrastructure is deployed:
1. Remove or update `_guides/example.md` with actual content
2. Add new guide pages to the `_guides/` directory
3. Update `index.md` with proper navigation and content
4. Follow the guidelines in `CONTRIBUTING.md` for content standards

## Troubleshooting

If the deployment fails:
- Check the Actions tab for error logs
- Ensure GitHub Pages is enabled in repository settings
- Verify the repository has Pages write permissions
- Check that the workflow file is on the main branch
