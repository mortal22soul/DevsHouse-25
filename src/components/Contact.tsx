import {
  Space_Grotesk,
  Hubot_Sans,
  Outfit,
} from "next/font/google";
import Image from "next/image";
import Heading from "../components/ui/Heading";
// import BG_Image from "@/../public/contact_bg.svg";

// const mona = Mona_Sans({ subsets: ["latin"], weight: ["800"] });
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const hubot = Hubot_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

import styles from "@/styles/Contact.module.scss";
import Footer from "./footer";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-8 md:py-12"
    >
      <div
        className="flex flex-wrap justify-center content-center"
        style={{ height: 220 }}
      >
        {/* <svg
          id={styles.contact_svg}
          className="absolute start-1/2"
          viewBox="0 0 343 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M171.5 195.758C125.982 195.758 83.1781 193.364 50.9756 189.017C17.1557 184.449 0 178.561 0 171.493C0 164.432 17.1486 158.537 50.9756 153.969C83.1781 149.622 125.982 147.228 171.5 147.228C217.018 147.228 259.822 149.622 292.025 153.969C325.852 158.537 343 164.425 343 171.493C343 178.553 325.852 184.449 292.025 189.017C259.822 193.364 217.018 195.758 171.5 195.758ZM171.5 149.828C126.096 149.828 83.4132 152.215 51.3246 156.541C15.396 161.385 2.60053 167.444 2.60053 171.5C2.60053 175.549 15.4031 181.608 51.3246 186.459C83.4132 190.792 126.096 193.172 171.5 193.172C216.904 193.172 259.587 190.785 291.676 186.459C327.604 181.615 340.4 175.556 340.4 171.5C340.4 167.451 327.597 161.392 291.676 156.541C259.587 152.208 216.911 149.828 171.5 149.828Z"
            fill="white"
          />
          <path
            d="M54.1743 205.148C25.7834 205.148 10.9289 201.994 9.99556 195.758C8.99101 189.073 24.3157 181.075 55.5493 171.983C85.2512 163.338 125.212 155.028 168.066 148.592C210.92 142.157 251.558 138.356 282.492 137.888C315.022 137.397 332.014 140.544 333.019 147.228C334.023 153.912 318.698 161.911 287.465 171.003C257.763 179.647 217.802 187.958 174.948 194.394C132.095 200.829 91.4566 204.629 60.5222 205.098C58.335 205.134 56.2191 205.148 54.1743 205.148ZM168.451 151.156C125.711 157.578 85.871 165.86 56.276 174.469C13.5506 186.907 12.3681 194.067 12.5604 195.374C12.7599 196.681 15.9731 203.18 60.4867 202.513C91.3071 202.051 131.817 198.258 174.563 191.837C217.303 185.415 257.143 177.133 286.738 168.524C329.463 156.086 330.646 148.926 330.454 147.619C330.254 146.312 327.041 139.813 282.528 140.48C251.707 140.942 211.197 144.735 168.451 151.156Z"
            fill="white"
          />
          <path
            d="M35.608 225.03C29.7588 225.03 25.4415 224.405 22.8909 223.098C21.3806 222.324 20.4116 221.294 20.0055 220.036C17.9893 213.75 31.483 203.656 60.102 190.039C87.3032 177.09 124.422 162.87 164.611 149.991C240.999 125.514 306.395 112.863 320.109 119.902C321.62 120.677 322.589 121.707 322.995 122.964C325.011 129.25 311.517 139.344 282.898 152.961C255.697 165.91 218.579 180.13 178.389 193.008C116.186 212.94 61.2632 225.03 35.608 225.03ZM307.62 120.549C298.08 120.549 283.817 122.31 266.134 125.741C237.715 131.26 201.943 140.743 165.402 152.449C125.319 165.292 88.3219 179.47 61.2204 192.362C22.1142 210.973 22.0858 218.012 22.4777 219.241C22.6629 219.816 23.2044 220.342 24.0807 220.789C30.108 223.879 49.3512 222.593 76.873 217.245C105.292 211.726 141.064 202.243 177.599 190.537C217.681 177.694 254.678 163.516 281.78 150.624C320.886 132.013 320.914 124.974 320.522 123.745C320.337 123.17 319.796 122.644 318.919 122.197C316.768 121.096 312.928 120.549 307.62 120.549Z"
            fill="white"
          />
          <path
            d="M38.2228 247.448C36.2849 247.448 34.6748 247.249 33.4137 246.851C31.7965 246.332 30.6707 245.48 30.0651 244.308C27.0443 238.441 38.6858 226.266 64.6758 208.124C89.3763 190.878 123.645 170.74 161.169 151.426C232.492 114.71 294.924 91.4681 309.601 96.1562C311.218 96.6747 312.343 97.5272 312.949 98.6992C315.97 104.566 304.328 116.741 278.338 134.883C253.638 152.13 219.369 172.267 181.845 191.581C116.642 225.144 58.8766 247.448 38.2228 247.448ZM162.359 153.721C124.935 172.985 90.7728 193.058 66.1649 210.241C30.6566 235.031 31.7892 241.985 32.3734 243.129C32.6513 243.669 33.264 244.095 34.2045 244.393C40.6521 246.453 59.4179 242.014 85.6858 232.211C112.809 222.089 146.536 206.846 180.655 189.287C218.08 170.023 252.242 149.949 276.849 132.766C312.358 107.976 311.225 101.022 310.641 99.8784C310.363 99.3386 309.75 98.9124 308.81 98.614C302.362 96.5541 283.596 100.994 257.328 110.796C230.205 120.918 196.478 136.162 162.359 153.721Z"
            fill="white"
          />
          <path
            d="M45.5966 270.682C44.991 270.682 44.4354 270.647 43.9224 270.569C42.2126 270.313 40.9372 269.631 40.1393 268.551C36.1211 263.117 45.9243 248.875 69.264 226.223C91.4638 204.679 122.89 178.632 157.743 152.875C224 103.92 283.432 70.0874 299.085 72.4315C300.795 72.6872 302.07 73.3692 302.868 74.4489C306.886 79.8828 297.083 94.1247 273.743 116.777C251.543 138.321 220.117 164.368 185.265 190.125C121.173 237.475 63.4647 270.682 45.5966 270.682ZM297.325 74.8963C289.581 74.8963 272.005 82.4043 248.487 95.8081C222.654 110.533 190.971 131.537 159.282 154.957C124.514 180.642 93.188 206.611 71.0737 228.077C39.1347 259.076 41.443 265.951 42.2267 267.017C42.6043 267.521 43.3025 267.855 44.307 268.011C51.1892 269.041 69.485 261.455 94.5061 247.192C120.339 232.467 152.022 211.463 183.711 188.043C218.479 162.358 249.805 136.389 271.919 114.923C303.858 83.9245 301.55 77.0486 300.766 75.9831C300.389 75.4788 299.69 75.145 298.686 74.9887C298.28 74.9248 297.824 74.8963 297.325 74.8963Z"
            fill="white"
          />
          <path
            d="M54.4309 294.251C52.6284 294.251 51.2177 293.753 50.2345 292.766C45.2403 287.773 53.1983 271.478 73.8877 244.336C93.5868 218.495 122.156 186.53 154.344 154.346C215.529 93.1587 271.976 48.7422 288.569 48.7422C290.372 48.7422 291.782 49.2395 292.765 50.2268C297.76 55.2204 289.802 71.5151 269.112 98.6565C249.413 124.498 220.844 156.463 188.656 188.647C127.478 249.841 71.0238 294.251 54.4309 294.251ZM288.569 51.3278C281.245 51.3278 263.413 62.0679 239.631 80.7991C215.095 100.127 185.457 126.892 156.182 156.171C124.08 188.278 95.5818 220.143 75.9539 245.899C53.9749 274.738 49.2087 288.071 52.0727 290.941C52.55 291.424 53.348 291.665 54.4309 291.665C61.7549 291.665 79.5874 280.925 103.369 262.194C127.905 242.866 157.543 216.101 186.818 186.822C218.92 154.715 247.418 122.843 267.046 97.0938C289.025 68.2548 293.791 54.9221 290.927 52.0524C290.45 51.5765 289.659 51.3278 288.569 51.3278Z"
            fill="white"
          />
          <path
            d="M77.4714 303.776C76.2816 303.776 75.2699 303.471 74.4506 302.867C69.0146 298.854 74.1942 282.36 89.8538 253.848C104.744 226.727 127.129 192.597 152.877 157.741C201.836 91.4611 248.722 41.6604 264.353 39.3164C266.063 39.0607 267.481 39.3376 268.556 40.1332C273.992 44.1465 268.813 60.6402 253.154 89.1525C238.263 116.273 215.878 150.404 190.131 185.259C141.171 251.539 94.2852 301.34 78.6541 303.684C78.248 303.741 77.8489 303.776 77.4714 303.776ZM265.536 41.8096C265.286 41.8096 265.023 41.8308 264.738 41.8734C257.863 42.9034 242.602 55.5329 222.867 76.5158C202.499 98.1806 178.382 127.574 154.964 159.275C129.28 194.046 106.967 228.07 92.1264 255.091C70.7032 294.101 74.9279 300.004 75.9965 300.786C76.5024 301.162 77.2648 301.276 78.2694 301.119C85.1445 300.09 100.405 287.46 120.14 266.477C140.509 244.812 164.625 215.419 188.043 183.717C213.727 148.954 236.041 114.923 250.881 87.9023C272.304 48.8914 268.079 42.9886 267.011 42.2073C266.647 41.9444 266.156 41.8096 265.536 41.8096Z"
            fill="white"
          />
          <path
            d="M100.797 313.436C100.035 313.436 99.3293 313.273 98.6952 312.946C92.8246 309.928 95.2256 293.249 105.834 263.38C115.915 234.989 132.102 198.684 151.416 161.165C188.15 89.7988 225.446 34.5996 240.109 29.9186C241.719 29.4001 243.129 29.4499 244.298 30.0537C250.168 33.0726 247.767 49.751 237.159 79.62C227.078 108.012 210.891 144.316 191.577 181.835C154.843 253.201 117.547 308.4 102.884 313.081C102.151 313.316 101.452 313.436 100.797 313.436ZM242.203 32.1491C241.826 32.1491 241.391 32.2273 240.907 32.3836C234.466 34.4435 221.777 48.9553 206.089 72.197C189.888 96.1988 171.293 128.213 153.732 162.344C134.467 199.771 118.33 235.955 108.285 264.247C93.7935 305.062 98.7521 310.063 99.8921 310.645C100.426 310.922 101.175 310.908 102.101 310.609C108.541 308.549 121.23 294.038 136.918 270.796C153.119 246.794 171.714 214.78 189.276 180.649C208.54 143.222 224.677 107.038 234.722 78.7463C249.214 37.9312 244.255 32.9305 243.115 32.348C242.859 32.2202 242.552 32.1491 242.203 32.1491Z"
            fill="white"
          />
          <path
            d="M124.301 323.204C123.837 323.204 123.396 323.132 122.968 322.997C116.677 320.98 116.307 304.138 121.85 272.934C127.122 243.271 137.117 204.8 149.991 164.61C174.478 88.1652 202.192 27.5818 215.886 20.5568C217.389 19.7825 218.785 19.5978 220.039 20.0027C226.33 22.02 226.7 38.8617 221.158 70.0661C215.885 99.7292 205.89 138.2 193.016 178.39C168.529 254.835 140.815 315.418 127.122 322.443C126.131 322.948 125.184 323.204 124.301 323.204ZM152.471 165.391C139.632 205.475 129.665 243.825 124.407 273.381C116.827 316.022 122.541 320.135 123.766 320.533C124.343 320.717 125.07 320.582 125.939 320.135C131.952 317.052 142.083 300.644 153.732 275.136C165.758 248.79 178.831 214.155 190.544 177.595C203.382 137.511 213.349 99.161 218.607 69.6045C226.188 26.9639 220.474 22.8512 219.248 22.4534C218.671 22.2687 217.944 22.4036 217.075 22.8511C211.062 25.9339 200.931 42.3424 189.283 67.85C177.257 94.1958 164.176 128.831 152.471 165.391Z"
            fill="white"
          />
          <path
            d="M147.861 333.063C147.654 333.063 147.448 333.049 147.241 333.013C140.551 332.012 137.41 315.006 137.901 282.488C138.364 251.553 142.169 210.916 148.602 168.055C155.043 125.201 163.343 85.2386 171.992 55.5329C181.083 24.3001 189.105 8.98566 195.766 9.98011C202.456 10.9817 205.598 27.9867 205.106 60.5052C204.643 91.4397 200.839 132.077 194.405 174.938C187.965 217.792 179.665 257.754 171.016 287.46C162.21 317.734 154.423 333.063 147.861 333.063ZM195.175 12.5229C193.436 12.5229 186.376 15.3856 174.478 56.2575C165.865 85.8566 157.586 125.698 151.167 168.446C144.748 211.193 140.957 251.71 140.494 282.53C139.825 327.032 146.322 330.264 147.626 330.463C148.944 330.648 156.09 329.476 168.522 286.743C177.135 257.144 185.414 217.302 191.833 174.554C198.252 131.807 202.043 91.2905 202.506 60.4697C203.175 15.968 196.678 12.7361 195.374 12.5372C195.324 12.5301 195.253 12.5229 195.175 12.5229Z"
            fill="white"
          />
          <path
            d="M171.5 343C164.433 343 158.541 325.853 153.974 292.027C149.628 259.821 147.234 217.017 147.234 171.5C147.234 125.983 149.628 83.1716 153.974 50.9727C158.541 17.1472 164.433 0 171.5 0C178.567 0 184.459 17.1472 189.026 50.9727C193.372 83.1787 195.766 125.983 195.766 171.5C195.766 217.017 193.372 259.821 189.026 292.027C184.467 325.853 178.567 343 171.5 343ZM171.5 2.58549C167.453 2.58549 161.398 15.3856 156.546 51.3207C152.214 83.4131 149.835 126.096 149.835 171.507C149.835 216.918 152.221 259.601 156.546 291.694C161.39 327.622 167.446 340.429 171.5 340.429C175.554 340.429 181.602 327.629 186.454 291.694C190.786 259.601 193.166 216.918 193.166 171.507C193.166 126.096 190.779 83.4131 186.454 51.3207C181.61 15.3856 175.554 2.58549 171.5 2.58549Z"
            fill="white"
          />
          <path
            d="M195.146 333.063C188.585 333.063 180.798 317.734 171.992 287.46C163.35 257.754 155.043 217.792 148.602 174.938C142.162 132.084 138.364 91.4468 137.901 60.5052C137.417 27.9796 140.558 10.9817 147.241 9.98011C153.903 8.98566 161.925 24.3001 171.016 55.5329C179.658 85.2386 187.965 125.201 194.405 168.055C200.846 210.909 204.643 251.546 205.106 282.488C205.591 315.013 202.449 332.012 195.766 333.013C195.559 333.049 195.353 333.063 195.146 333.063ZM147.833 12.5229C147.754 12.5229 147.683 12.5301 147.626 12.5372C146.315 12.7361 139.825 15.968 140.494 60.4697C140.957 91.2905 144.748 131.807 151.167 174.554C157.586 217.302 165.865 257.144 174.478 286.743C186.91 329.468 194.063 330.655 195.374 330.463C196.685 330.264 203.175 327.032 202.506 282.53C202.043 251.71 198.252 211.193 191.833 168.446C185.414 125.698 177.136 85.8566 168.522 56.2575C156.631 15.3856 149.571 12.5229 147.833 12.5229Z"
            fill="white"
          />
          <path
            d="M218.707 323.203C217.816 323.203 216.876 322.948 215.885 322.443C202.192 315.418 174.485 254.835 149.991 178.39C137.117 138.2 127.122 99.7291 121.85 70.0661C116.3 38.8616 116.677 22.0199 122.968 20.0026C124.222 19.5977 125.618 19.7895 127.122 20.5567C140.815 27.5818 168.522 88.1651 193.016 164.61C205.89 204.8 215.885 243.271 221.157 272.934C226.707 304.138 226.33 320.98 220.039 322.997C219.612 323.132 219.17 323.203 218.707 323.203ZM124.3 22.3822C124.108 22.3822 123.93 22.4106 123.759 22.4603C122.534 22.851 116.827 26.9638 124.4 69.6115C129.651 99.168 139.618 137.518 152.463 177.602C164.176 214.155 177.249 248.797 189.275 275.143C200.924 300.658 211.055 317.059 217.068 320.142C217.937 320.589 218.664 320.717 219.241 320.54C220.466 320.149 226.173 316.036 218.6 273.388C213.349 243.832 203.382 205.482 190.536 165.398C178.824 128.845 165.751 94.2029 153.724 67.857C142.076 42.3423 131.945 25.9409 125.932 22.8581C125.319 22.5385 124.771 22.3822 124.3 22.3822Z"
            fill="white"
          />
          <path
            d="M242.21 313.437C241.555 313.437 240.857 313.316 240.116 313.081C225.454 308.4 188.15 253.201 151.423 181.835C132.109 144.309 115.922 108.012 105.841 79.6201C95.2327 49.751 92.8318 33.0798 98.7023 30.0538C99.8707 29.45 101.281 29.4073 102.891 29.9187C117.554 34.5997 154.857 89.7988 191.584 161.165C210.898 198.691 227.085 234.989 237.166 263.38C247.775 293.249 250.176 309.921 244.305 312.947C243.678 313.273 242.973 313.437 242.21 313.437ZM100.804 32.1492C100.455 32.1492 100.149 32.2132 99.8921 32.3481C98.7521 32.9377 93.7935 37.9313 108.285 78.7464C118.33 107.031 134.467 143.222 153.732 180.649C171.293 214.78 189.888 246.794 206.089 270.796C221.777 294.045 234.466 308.557 240.907 310.61C241.84 310.908 242.581 310.915 243.115 310.645C244.255 310.056 249.214 305.062 234.722 264.247C224.677 235.962 208.54 199.771 189.276 162.344C171.714 128.213 153.119 96.1988 136.918 72.1971C121.23 48.9482 108.541 34.4365 102.101 32.3837C101.616 32.2274 101.182 32.1492 100.804 32.1492Z"
            fill="white"
          />
          <path
            d="M265.536 303.776C265.158 303.776 264.759 303.748 264.346 303.684C248.715 301.34 201.836 251.539 152.87 185.259C127.122 150.404 104.737 116.273 89.8466 89.1525C74.1942 60.6402 69.0075 44.1465 74.4435 40.1332C75.5264 39.3376 76.9371 39.0607 78.647 39.3164C94.2781 41.6604 141.157 91.4611 190.123 157.741C215.871 192.597 238.256 226.727 253.146 253.848C268.799 282.36 273.985 298.854 268.549 302.867C267.737 303.471 266.726 303.776 265.536 303.776ZM77.4714 41.8096C76.8515 41.8096 76.3599 41.9445 75.9965 42.2144C74.935 43.0028 70.7103 48.8986 92.1264 87.9094C106.96 114.93 129.28 148.954 154.964 183.725C178.382 215.426 202.499 244.819 222.867 266.484C242.595 287.474 257.856 300.097 264.738 301.127C265.742 301.276 266.505 301.162 267.011 300.793C268.072 300.004 272.297 294.109 250.881 255.098C236.048 228.077 213.727 194.053 188.043 159.283C164.625 127.581 140.509 98.1878 120.14 76.5229C100.405 55.5329 85.1516 42.9105 78.2694 41.8805C77.9844 41.8308 77.7207 41.8096 77.4714 41.8096Z"
            fill="white"
          />
          <path
            d="M288.569 294.251C271.976 294.251 215.529 249.841 154.344 188.647C122.156 156.463 93.5868 124.498 73.8877 98.6565C53.1983 71.5151 45.2403 55.2204 50.2345 50.2268C51.2177 49.2395 52.6356 48.7422 54.4309 48.7422C71.0238 48.7422 127.471 93.1516 188.656 154.346C220.844 186.53 249.413 218.495 269.112 244.336C289.802 271.478 297.76 287.773 292.765 292.766C291.782 293.753 290.372 294.251 288.569 294.251ZM156.182 186.822C185.457 216.094 215.095 242.866 239.631 262.194C263.413 280.925 281.252 291.665 288.569 291.665C289.652 291.665 290.45 291.424 290.927 290.941C293.791 288.071 289.025 274.738 267.046 245.899C247.418 220.143 218.927 188.278 186.818 156.171C157.543 126.899 127.905 100.127 103.369 80.7991C79.5874 62.0679 61.7478 51.3278 54.4309 51.3278C53.348 51.3278 52.55 51.5694 52.0727 52.0524C49.2087 54.915 53.9749 68.2548 75.9539 97.0938C95.5889 122.85 124.08 154.715 156.182 186.822Z"
            fill="white"
          />
          <path
            d="M297.411 270.682C279.55 270.682 221.842 237.482 157.743 190.125C122.89 164.376 91.4638 138.321 69.264 116.777C45.9243 94.1247 36.1282 79.8829 40.1393 74.4489C40.9372 73.3692 42.2126 72.6872 43.9224 72.4315C59.5749 70.0946 119.007 103.92 185.265 152.875C220.117 178.625 251.543 204.679 273.743 226.223C297.083 248.875 306.879 263.117 302.868 268.551C302.07 269.631 300.795 270.313 299.085 270.569C298.572 270.647 298.009 270.682 297.411 270.682ZM45.675 74.8963C45.1763 74.8963 44.7273 74.9248 44.307 74.9887C43.3024 75.1379 42.5972 75.4717 42.2267 75.9831C41.443 77.0486 39.1347 83.9317 71.0736 114.923C93.1951 136.389 124.521 162.358 159.282 188.043C190.971 211.463 222.654 232.467 248.487 247.192C272.005 260.596 289.581 268.104 297.325 268.104C297.824 268.104 298.28 268.075 298.693 268.012C299.698 267.862 300.403 267.528 300.773 267.017C301.557 265.951 303.865 259.069 271.926 228.077C249.805 206.611 218.479 180.642 183.719 154.957C152.029 131.537 120.347 110.533 94.5132 95.8082C71.0025 82.4044 53.4193 74.8963 45.675 74.8963Z"
            fill="white"
          />
          <path
            d="M304.785 247.448C284.131 247.448 226.373 225.144 161.162 191.574C123.638 172.26 89.3693 152.122 64.6688 134.876C38.6859 116.734 27.0373 104.559 30.0581 98.6921C30.6637 97.5201 31.7895 96.6607 33.4068 96.1493C48.0903 91.4611 110.515 114.703 181.838 151.419C219.362 170.733 253.631 190.871 278.331 208.117C304.314 226.259 315.963 238.434 312.942 244.301C312.336 245.473 311.211 246.332 309.594 246.844C308.34 247.249 306.722 247.448 304.785 247.448ZM162.352 189.279C196.464 206.839 230.191 222.082 257.321 232.204C283.589 242.007 302.355 246.446 308.803 244.386C309.743 244.088 310.356 243.662 310.634 243.122C311.218 241.978 312.358 235.031 276.842 210.234C252.235 193.051 218.066 172.977 180.648 153.714C146.536 136.154 112.809 120.911 85.6788 110.789C59.4109 100.986 40.6451 96.547 34.1975 98.6069C33.257 98.9053 32.6443 99.3315 32.3664 99.8713C31.7751 101.015 30.6424 107.962 66.1579 132.759C90.7729 149.942 124.935 170.016 162.352 189.279Z"
            fill="white"
          />
          <path
            d="M307.399 225.03C281.751 225.03 226.829 212.94 164.611 193.001C124.422 180.123 87.3103 165.903 60.102 152.954C31.483 139.337 17.9964 129.243 20.0055 122.957C20.4116 121.7 21.3806 120.669 22.8909 119.895C36.6055 112.856 102.001 125.514 178.389 149.984C218.579 162.863 255.69 177.083 282.898 190.032C311.517 203.649 325.004 213.743 322.995 220.029C322.589 221.287 321.62 222.317 320.109 223.091C317.566 224.405 313.241 225.03 307.399 225.03ZM35.3871 120.549C30.0794 120.549 26.2394 121.096 24.0807 122.197C23.2044 122.644 22.6629 123.17 22.4777 123.745C22.0858 124.967 22.1142 132.013 61.2204 150.624C88.3219 163.523 125.326 177.701 165.402 190.537C201.936 202.243 237.708 211.726 266.127 217.245C293.649 222.586 312.892 223.879 318.919 220.789C319.796 220.342 320.337 219.816 320.522 219.241C320.914 218.019 320.886 210.973 281.78 192.362C254.678 179.463 217.674 165.285 177.599 152.449C141.064 140.743 105.292 131.26 76.8659 125.741C59.1901 122.31 44.9268 120.549 35.3871 120.549Z"
            fill="white"
          />
          <path
            d="M288.833 205.148C286.788 205.148 284.672 205.134 282.485 205.098C251.55 204.636 210.913 200.836 168.059 194.394C125.205 187.958 85.2441 179.647 55.5422 171.003C24.3085 161.911 8.98388 153.912 9.98843 147.228C10.993 140.544 27.9848 137.397 60.515 137.888C91.4495 138.349 132.087 142.149 174.941 148.592C217.795 155.028 257.756 163.338 287.458 171.983C318.691 181.075 334.016 189.073 333.011 195.758C332.078 201.994 317.217 205.148 288.833 205.148ZM168.451 191.837C211.19 198.258 251.707 202.051 282.528 202.513C327.02 203.18 330.254 196.688 330.454 195.374C330.653 194.067 329.463 186.907 286.738 174.469C257.143 165.853 217.303 157.578 174.563 151.156C131.824 144.735 91.3071 140.942 60.4867 140.48C15.9944 139.805 12.7599 146.305 12.5604 147.619C12.361 148.926 13.5506 156.086 56.276 168.524C85.871 177.14 125.704 185.415 168.451 191.837Z"
            fill="white"
          />
          <path
            d="M171.5 195.758C125.982 195.758 83.1781 193.364 50.9756 189.017C17.1557 184.449 0 178.561 0 171.493C0 164.432 17.1486 158.537 50.9756 153.969C83.1781 149.622 125.982 147.228 171.5 147.228C217.018 147.228 259.822 149.622 292.025 153.969C325.852 158.537 343 164.425 343 171.493C343 178.553 325.852 184.449 292.025 189.017C259.822 193.364 217.018 195.758 171.5 195.758ZM171.5 149.828C126.096 149.828 83.4132 152.215 51.3246 156.541C15.396 161.385 2.60053 167.444 2.60053 171.5C2.60053 175.549 15.4031 181.608 51.3246 186.459C83.4132 190.792 126.096 193.172 171.5 193.172C216.904 193.172 259.587 190.785 291.676 186.459C327.604 181.615 340.4 175.556 340.4 171.5C340.4 167.451 327.597 161.392 291.676 156.541C259.587 152.208 216.911 149.828 171.5 149.828Z"
            fill="white"
          />
        </svg>

        <h2
          style={mona.style}
          className="color-white text-center text-6xl my-5"
        >
          CONTACT US
        </h2> */}
        <div className="md-108 md:pb-12">
          <Heading textClass="text-5xl md:text-6xl"
            title="CONTACT US"
            geometry="Sphereenclosed"
          />{" "}
          {/* Add margin-bottom here */}
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 border-2 border-white my-12">
        <div
          style={{
            position: "absolute",
            left: "calc(50% - 15px)",
            top: "calc(10% - 15px)",
            clipPath: "polygon(100% 100%, 0 50%, 100% 0)",
            width: 30,
            height: 60,
            backgroundColor: "#F9F9F9",
          }}
          className="hidden md:inline-block"
        />
        <div className="py-4 px-12 md:px-24">
          <h4
            className="color-white text-2xl font-bold my-5"
            style={hubot.style}
          >
            Have A Question?
            <br />
            Get In Touch!
          </h4>
          <p style={hubot.style} className="my-5">
            Thank you for visiting our website! If you have
            any questions or queries, drop us a message, and
            we&apos;ll get back to you promptly. Your time
            is valuable to us!
          </p>
          <div className="my-5">
            <div className="flex my-8">
              <svg
                className="my-auto"
                width="30"
                height="30"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.8902 45.1814C10.5111 44.126 2.19695 18.4544 2.00348 4.21451C1.99162 3.34155 2.58344 2.57888 3.44687 2.44964C6.19456 2.03836 9.91251 2.23776 12.5464 2.51261C13.6185 2.62449 14.3678 3.60204 14.3985 4.67959C14.4834 7.6688 15.2802 11.3322 15.8874 13.5802C16.047 14.1713 15.946 14.8034 15.5943 15.3045L11.9831 20.4496C11.5957 21.0016 11.5064 21.715 11.7891 22.3273C14.8276 28.9075 21.1503 33.4578 24.8098 35.3812C25.4298 35.707 26.1731 35.6359 26.7507 35.2397L32.4857 31.3057C33.0245 30.936 33.7101 30.8553 34.3249 31.0765C38.4183 32.5494 40.8686 32.9754 43.2056 33.1438C44.1547 33.2122 44.9282 33.9064 44.9627 34.8573C45.0429 37.0645 44.9802 40.6116 44.9024 43.287C44.8711 44.3636 43.9667 45.2165 42.8902 45.1814Z"
                  stroke="white"
                  strokeWidth="2.6"
                />
              </svg>
              <p
                style={space.style}
                className="ms-4 font-normal"
              >
                <a href="tel:+918943136813">
                  +91 89431 36813
                </a>
                <br />
                <a href="tel:+919339244224">
                  +91 93392 44224
                </a>
              </p>
            </div>
            <div className="flex my-8">
              <svg
                className="my-auto"
                width="30"
                height="23.3"
                viewBox="0 0 42 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8333 3.48722C16.1158 3.48722 9.69016 3.87547 5.60974 4.16095C4.25463 4.25576 3.20513 5.28556 3.20513 6.54335V7.96469L19.5362 16.1995C20.3429 16.6063 21.3238 16.6063 22.1305 16.1995L38.4615 7.96469V6.54335C38.4615 5.28556 37.412 4.25576 36.0569 4.16095C31.9765 3.87547 25.5509 3.48722 20.8333 3.48722ZM38.4615 11.2926L23.687 18.7425C21.9123 19.6374 19.7544 19.6374 17.9797 18.7425L3.20513 11.2926V26.6129C3.20513 27.8707 4.25463 28.9005 5.60974 28.9953C9.69016 29.2808 16.1158 29.669 20.8333 29.669C25.5509 29.669 31.9765 29.2808 36.0569 28.9953C37.412 28.9005 38.4615 27.8707 38.4615 26.6129V11.2926ZM5.36341 1.26046C9.44627 0.974808 15.9806 0.578125 20.8333 0.578125C25.6861 0.578125 32.2204 0.974807 36.3033 1.26046C39.3545 1.47395 41.6667 3.78989 41.6667 6.54335V26.6129C41.6667 29.3664 39.3545 31.6823 36.3033 31.8958C32.2204 32.1814 25.6861 32.5781 20.8333 32.5781C15.9806 32.5781 9.44627 32.1814 5.36341 31.8958C2.31213 31.6823 0 29.3664 0 26.6129V6.54335C0 3.7899 2.31213 1.47395 5.36341 1.26046Z"
                  fill="white"
                />
              </svg>
              <p
                style={space.style}
                className="ms-4 font-normal"
              >
                <a href="mailto:devshouse.tech@gmail.com">
                  devshouse.tech@gmail.com
                </a>
              </p>
            </div>
            <div className="flex my-8">
              <svg
                width="30"
                height="33.94"
                viewBox="0 0 38 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.75 3.66014C10.0267 3.66014 2.66808 9.99755 3.26744 17.89C3.3534 19.022 3.4819 20.0073 3.65699 20.7892C4.54032 24.734 7.31305 28.6528 10.4361 31.9794C13.5326 35.2777 16.8295 37.8437 18.5331 39.0882C18.6693 39.1876 18.8307 39.1876 18.9669 39.0882C20.6705 37.8437 23.9674 35.2777 27.0639 31.9794C30.187 28.6528 32.9597 24.734 33.843 20.7892C34.0181 20.0073 34.1466 19.022 34.2326 17.89C34.8319 9.99755 27.4733 3.66014 18.75 3.66014ZM0.044053 18.1126C-0.720649 8.04292 8.58874 0.578125 18.75 0.578125C28.9113 0.578125 38.2206 8.04292 37.4559 18.1126C37.3643 19.3187 37.2217 20.4589 37.0036 21.4329C35.9446 26.1621 32.7268 30.5679 29.4717 34.0352C26.1901 37.5308 22.7212 40.228 20.9321 41.5349C19.6363 42.4814 17.8637 42.4814 16.5679 41.5349C14.7788 40.228 11.3099 37.5308 8.02828 34.0352C4.77321 30.5679 1.5554 26.1621 0.496419 21.4329C0.27832 20.4589 0.135647 19.3187 0.044053 18.1126Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.75 15.9882C17.2626 15.9882 16.0568 17.1381 16.0568 18.5566C16.0568 19.975 17.2626 21.1249 18.75 21.1249C20.2374 21.1249 21.4432 19.975 21.4432 18.5566C21.4432 17.1381 20.2374 15.9882 18.75 15.9882ZM12.825 18.5566C12.825 15.436 15.4777 12.9062 18.75 12.9062C22.0223 12.9062 24.675 15.436 24.675 18.5566C24.675 21.6772 22.0223 24.2069 18.75 24.2069C15.4777 24.2069 12.825 21.6772 12.825 18.5566Z"
                  fill="white"
                />
              </svg>
              <p
                style={space.style}
                className="ms-4 my-auto font-normal"
              >
                VIT, Chennai
              </p>
            </div>
          </div>
        </div>
        <div
          className="py-4 px-12"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <form id={styles.form} action="" method="post">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
              <input
                style={outfit.style}
                className="p-3"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                style={outfit.style}
                className="p-3"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>

            <input
              style={outfit.style}
              className="my-5 p-3"
              type="text"
              name="subject"
              placeholder="Subject"
            />

            <textarea
              style={outfit.style}
              className="my-5 p-3"
              name="message"
              placeholder="Message"
              rows={3}
            />

            <div className="text-center">
              <button style={space.style} type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Image
        style={{
          filter: "brightness(0.75)",
          width: "70vw",
          height: "70vw",
          position: "absolute",
          zIndex: -1,
          left: "55%",
          transform: "translate(-55%, -38%)",
        }}
        // src={BG_Image}
        src="contact_bg.svg"
        className="top-1/2"
        width={800}
        height={800}
        alt=""
      />
      <Image
        style={{
          filter: "brightness(1.1)",
          width: "55vw",
          height: "55vw",
          position: "absolute",
          zIndex: -1,
          left: "55%",
          transform: "translate(-100%, 4%)",
        }}
        src="footer/footerBg.svg"
        className="bottom-0 hidden md:inline-block "
        width={800}
        height={800}
        alt=""
      />
    </section>
  );
}
