import sql from 'better-sqlite3';

import MeetupDetails from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetails {...props.meetupData} />
  );
}

export async function getStaticPaths() {
  const db = sql('meetups.db');
  const meetups = db.prepare('SELECT * FROM meetups').all();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({ params: { meetupId: meetup.url } })),
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const db = sql('meetups.db');
  const meetupData = db.prepare('SELECT * FROM meetups WHERE url = ?').get(meetupId);

  console.log(meetupData);

  return {
    props: {
      meetupData,
    },
  };
}

export default MeetupDetailsPage;
