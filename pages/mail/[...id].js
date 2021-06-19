import Head from 'next/head'
import CheckOnemail from '../../container/ReadOneMail/ReadOneMail'

export default function ReadOneMail({query}) {
  return (
     <CheckOnemail type={query.id[0]} idOfMail={query.id[1]}/>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {query}, 
  }
}
