export const ThemeIcon = ({ current }: { current: "dark" | "light" }) => {
  return (
    <>
      {current === "light" ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2V4"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20V22"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.92999 4.93018L6.33999 6.34018"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.66 17.6602L19.07 19.0702"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H4"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12H22"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.33999 17.6602L4.92999 19.0702"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.07 4.93018L17.66 6.34018"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.985 12.4859C20.8913 14.2221 20.2967 15.8939 19.2731 17.2993C18.2495 18.7047 16.8407 19.7836 15.217 20.4054C13.5934 21.0273 11.8243 21.1655 10.1238 20.8034C8.42321 20.4414 6.86395 19.5944 5.63445 18.3651C4.40496 17.1357 3.55788 15.5765 3.19561 13.876C2.83334 12.1755 2.97139 10.4065 3.59307 8.78273C4.21475 7.159 5.29345 5.7501 6.69877 4.72635C8.10409 3.70259 9.77586 3.10782 11.512 3.01391C11.917 2.99191 12.129 3.47391 11.914 3.81691C11.1949 4.96746 10.887 6.32778 11.0405 7.67586C11.194 9.02394 11.7999 10.2802 12.7593 11.2396C13.7187 12.199 14.975 12.8049 16.323 12.9584C17.6711 13.1119 19.0314 12.804 20.182 12.0849C20.526 11.8699 21.007 12.0809 20.985 12.4859Z"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
