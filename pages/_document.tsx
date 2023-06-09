import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-radix-gray-2 font-sans text-radix-gray-12 antialiased dark:bg-radix-grayDark-2 dark:text-radix-grayDark-12">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
