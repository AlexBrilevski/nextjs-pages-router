import MeetupDetails from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage() {
  return (
    <MeetupDetails
      image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'}
      title={'The First meetup'}
      address={'Some address 5, 12345 Some City'}
      description={'This is the first meetup!'}
    />
  );
}

export default MeetupDetailsPage;
