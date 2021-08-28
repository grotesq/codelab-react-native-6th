import React, {useEffect, useState} from 'react';
import BoxOfficeItem from '../components/BoxOfficeItem';
import axios from 'axios';

export default function BoxOffice() {
  const [ranks, setRanks] = useState([]);
  useEffect(() => {
    const url =
      'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    axios
      .get(url, {
        params: {
          key: '2363f339334c482a526d952cdba548b3',
          targetDt: '20210827',
        },
      })
      .then(response => {
        setRanks(response.data.boxOfficeResult.dailyBoxOfficeList);
      });
  }, []);
  return (
    <>
      {ranks.map(item => (
        <BoxOfficeItem key={item.rnum} data={item} />
      ))}
    </>
  );
}
