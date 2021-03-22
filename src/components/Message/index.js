import React from 'react';
import moment from 'moment';
import Avatar from '../Avatar';
import {
  ContainerMessage,
  Timestamp,
  MineMessage,
  ReceiverMessage,
  ContentMessage,
} from './styles';

export default function Message({
  data,
  isMine,
  isStartsSequence,
  endsSequence,
  showTimestamp,
  theme,
}) {
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  return (
    <ContainerMessage>
      {showTimestamp && <Timestamp>{friendlyTimestamp}</Timestamp>}

      <ContentMessage isStartsSequence={isStartsSequence} isMine={isMine}>
        {!isMine && (
          <Avatar
            src={
              'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/92246606_2772865659435604_7217784693746302976_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Not4-4CxLfgAX_kaDnp&_nc_ht=scontent.fbnu1-1.fna&oh=8a49097075715fb33b50036607c2e4f8&oe=607EC7E8'
            }
            alt='avatar profile'
            type='circle'
          />
        )}
        {isMine ? (
          <MineMessage title={friendlyTimestamp}>{data.message}</MineMessage>
        ) : (
          <ReceiverMessage title={friendlyTimestamp} theme={theme}>
            {data.message}
          </ReceiverMessage>
        )}
      </ContentMessage>
    </ContainerMessage>
  );
}
