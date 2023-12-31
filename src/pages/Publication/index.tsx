import { ArrowSquareUpRight } from "@phosphor-icons/react";
import { PublicationHeader, PublicationBody } from "./styles";
import { useParams } from "react-router-dom";

export function Publication() {

  const {id} = useParams()

  return (
    <>
      <PublicationHeader>
        <header>
          <h3>voltar</h3>

          <a href="#">
            VER NO GITHUB
            <ArrowSquareUpRight size={16} color="#3294f8" weight="bold" />
          </a>
        </header>

        <h2>JavaScript data types and data structures</h2>

        <footer>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_403_164)">
                <path
                  d="M6.20678 14.1502C6.20678 14.22 6.12853 14.2758 6.02986 14.2758C5.91759 14.2863 5.83934 14.2305 5.83934 14.1502C5.83934 14.0804 5.91759 14.0246 6.01626 14.0246C6.11832 14.0141 6.20678 14.07 6.20678 14.1502ZM5.14869 13.9932C5.12487 14.063 5.19292 14.1432 5.29499 14.1642C5.38344 14.1991 5.48551 14.1642 5.50592 14.0944C5.52634 14.0246 5.46169 13.9444 5.35963 13.9129C5.27117 13.8885 5.17251 13.9234 5.14869 13.9932ZM6.65247 13.9339C6.55381 13.9583 6.48576 14.0246 6.49597 14.1049C6.50617 14.1747 6.59463 14.22 6.6967 14.1956C6.79536 14.1712 6.86341 14.1049 6.8532 14.0351C6.84299 13.9688 6.75113 13.9234 6.65247 13.9339ZM8.89113 0.5625C4.17225 0.5625 0.5625 4.23684 0.5625 9.07664C0.5625 12.9464 2.93725 16.2578 6.32926 17.4233C6.76474 17.5035 6.91784 17.2279 6.91784 17.0011C6.91784 16.7847 6.90764 15.5913 6.90764 14.8586C6.90764 14.8586 4.52608 15.382 4.02596 13.8187C4.02596 13.8187 3.6381 12.8033 3.08014 12.5416C3.08014 12.5416 2.30103 11.9938 3.13458 12.0042C3.13458 12.0042 3.98173 12.074 4.44783 12.9045C5.19292 14.2514 6.44153 13.8641 6.92805 13.6338C7.0063 13.0755 7.22745 12.6882 7.4724 12.4579C5.57056 12.2415 3.65171 11.9589 3.65171 8.60208C3.65171 7.64249 3.91028 7.16096 4.45464 6.54682C4.36618 6.32001 4.07699 5.38485 4.54309 4.17752C5.25416 3.95071 6.89062 5.11966 6.89062 5.11966C7.57107 4.92425 8.30255 4.82306 9.02722 4.82306C9.75189 4.82306 10.4834 4.92425 11.1638 5.11966C11.1638 5.11966 12.8003 3.94722 13.5113 4.17752C13.9774 5.38834 13.6883 6.32001 13.5998 6.54682C14.1442 7.16445 14.4776 7.64598 14.4776 8.60208C14.4776 11.9693 12.4737 12.238 10.5718 12.4579C10.8848 12.7335 11.1502 13.2569 11.1502 14.0769C11.1502 15.2529 11.14 16.708 11.14 16.9941C11.14 17.2209 11.2965 17.4966 11.7286 17.4163C15.1308 16.2578 17.4375 12.9464 17.4375 9.07664C17.4375 4.23684 13.61 0.5625 8.89113 0.5625ZM3.86946 12.5974C3.82523 12.6323 3.83543 12.7126 3.89327 12.7789C3.94771 12.8347 4.02596 12.8591 4.07019 12.8138C4.11442 12.7789 4.10421 12.6986 4.04637 12.6323C3.99194 12.5765 3.91368 12.5521 3.86946 12.5974ZM3.50202 12.3148C3.4782 12.3602 3.51222 12.416 3.58027 12.4509C3.6347 12.4858 3.70275 12.4753 3.72656 12.4265C3.75038 12.3811 3.71636 12.3253 3.64831 12.2904C3.58027 12.2694 3.52583 12.2799 3.50202 12.3148ZM4.60433 13.557C4.5499 13.6024 4.57031 13.7071 4.64856 13.7734C4.72681 13.8536 4.82548 13.8641 4.86971 13.8083C4.91394 13.7629 4.89352 13.6582 4.82548 13.5919C4.75063 13.5117 4.64856 13.5012 4.60433 13.557ZM4.21648 13.0441C4.16205 13.079 4.16205 13.1697 4.21648 13.25C4.27092 13.3302 4.36278 13.3651 4.40701 13.3302C4.46144 13.2849 4.46144 13.1941 4.40701 13.1139C4.35938 13.0336 4.27092 12.9987 4.21648 13.0441Z"
                  fill="#3A536B"
                />
              </g>
              <defs>
                <clipPath id="clip0_403_164">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Eu
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6.96094 1.61719V2.67188H11.1797V1.61719C11.1797 1.0348 11.651 0.5625 12.2344 0.5625C12.8177 0.5625 13.2891 1.0348 13.2891 1.61719V2.67188H14.8711C15.7445 2.67188 16.4531 3.38016 16.4531 4.25391V5.83594H1.6875V4.25391C1.6875 3.38016 2.39579 2.67188 3.26953 2.67188H4.85156V1.61719C4.85156 1.0348 5.32288 0.5625 5.90625 0.5625C6.48962 0.5625 6.96094 1.0348 6.96094 1.61719ZM1.6875 6.89062H16.4531V15.8555C16.4531 16.7289 15.7445 17.4375 14.8711 17.4375H3.26953C2.39579 17.4375 1.6875 16.7289 1.6875 15.8555V6.89062ZM4.32422 9C4.03286 9 3.79688 9.2373 3.79688 9.52734V12.6914C3.79688 12.9814 4.03286 13.2188 4.32422 13.2188H7.48828C7.77832 13.2188 8.01562 12.9814 8.01562 12.6914V9.52734C8.01562 9.2373 7.77832 9 7.48828 9H4.32422Z"
                fill="#3A536B"
              />
            </svg>
            Há 1 dia
          </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9.01482 1.6875C4.34619 1.6875 0.563326 4.7614 0.563326 8.55507C0.563326 10.1937 1.26824 11.691 2.44431 12.8704C2.0316 14.5335 0.652472 16.016 0.635963 16.0325C0.561675 16.1068 0.541039 16.2218 0.586438 16.3208C0.627768 16.4198 0.719259 16.4792 0.826565 16.4792C3.01395 16.4792 4.62684 15.4306 5.46878 14.7824C6.54514 15.1882 7.74696 15.4226 9.01482 15.4226C13.6834 15.4226 17.4375 12.3478 17.4375 8.55507C17.4375 4.76239 13.6834 1.6875 9.01482 1.6875Z"
                fill="#3A536B"
              />
            </svg>

            5 comentarios
          </p>
        </footer>
      </PublicationHeader>
      <PublicationBody>
        <p>{id}</p>
      </PublicationBody>
    </>
  );
}
