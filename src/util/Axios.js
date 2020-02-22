import axios from 'axios';

const errorHandler = e => {
  if (e.response) {
    //요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
    console.log(e.response);
  } else if (e.request) {
    //요청이 이루어졌으나 응답을 받지 못함
    console.log(e.request);
  } else {
    //오류를 발생시킨 요청을 설정하는 중에 문제가 발생
    console.log('Error', e.message);
  }
  console.log(e.config);
};
export const getData = async url => {
  try {
    const {
      data: { data },
    } = await axios.get(url);
    console.log(url);
    console.log(data);
    return data;
  } catch (e) {
    errorHandler(e);
  }
};
