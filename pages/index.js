import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <Navbar />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          dicta culpa voluptas accusamus. Blanditiis distinctio porro, omnis
          soluta eaque nam. Possimus hic quam officiis harum eaque
          exercitationem vitae doloremque ipsum optio dicta facilis beatae
          corporis quis, neque impedit id dolore repellendus consectetur soluta
          non ad tenetur cum porro. Assumenda iure praesentium maiores illum.
          Soluta sunt delectus velit inventore libero fugiat. Est saepe quisquam
          inventore, culpa accusantium possimus dolor excepturi nulla optio rem
          rerum modi reprehenderit deserunt explicabo nam eligendi magnam eos ea
          quibusdam minus architecto necessitatibus iusto! Mollitia delectus
          unde, sit molestias ullam vitae doloremque! Sapiente veniam aspernatur
          veritatis! Dolore?
        </div>
      </main>
    </>
  );
}
