import React from 'react';

const Face = ({ color_3, color_4, ...props }) => {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="_1"
      data-name={1}
      viewBox="0 0 680 855"
      {...props}
    >
      <defs>
        <filter
          id="luminosity-noclip"
          width={32}
          height={36}
          x={348}
          y={199.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="luminosity-noclip-2"
          width={32}
          height={36}
          x={290}
          y={199.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <mask
          id="mask"
          width={32}
          height={36}
          x={348}
          y={199.5}
          maskUnits="userSpaceOnUse"
        >
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAACXBIWXMAAAsSAAALEgHS3X78AAADjklEQVRYhe2YW5OjOAyFD2ADIST9//9mwsX4QvZh6qhkQzI9s7XVL0uVy4QmPp8kS1Ya+OGrAvD6SYD6J8UBwPybLzdNg6ZpUFUVAGDfd+z7jpTSfwdgjJHRdR2stQKQUkIIAdu2IcaIlNJvYb4NYIxB27a4Xq9o2xZt28IYI154vV4i6r3Htm1Y1xXruiLG+PcAWvhyuaDve/R9D2utAFRVhdfrhZQSYozw3sM5h7Zt0TQN5nlGCOHPAay1uF6vGMcRwzBgGAb0fS+uN8agrn/tYw2wbRvatoW1VgCnaTqFeAtgrcXtdsP9fsftdhOAruskBE3THAC89/JOCThN0yEcpwDGGIzjiK+vL9zvd4zjmIWgjD8A2XAhBHjvRZzhYYbM85xtzFOArutwu91kjOOIcRwl/nRvXdeo61oECOCcE3HCcW9s2/YZgK6n6DiOhxAw/saYzEKK6NpA8RAC1nWFMQbbtp0D0PV0OccwDFkI9AYsAfhcPwshoOs6dF2Hvu+lTpwCUHAYBlwuF1wul+y+zIC6riW+MUbZdDokbdsKQNd1aJrmHIAvMtY673X8uYj2QEop2/G0nPvFGHNI3QzAGJMJamKKcj6rAWU6WmsPwsyatwDMb2ttNjPtuBgLjHY3xfd9FyE9GK6qqmSDZgB1XcvLWkw/05/1TtenIYUoVs5aPAPgSyV1aYFeSBchPjsT+XRJMMoFSmq9KP9Gt3P+NPZ9zz4fPFBCnC2u72k1Xa9HSilLTZZpjrcAn8hLAQLrMsy85xxjlHTkPeEOAFpQC7GUclHtel0DeBKGEGTwM88ADn0iZgDabZo8hHBa+fT3KESxUnTbNjjnsCzLewBay0NFH6268ymLkD6InHNwzmFdVxFclgXrumJZFnjvsywQAH1w0AJaUXa+uuaXnRB7wWVZMM+z9IXzPJ+2ZgIQYxT6vu/hnMtaKoqflWGC0wMUX5YF0zTJ0MfwASClJLS63peWn5Vh3Y5rgOfzKfPz+TztjrM0jDFinueDiLbyzCsaQLt8miY8Hg88Ho9D7N8CLMvytt3m4VS2YjrtnHMSb1r+TvwAAAAhBMzzfGg0vPdZM6qLkM51hmCaJhH/4x8m3ns8Ho+swLxrxcqGkxkwTdNHy3l9/HlurUXf9xiGQdzPoxrIU5fdsHPut1Z/GwBA1g+wK9IZQPezgH1X+NsAZzA6A5ghf3v9/x+SfwD/ajCoqA11FAAAAABJRU5ErkJggg=="
            width={32}
            height={36}
            style={{
              filter: 'url(#luminosity-noclip)',
            }}
            transform="translate(348 199.5)"
          />
        </mask>
        <mask
          id="mask-1"
          width={32}
          height={36}
          x={290}
          y={199.5}
          maskUnits="userSpaceOnUse"
        >
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAACXBIWXMAAAsSAAALEgHS3X78AAADcklEQVRYhe2YXZOrKBCGXwVEJJn//zdnUBQQsxenmmoR52TP7tbcbKq6otGkH97+oA3ww68OwOsnAfqfdA4A8u/cLIRA3/fo+1/cx3HgOA7knP87ACEEhBCQUkJrDaUUhBAFYN93hBCw73uxfw1ASgljDIwxGIYBwzBASgkpZQE4jgMpJaSUEELAsiyIMb4NcguglIK1Fo/HA8YYjONYAPq+R9d1AICcM/Z9LwDGGKzr+jZIE0AphcfjgefzeQLQWkNKCSFEAaAwcADvPbTWmOcZy7IgpfQ+gJQS1lp8fHzg+XzCWotpmooCwzBcEjHnjBgjYozYtu0Urr7v4Zy7hTgBCCFgjCkrJ+N5QElICrxeL+SckVJCjLHcw0P1er3gnGuG4wQgpcQ0TZimCdbasnprbQkBAZACNQC/TpD7vt/mwwVgHMeyYmMMpmkqxwRAqyMAKj+6RqVLIaIcIcgmAK1eaw2tdQHh7+M4NgHICTmnaznnUiUxRoQQyr0XACEElFIFgBKJpKf3YRhOEnOAeuV1ia7rinVd2wB935cmo5QqAPyYf1YDpJQuLZo75wvYtq0NwNsuN6XUyXgvIAAqTa6I1hoxxuKYcsl7X1Q4JWHXdeWHOFALrG5GBKOUQs65OCcFKYGpP1wAuq5rGkldw/EyI+dUkgTI1ePgFKqLAq9XezYhgBqUEi7nfFKtVq91XkLPnVP8juMo59x+B3mnJqnFVbsoQI6pfKiE6Jhfp5jX8n8HWQNeAHhHo/Kpj1NKFwnpuxyOzt9RsQDwbhVCQIyxtE+yeg/g2c8bD6lWq8chmgDee1hrC0QIAdu2XXY3Amg1I25cUQ7TVAAAYoylXfLdr+WcMr81mNBswI0DHcfRBkgpYZ7n4pxPQLX0BMW7H23L27adQkmhpS35FgAAQgiY5/nU81s9nhrLnQKkpPce27adrLkZ8Vxwzt1uOtRm68mIK0C5470vEHS8ruvpOaI5lMYY8fn5edlw+N7+u9GMnNFgSlbPhrdjeQgBzjkA18HibjKqh1PvPZZlwdfXF5xzl9V/C5BzLsS8IfHJqB5MeAhoAHHOwTl3O55/+2TE65gymcaz1uRLvYAUoBB472/H8rcfz6WUZagggHpCrvvAuq6XrP9jAA5CxisFwCkHePf77vWP/qCoO+SfPK7//w/JXzYxHjNfXHoUAAAAAElFTkSuQmCC"
            width={32}
            height={36}
            style={{
              filter: 'url(#luminosity-noclip-2)',
            }}
            transform="translate(290 199.5)"
          />
        </mask>
        <style>
          {'.cls-1,.cls-2{fill:#efa18f;stroke-width:0}.cls-2{fill:#c46f51}'}
        </style>
      </defs>
      <path
        d="M333.73 212.1c.52-.04.98-.24 1.37-.54s2.05-1.28 2.49-4.13c.37-2.41.3-7.87-1.56-7.9-.89-.02-1.07 2.12-1.07 2.12s-.34 3.75-2.7 5.01c-.94.51-1.55 1.59-1.45 2.78.13 1.59 1.44 2.78 2.93 2.66ZM345.85 221.79a.941.941 0 0 0-1.22-.53c-9.1 3.57-17.13.05-17.21.02a.942.942 0 0 0-1.24.47c-.21.47 0 1.03.47 1.24.23.11 4 1.77 9.37 1.77 2.76 0 5.94-.44 9.29-1.75.48-.19.72-.73.53-1.22Z"
        fill={color_4}
      />
      <path
        d="M371.04 203.48c-6.57-3.36-15.09.19-19.04 7.92-3.95 7.73-1.83 16.72 4.74 20.07 6.57 3.36 15.09-.19 19.04-7.92 3.95-7.73 1.83-16.72-4.74-20.07Z"
        fill={color_3}
        style={{
          mask: 'url(#mask)',
        }}
      />
      <path
        d="M298.94 203.48c-6.57 3.36-8.69 12.34-4.74 20.07 3.95 7.73 12.48 11.28 19.04 7.92s8.69-12.34 4.74-20.07c-3.95-7.73-12.48-11.28-19.04-7.92Z"
        fill={color_3}
        style={{
          fill: color_3,
          mask: 'url(#mask-1)',
        }}
      />
    </svg>
  );
}

export default Face;
