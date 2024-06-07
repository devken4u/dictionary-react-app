import { useState } from "react";
import axios from "axios";

function useFetchData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function execute(url) {
    try {
      setLoading(true);
      setData(null);
      setError(null);
      const response = await axios(url);
      setData(response.data);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, data, execute };
}

export default useFetchData;
