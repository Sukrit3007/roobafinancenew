import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import { Lexend } from "next/font/google";
import { Krona_One as KronaOne } from "next/font/google";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export const lexend = Lexend({
  subsets: ["latin"],
  weight : ['100','200','300',"400","500","600","700","800",'900'],
  variable: '--my-font-family'
})

export const korna_one = KronaOne({
  subsets:["latin"],
  weight: ['400'],
  variable: '--vertical-font'
})