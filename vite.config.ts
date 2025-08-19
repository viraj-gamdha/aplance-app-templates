import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import crypto from "crypto";

export default defineConfig({
  plugins: [react()],
  // Alias for src folder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Updating naming convention for SCSS/CSS Modules class names
  css: {
    modules: {
      generateScopedName: (className, filePath) => {
        const rawFileName = path.basename(filePath); // App.module.scss
        const cleaned = rawFileName
          .replace(/\b.module\b/, "") // Remove 'module'
          .replace(/\.[^/.]+$/, "") // Remove extension
          .toLowerCase(); // Convert to lowercase

        const hash = crypto
          .createHash("sha256")
          .update(`${cleaned}_${className}`)
          .digest("hex")
          .slice(0, 5);

        // (e.g. button_base_xhwr3)
        return `${cleaned}_${className}_${hash}`;
      },
    },
    // This is to import media vars (from _media.scss) in all scss style-sheets
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/media" as *;`,
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    allowedHosts: ["mydomain.com"], ///update this before deployment
  },
  preview: {
    port: 5173,
    strictPort: true,
    allowedHosts: ["mydomain.com"], ///update this before deployment
  },
});
