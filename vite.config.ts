import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import generateScopedName from "postcss-modules/build/generateScopedName";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [reactRefresh()],
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        // avoid breaking tailwindcss darkmode
        if (name === "dark") return "dark";
        return generateScopedName(name, filename, css);
      }
    }
  }
});
