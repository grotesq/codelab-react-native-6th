import React from 'react';
import Row from './Row';
import Paragraph from './ui/Paragraph';

export default function BoxOfficeItem({data}) {
  let intenIcon = '⏺';
  const parsedRankInten = parseInt(data.rankInten, 10);
  if (parsedRankInten < 0) {
    intenIcon = '🔽';
  } else if (parsedRankInten > 0) {
    intenIcon = '🔼';
  }
  return (
    <Row>
      <Paragraph>
        <Paragraph>{data.rank}</Paragraph>
        <Paragraph>
          {intenIcon} {data.rankInten}
        </Paragraph>
        <Paragraph>{data.movieNm}</Paragraph>
        <Paragraph>{data.rankOldAndNew === 'NEW' ? '🆕' : ''}</Paragraph>
      </Paragraph>
    </Row>
  );
}
