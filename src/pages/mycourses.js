/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { navigate } from '@reach/router';

import { GET_MY_COURSES } from '../gql/query';
import { ThemeContext } from '../Context/theme/themeContext.js';

const MyCoursesPage = (props) => {
  const { themeColors } = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_MY_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!! {error.message}</p>;
  return (
    <div
      css={css`
        padding: 2rem;
      `}
    >
      <h1>
        My Courses <span>.</span>
      </h1>
      <div
        css={css`
          display: inline-flex;
          border-radius: 8px;
          background: ${themeColors.secondaryBgColor};
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          h1 {
            font-size: 4rem;
          }
        `}
      >
        <h1>{data.me.coursesBought.length}</h1>
        <span>courses bought</span>
      </div>
      {data.me.coursesBought.length !== 0 && (
        <div
          css={css`
            width: 100%;
            padding: 1rem;
            overflow-x: auto;
          `}
        >
          {data.me.coursesBought.map((course) => (
            <div
              key={course._id}
              css={css`
                max-width: 30%;
                padding: 2rem 1rem;
                margin: 1rem;
                border-radius: 8px;
                background: ${themeColors.secondaryBgColor};
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
              `}
            >
              <h1>{course.coursename}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage;
