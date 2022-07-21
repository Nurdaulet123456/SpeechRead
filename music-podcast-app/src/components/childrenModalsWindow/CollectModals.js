import { ProfileAndResult } from "../modal/Modal";
import {ShowWords} from '../modal/Modal'
import Result from "./Result";
import Words from './Words'

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

const SeeWords = ({show, close, words}) => {
  return (
    <>
      <ShowWords openKey={show} closeKey={close}>
          <Words isNote={words}/>
      </ShowWords>
    </>
  )
}

export {CollectModals, SeeWords};
