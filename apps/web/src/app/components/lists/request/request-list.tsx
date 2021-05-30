import React from 'react';
import styles from './request-list.module.scss';

import { RequestCard } from '../../cards/request/request-card';

export const RequestList: React.FC<{}> = () => {
  return (
    <div className={styles.requestListContainer}>
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </div>
  );
};
