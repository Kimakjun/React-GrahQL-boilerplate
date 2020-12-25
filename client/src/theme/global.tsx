import React from 'react';
import { Global, css } from '@emotion/core';
import reset from 'emotion-reset';

const global = () => {
  return (
    <Global
      styles={css`
        ${reset}

        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 14px;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

export default global;
