import "./globals.css";

export const metadata = {
  title: "ElectEd — Your Election Guide",
  description:
    "Your interactive guide to the democratic process. Learn about elections, voter registration, how to vote, and test your civics knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
