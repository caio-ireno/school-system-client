import "./globals.css";
import Header from "@/components/Header";

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
      <body className="flex">
        <Header />
        <main className="flex-grow p-6 ml-64">{children}</main>
      </body>
    </html>
  );
}
