import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, //Habilitar rede externa
    open: true, //Abre automaticamente o navegador e inicia o server
    port: 3000, //Porta para conexao, altera quando necessario
  },
});
