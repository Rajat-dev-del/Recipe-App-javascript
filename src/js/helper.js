import {TIMEOUT_SEC} from './config.js'

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async function(url) {
    try {
      const fetchPromise = fetch(url);
      const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
      const data = await response.json();
      console.log(data.message);
      if(!response.ok) throw new Error( `${data.message} (${response.status})`);
      return data;
    } catch (error) {
      throw error;
    }

}