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
      <body>
        <Header />
        <main className="flex-grow md:p-6 md:ml-64 p-1 mt-2 ">{children}</main>
      </body>
    </html>
  );
}
