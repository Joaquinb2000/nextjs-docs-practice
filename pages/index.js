import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Demo from '../components/demo'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout sx={(theme) =>({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0]})}home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.centered}>
          <p><strong> Web Developer</strong></p>
        </div>
        <div className={utilStyles.centered}>
          <p><strong> Frameworks:</strong></p>
          <ul>
            <li><strong> Ruby On Rails </strong></li>
            <li>React</li>
            <li>Express</li>
            <li>Next</li>
          </ul>
        </div>




      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title, content}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
            <Demo/>
      </section>
    </Layout>
  )
}
