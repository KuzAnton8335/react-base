import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// настройка открытия при запуске dev сервера
	server: {
		open: true,
	},
});
