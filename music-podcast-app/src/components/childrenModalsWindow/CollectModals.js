import { ProfileAndResult } from "../modal/Modal";
import Result from "./Result";

const CollectModals = (props) => {
    const {resultOpen, note, isClose} = props
  return (
    <>
        <ProfileAndResult openAuto={resultOpen} close={isClose}>
        <Result note={note}/>
        </ProfileAndResult>
    </>
  );
}

export default CollectModals;
