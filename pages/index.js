import sql from 'better-sqlite3';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

export async function getServerSideProps(contex) {
  const req = contex.req;
  const res = contex.res;

  const db = sql('meetups.db');
  const meetups =  db.prepare('SELECT * FROM meetups').all();

  return {
    props: {
      meetups,
    }
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
