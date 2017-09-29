import request from 'superagent';
import md5 from 'md5'

const baseUrl = 'http://jservice.io/api/random';

export function getQuestion(){
  return dispatch => {
    request.get(`${baseUrl}`).end(
      (error, response) => {
        if(!error) {
          dispatch({ type: `GET_QUESTION`, question: response.body[0]});
        }
      }
    );
  };
}