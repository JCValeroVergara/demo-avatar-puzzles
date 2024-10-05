import React from 'react';

const Skirt = ({ fill1, fill2, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="_1"
      data-name={1}
      viewBox="0 0 680 855"
      {...props}
    >
      <defs>
        <style>{`.cls-2{stroke-width:0;fill:${fill2 || '#e8c9b9}'}`}</style>
      </defs>
      <path
        d="M464.48 676.57c-1.53-7.66-3.05-15.32-4.58-22.98-3.05-15.3-6.14-30.6-9.44-45.85-6.51-30.06-28.63-120.07-38.09-149.36-10.01-31-10.54-35.14-10.54-35.14l1.25-11.59H276.13l1.06 11.59c-.49.19-3.86 18.98-8.75 35.74-15.25 52.32-38.05 177.16-48.75 230.55-.26 1.31-.51 2.75.16 3.91.7 1.22 2.18 1.73 3.49 2.27 10.55 4.36 16.42 15.28 26.13 20.97 10.16 5.96 20.09-7.41 31.07-2.79 8.33 3.5 16.45 8.05 25.44 9.05 9.43 1.05 18.87-1.93 28.35-1.76 17.73.32 35.92 9.94 53.38 2.94 6.58-2.64 12.25-7.42 19.13-9.17 11.98-3.05 25.92 3.47 36.47-2.92 5.43-3.29 8.48-8.96 12.64-13.52 3.56-3.9 9.66-5.85 10.21-11.63.32-3.34-1.02-7.06-1.67-10.32Z"
        style={{
          strokeWidth: 0,
          fill: fill1 || '#d7b39e',
        }}
      />
      <path
        d="M270.12 526.26c1.99-6.41 4.75-15.25 8-24.95 3.26-9.7 6.38-18.42 8.66-24.73 2.28-6.31 3.67-10.23 3.45-10.32-.21-.08-2 3.67-4.58 9.89-2.58 6.21-5.89 14.9-9.16 24.63-3.26 9.73-5.85 18.66-7.54 25.16-1.69 6.51-2.53 10.58-2.31 10.64.24.06 1.49-3.9 3.47-10.31ZM284.29 523.75c2.09-6.96 3.82-12.58 5.05-16.46.61-1.94 1.06-3.45 1.36-4.48.29-1.03.42-1.58.36-1.6-.06-.02-.29.49-.69 1.49-.4 1-.96 2.47-1.66 4.38-1.42 3.81-3.34 9.39-5.58 16.31-2.25 6.92-4.74 15.23-7.31 24.5-2.53 9.29-5.12 19.55-7.54 30.39a658.57 658.57 0 0 0-5.99 30.73c-1.58 9.49-2.83 18.06-3.71 25.29-.89 7.22-1.5 13.07-1.82 17.13-.17 2.03-.28 3.6-.34 4.67-.06 1.07-.06 1.63 0 1.64.06 0 .18-.55.35-1.6.17-1.06.39-2.62.66-4.63.52-4.03 1.32-9.85 2.36-17.04 1.03-7.19 2.4-15.73 4.07-25.18 1.7-9.45 3.73-19.81 6.11-30.63 2.41-10.81 4.95-21.06 7.39-30.35 2.48-9.28 4.84-17.6 6.94-24.55ZM350.08 500.17c-1.21-16.54-2.9-31.46-4.37-42.22-.74-5.38-1.4-9.73-1.92-12.72s-.86-4.64-.97-4.63c-.12.02 0 1.69.31 4.71.43 3.95.88 8.17 1.38 12.78 1.17 10.79 2.65 25.7 3.87 42.2 1.2 16.51 1.9 31.47 2.32 42.31.18 4.63.34 8.87.5 12.84.13 3.03.26 4.71.38 4.71s.22-1.68.29-4.72c.08-3.04.1-7.43.05-12.86-.1-10.86-.61-25.87-1.82-42.41ZM417.09 575.12c.72 3.72 1.4 7.24 2.05 10.65.49 2.52.81 3.9.93 3.89.12-.02.02-1.43-.27-3.99-.27-2.55-.79-6.23-1.52-10.76-1.46-9.06-3.95-21.52-7.59-35.07-3.65-13.54-7.73-25.58-11.01-34.16-1.64-4.29-3.04-7.74-4.08-10.09-1.03-2.35-1.66-3.63-1.77-3.59-.11.04.3 1.41 1.15 3.83 1.14 3.28 2.32 6.67 3.56 10.25 2.98 8.66 6.86 20.71 10.5 34.19 3.62 13.49 6.29 25.86 8.05 34.84ZM430.01 697.17c-1.28-9.98-2.89-20.92-4.91-32.36-2.05-11.43-4.3-22.26-6.53-32.07-2.28-9.8-4.51-18.58-6.55-25.91-2.03-7.33-3.79-13.24-5.1-17.28-.65-2.03-1.17-3.6-1.54-4.65-.37-1.06-.59-1.61-.65-1.59-.06.02.05.6.32 1.69.26 1.09.68 2.69 1.23 4.74 1.12 4.1 2.69 10.05 4.57 17.4 1.89 7.36 4 16.15 6.18 25.95 2.14 9.81 4.35 20.62 6.39 32.02a853.63 853.63 0 0 1 5.03 32.26c.83 6.29 1.56 12.18 2.17 17.58.46 0 .92 0 1.38-.02-.53-5.45-1.19-11.41-1.98-17.76ZM386.4 603.95c-4.16-42.3-8.73-80.52-12.39-108.14-1.82-13.81-3.38-24.97-4.53-32.68-.53-3.46-.98-6.38-1.36-8.87-.14-.83-.27-1.58-.4-2.3-.1-.52-.16-.78-.19-.78s-.02.27.02.8c.07.72.15 1.49.23 2.32.29 2.49.64 5.43 1.04 8.91 1.02 8.4 2.37 19.43 3.99 32.74 3.34 27.65 7.72 65.87 11.88 108.15 4.15 42.29 7.28 80.63 9.38 108.4.21 2.81.41 5.5.6 8.1.36-.21.72-.41 1.09-.61-.15-2.44-.31-4.94-.48-7.57-1.79-27.8-4.73-66.17-8.88-108.48ZM329.18 514.27c-.17-2.78-.32-5.18-.44-7.32-.12-1.67-.21-2.55-.27-2.55-.06 0-.08.88-.07 2.56.04 2.14.08 4.55.12 7.33.17 7.13.38 16.16.64 26.94.53 22.75 1.07 54.18 1.1 88.9.02 34.72-.47 66.15-.95 88.9-.02.79-.03 1.55-.05 2.32.4-.03.79-.06 1.19-.08.03-.74.05-1.45.08-2.21.8-22.75 1.48-54.2 1.46-88.94-.04-34.74-.77-66.18-1.61-88.93-.42-11.37-.83-20.58-1.18-26.93ZM307.55 470.65c-.52 2.25-1.11 4.83-1.8 7.85-.77 3.41-1.69 7.59-2.67 12.46-.99 4.87-2.16 10.4-3.3 16.55-1.18 6.14-2.45 12.87-3.69 20.12-1.31 7.24-2.54 14.99-3.86 23.16-2.54 16.34-5.07 34.34-7.31 53.29-2.19 18.96-3.88 37.06-5.18 53.54-.59 8.24-1.19 16.08-1.58 23.42-.46 7.34-.78 14.18-1.05 20.42-.2 3.96-.32 7.65-.43 11.11.35.1.7.21 1.04.32.16-3.53.34-7.31.6-11.37.35-6.24.73-13.07 1.25-20.39.45-7.33 1.1-15.15 1.73-23.38 1.38-16.46 3.11-34.53 5.3-53.47 2.23-18.93 4.71-36.92 7.16-53.25 1.28-8.16 2.46-15.92 3.7-23.16 1.18-7.25 2.38-13.99 3.48-20.14 1.06-6.16 2.15-11.7 3.05-16.58.89-4.88 1.71-9.08 2.38-12.51.57-3.04 1.06-5.65 1.48-7.91.32-1.81.46-2.77.4-2.78-.06-.01-.31.92-.74 2.71ZM367.57 627.8c-.66-6.04-1.26-9.76-1.49-9.74-.24.02-.07 3.78.28 9.84.36 6.06.87 14.42 1.32 23.67.45 9.25.77 17.62 1.01 23.69s.45 9.82.69 9.82c.23 0 .46-3.76.53-9.84s-.06-14.48-.51-23.75c-.46-9.27-1.16-17.64-1.83-23.69Z"
        className="cls-2"
      />
    </svg>
  );
}

export default Skirt;