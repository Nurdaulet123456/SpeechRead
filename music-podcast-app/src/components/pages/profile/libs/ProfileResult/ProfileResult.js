// ? import CSS files
import './Repo.css';

// ? Import other files
import React from 'react';

const ProfileResult = () => {
  return (
    <>
      <div className='profile__result'>
        <div className="profile__repo"></div>
         
        <div className="profile__content">
            <h3 className="result__btn activity">Contribution activity</h3>

            <div className="every__day-activity">
                <h3 className='date'>
                    <span className="month">
                        November
                    </span>

                    <span className="year">
                        2002
                     </span>
                </h3>

                <div className="TimelineItem">
                    <div className="TimelineItem-body">
                        <details open={'open'} className="Details-element details-reset">
                            <summary className='btn-link f4 Link--muted no-underline lh-condensed width-full' role={'button'}>
                                <span className="color-fg-default ws-normal text-left">
                                    Сегодня учил 130 слов и 2 страниц
                                </span>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>

            <div className="every__day-activity">
                <h3 className='date'>
                    <span className="month">
                        November
                    </span>

                    <span className="year">
                        2002
                     </span>
                </h3>

                <div className="TimelineItem">
                    <div className="TimelineItem-body">
                        <details open={'open'} className="Details-element details-reset">
                            <summary className='btn-link f4 Link--muted no-underline lh-condensed width-full' role={'button'}>
                                <span className="color-fg-default ws-normal text-left">
                                    Сегодня учил 130 слов и 2 страниц
                                </span>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>

            <div className="every__day-activity">
                <h3 className='date'>
                    <span className="month">
                        November
                    </span>

                    <span className="year">
                        2002
                     </span>
                </h3>

                <div className="TimelineItem">
                    <div className="TimelineItem-body">
                        <details open={'open'} className="Details-element details-reset">
                            <summary className='btn-link f4 Link--muted no-underline lh-condensed width-full' role={'button'}>
                                <span className="color-fg-default ws-normal text-left">
                                    Сегодня учил 130 слов и 2 страниц
                                </span>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProfileResult;
