// import { useEffect } from 'react';
import { ErrorPortal } from '../modal/Modal';
import Error from './Error';
import { ProfileAndResult } from "../modal/Modal";
import Result from "./Result";
import { SuccessPortal } from '../modal/Modal';
import Success from './Success';


let interval;

const CollectModals = ({open, close, resultOpen, setResultOpen}) => {

//     useEffect(() => {
//     interval = setTimeout(() => {
//         setResultOpen(true)
//     }, 2000)
//   }, [])

  const handleCloseModal = () => {
    if (resultOpen) {
        setResultOpen(false)
      clearTimeout(interval)
    }

    return () => clearTimeout(interval)
  }
  return (
    <>
        <SuccessPortal statusopen={open} statusclose={() => close(false)}>
            <Success />
        </SuccessPortal>

        <ErrorPortal statusopen={open} statusclose={() => close(false)}>
            <Error />
        </ErrorPortal>

        <ProfileAndResult openAuto={resultOpen} closeBtn={handleCloseModal}>
        <Result />
    </ProfileAndResult>
    </>
  );
}

export default CollectModals;
