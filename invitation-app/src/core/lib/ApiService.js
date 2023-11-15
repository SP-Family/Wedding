import axios from "axios";

export class ApiService {
  constructor(baseUrl) {
    const options = {
      baseUrl: baseUrl,
      withCredentials: true, //TODO:: CORS 요청 허용 옵션?? (https://velog.io/@yedol1/Axios-%EC%9D%98-withCredentials)
    };
    this.instance = axios.create(options);
  }

  getBlahBlah() {
    return this.instance.get("/api");
  }
}
