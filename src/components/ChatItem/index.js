import Avatar from '../Avatar';
import { Container, DetailsItem, DetailName, DetailMessage } from './styles';

export default function ChatItem() {
  return (
    <Container>
      <Avatar
        src={
          'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/92246606_2772865659435604_7217784693746302976_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Not4-4CxLfgAX_kaDnp&_nc_ht=scontent.fbnu1-1.fna&oh=8a49097075715fb33b50036607c2e4f8&oe=607EC7E8'
        }
        alt='avatar profile'
        type='circle'
      />
      <DetailsItem>
        <DetailName>Natália Maria</DetailName>
        <DetailMessage>Hello! What's up?</DetailMessage>
      </DetailsItem>
    </Container>
  );
}
