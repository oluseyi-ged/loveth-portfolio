export const metadata = {
  title: "Loveth | Content Creator & Brand Partner",
  description:
    "Loveth is a lifestyle and fashion content creator specializing in authentic brand collaborations and campaigns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFF8F5] font-[Inter] text-[#3D2C2C]">
        {children}
      </body>
    </html>
  );
}
