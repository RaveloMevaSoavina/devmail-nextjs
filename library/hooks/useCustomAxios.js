import { useState, useEffect } from "react";
import axios from "axios";

export const useCustomAxios = (req) => {
  const [request, setRequest] = useState(req);
  const [respo, setResponse] = useState({
    loading: false,
    error: null,
    response: null,
  });

  useEffect(() => {
    if (request) {
      if (request.method === "post") {
        setResponse({ ...respo, loading: true });
        if (request.withToken) {
          axios.defaults.headers.post["Content-Type"] = "application/json";
          axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${localStorage.getItem("token")}`;
        }
        //, {headers: {'content-type':'multipart/form-data'}}

        axios
          .post(request.url, request.params)
          .then((res) => {
            setResponse({ ...respo, loading: false, response: res.data });
          })
          .catch((err) => {
            console.log(err);
            setResponse({
              ...respo,
              loading: false,
              error: err.response
                ? err.response.data
                : { message: "Unexpected error :(" },
            });
          });
      } else if (request.method === "get") {
        setResponse({ ...respo, loading: true });
        if (request.withToken) {
          axios.defaults.headers.post["Content-Type"] = "application/json";
          axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${localStorage.getItem("token")}`;
        }
        //, {headers: {'content-type':'multipart/form-data'}}
        console.log("request.url", request.url);
        axios
          .get(request.url)
          .then((res) => {
            setResponse({ ...respo, loading: false, response: res.data });
          })
          .catch((err) => {
            console.log(err);
            setResponse({
              ...respo,
              loading: false,
              error: err.response
                ? err.response.data
                : { message: "Unexpected error :(" },
            });
          });
      } else if (request.method === "delete") {
        setResponse({ ...respo, loading: true });
        if (request.withToken) {
          axios.defaults.headers.post["Content-Type"] = "application/json";
          axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${localStorage.getItem("token")}`;
        }
        //, {headers: {'content-type':'multipart/form-data'}}

        axios
          .delete(request.url)
          .then((res) => {
            setResponse({ ...respo, loading: false, response: res.data });
          })
          .catch((err) => {
            console.log(err);
            setResponse({
              ...respo,
              loading: false,
              error: err.response
                ? err.response.data
                : { message: "Unexpected error :(" },
            });
          });
      }
    }
  }, [request]);

  return [respo, setRequest];
};
