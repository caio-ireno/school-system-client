import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "School System",
  description: "Gerenciamento de alunos, professores e turmas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="flex flex-row  justify-between p-4">
          <h1>School System</h1>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
