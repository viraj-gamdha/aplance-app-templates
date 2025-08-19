# aplance-app-templates

Welcome to the `aplance-app-templates` repository! This repository is a collection of reusable application templates to help you kickstart your projects quickly. Templates are organized into `frontend`, `backend`, and `fullstack` categories on the `main` branch, with each template also maintained in its own isolated branch for easy cloning and use.

## Description

- **Purpose**: Provides ready-to-use templates for building applications, saving you time on initial setup.
- **Categories**: Includes templates for frontend (e.g., React), backend (e.g., Node.js - Express.js, Nest.js), and fullstack projects.
- **Structure**: On the `main` branch, templates are organized in subfolders (`frontend/`, `backend/`, `fullstack/`). Each template has its own branch with files at the root for seamless project initialization.

## Folder Structure

```
aplance-app-templates/
├── frontend/
│   ├── <frontend-template>/
│   # Frontend templates
├── backend/
│   ├── <backend-template>/
│   # Backend templates
├── fullstack/
│   ├── <fullstack-template>/
│   # Fullstack templates
├── README.md
```

## How to Clone and Use a Template

1. **Find the Branch Name**:
   - Go to your GitHub repository and find the branch for the template you want (e.g., `react-vite-ts-scss`).

2. **Open Your Terminal**:
   - Navigate to the folder where you want to create your new project.

3. **Run the Clone Command**:
   - Use the `-b` flag to specify the branch name.
     ```bash
     git clone -b <template-name> https://github.com/viraj-gamdha/aplance-app-templates.git <project-folder-name>

     # Example
     git clone -b react-vite-ts-scss https://github.com/viraj-gamdha/aplance-app-templates.git my-new-app
     ```
   - In place of project-folder-name can just use . if want to clone in root of folder.
   - This command creates a new folder (e.g., `my-new-app`) containing only the files from the specified template branch.

4. **Start Your Project**:
   - Navigate into the project folder (optional if new dir is created):
     ```bash
     cd <project-folder-name>
     ```
   - Follow the template-specific `README.md` (if available) for setup instructions.
   - Install dependencies and run the project as described (e.g., `npm install && npm run dev` for a Vite-based template).

5. **Clone the Entire Catalog (Optional)**:
   - To browse all templates, clone the `main` branch:
     ```bash
     git clone https://github.com/viraj-gamdha/aplance-app-templates.git your-folder-name
     cd your-folder-name
     ```
   - Explore the `frontend/`, `backend/`, and `fullstack/` folders to view all templates.

## Notes
- **Template Branches**: Each template branch (e.g., `react-vite-ts-scss`) contains only the template's files at the root, ideal for starting a new project.
- **Main Branch**: Acts as a catalog with all templates organized in subfolders for reference.
- **Choosing a Template**: Use the template's branch for a clean project setup, or explore the `main` branch to compare multiple templates.