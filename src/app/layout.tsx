import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import Header from "@/widgets/header/ui/Header";
import StoreProvider from "@/app/_providers/store/ui/StoreProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Поиск быта",
    description: "типа",
    icons:"https://static.vecteezy.com/system/resources/previews/008/213/768/non_2x/letter-n-thunderbolt-energy-logo-symbol-icon-design-vector.jpg"
};

export default function RootLayout({
    children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StoreProvider>
            <Header/>
            {children}
        </StoreProvider>
        </body>
        </html>
    );
}
