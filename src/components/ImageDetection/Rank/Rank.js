import React from 'react';

import { LoggedUserConsumer } from '../../../contexts/LoggedUserContext';

const Rank = () => {
  return (
    <LoggedUserConsumer>
      {
        ({ userData: { fullname, entries } }) => {
          return (
            <div>
              <div className="white f3">
                {`${fullname}, your entries count is...`}
              </div>
              <div className="white f1">
                {entries}
              </div>
            </div>
          )
        }
      }
    </LoggedUserConsumer>
  );
}

export default Rank;