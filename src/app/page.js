"use client"
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import AcroSearch from "@/app/components/acro-search";
import {ACR_ARR, ACR_TITLE} from "@/app/components/acro-data";
import {useState} from "react";
import {Chip, dividerClasses, ListItem, Paper, Stack, styled} from "@mui/material";

const inter = Inter({subsets: ['latin']})
const title = ACR_TITLE;
const items = ACR_ARR;
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(255,255,255,.8)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


export default function Home() {
    const [arr, setArr] = useState([]);
    const hs = (item) => {
        // the item selected
        const newItem = {id: item.id, name: item.name, val: item.val};
        setArr([...arr, newItem]);
        // console.log([...arr])
        console.log(item)
    }
    const handleDelete = (chipToDelete) => () => {
        setArr((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
    };
    return (
        <main className={styles.main}>
            {/*<div className={styles.description}>*/}
            <div >
                {/*<div className={styles.searchblock}>*/}
                <div >
                    <div className={styles.shead}>
                        <div className={styles.center}>
                            <Image
                                className={styles.logo}
                                src="/next.svg"
                                alt="Next.js Logo"
                                width={180}
                                height={37}
                                priority
                            /> by
                            <div className={styles.thirteen}>
                                <Image src="/thirteen.svg" alt="AHE2" width={59} height={27} priority/>
                            </div>
                        </div>
                        <p className={styles.txt}>{title.subtitle}</p>
                    </div>
                    <div className={styles.searchinput}>
                        <AcroSearch items={items} handleOnSelect={hs}/>
                    </div>
                    <div className={styles.stack}>
                        <Stack spacing={2}>
                            {arr.map(el => {
                                return <ListItem key={el.id}>
                                    <Chip variant="outlined" color="primary" label={el.name} />
                                    <Chip color="info" label={el.val} onDelete={el.label === el.val ? undefined : handleDelete(el)} />
                                </ListItem>


                                // <div key={el.id} className={styles.itemsel}>
                                //     <h2>{el.name}: </h2>
                                //     <span>{el.val}</span>
                                // </div>
                            })}
                        </Stack>

                    </div>
                </div>

                {/*<p>*/}
                {/*  Get started by editing&nbsp;*/}
                {/*  <code className={styles.code}>src/app/page.js</code>*/}
                {/*</p>*/}

                {/*<div>*/}
                {/*<a*/}
                {/*  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  By{' '}*/}
                {/*  <Image*/}
                {/*    src="/vercel.svg"*/}
                {/*    alt="Vercel Logo"*/}
                {/*    className={styles.vercelLogo}*/}
                {/*    width={100}*/}
                {/*    height={24}*/}
                {/*    priority*/}
                {/*  />*/}
                {/*</a>*/}
                {/*</div>*/}
            </div>

            {/*<div className={styles.center}>*/}
            {/*  <Image*/}
            {/*    className={styles.logo}*/}
            {/*    src="/next.svg"*/}
            {/*    alt="Next.js Logo"*/}
            {/*    width={180}*/}
            {/*    height={37}*/}
            {/*    priority*/}
            {/*  />*/}
            {/*  <div className={styles.thirteen}>*/}
            {/*    <Image src="/thirteen.svg" alt="AHE2" width={59} height={27} priority />*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className={styles.grid}>
                {/*<a*/}
                {/*  href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
                {/*  className={styles.card}*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <h2 className={inter.className}>*/}
                {/*    Docs <span>-&gt;</span>*/}
                {/*  </h2>*/}
                {/*  <p className={inter.className}>*/}
                {/*    Find in-depth information about Next.js features and API.*/}
                {/*  </p>*/}
                {/*</a>*/}

                {/*<a*/}
                {/*  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
                {/*  className={styles.card}*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <h2 className={inter.className}>*/}
                {/*    Templates <span>-&gt;</span>*/}
                {/*  </h2>*/}
                {/*  <p className={inter.className}>Explore the Next.js 13 playground.</p>*/}
                {/*</a>*/}

                {/*<a*/}
                {/*  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
                {/*  className={styles.card}*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <h2 className={inter.className}>*/}
                {/*    Deploy <span>-&gt;</span>*/}
                {/*  </h2>*/}
                {/*  <p className={inter.className}>*/}
                {/*    Instantly deploy your Next.js site to a shareable URL with Vercel.*/}
                {/*  </p>*/}
                {/*</a>*/}
            </div>
        </main>
    )
}
