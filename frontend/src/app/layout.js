import "./globals.css";

export const metadata = {
  title: "sociouts - plan social outings",
  description: "codejam14",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
