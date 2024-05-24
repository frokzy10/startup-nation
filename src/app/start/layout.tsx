import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'nurdin',
    description: 'top',
    icons:"https://static.vecteezy.com/system/resources/previews/009/481/029/non_2x/geometric-icon-logo-geometric-abstract-element-free-vector.jpg"
};

export default function StartPage({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}