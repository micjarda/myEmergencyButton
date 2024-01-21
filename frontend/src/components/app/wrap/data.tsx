import { useEffect } from 'react';
import { setNewCalls, checkoutNewCall } from '../../../features/slices/callSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const DataLayout = ({ children }: any) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/${import.meta.env.VITE_CONTEXT_PATH}/${import.meta.env.VITE_AWID}/call/list`
      );
      const inputArray = response.data

      const answeredTrueArray = inputArray.filter(item => item.answerd === true);
      const answeredFalseArray = inputArray.filter(item => item.answerd === false);

      dispatch(checkoutNewCall(answeredTrueArray))
      dispatch(setNewCalls(answeredFalseArray));
    } catch (error) {
      console.error('Error fetching call list:', error);
    }
  };

  useEffect(() => {
    // Fetch initial data
    fetchData();

    // Set up interval to fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 800);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div>{children}</div>;
};

export default DataLayout;
