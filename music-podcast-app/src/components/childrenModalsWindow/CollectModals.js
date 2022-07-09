// import { useEffect } from 'react';
import { ProfileAndResult } from "../modal/Modal";
import Result from "./Result";


let interval;

const CollectModals = ({resultOpen, setResultOpen}) => {

  //   useEffect(() => {
  //   interval = setTimeout(() => {
  //       setResultOpen(true)
  //   }, 2000)
  // }, [])

  const handleCloseModal = () => {
    if (resultOpen) {
        setResultOpen(false)
      clearTimeout(interval)
    }

    return () => clearTimeout(interval)
  }
  return (
    <>
        <ProfileAndResult openAuto={resultOpen} closeBtn={handleCloseModal}>
        <Result />
    </ProfileAndResult>
    </>
  );
}

export default CollectModals;
