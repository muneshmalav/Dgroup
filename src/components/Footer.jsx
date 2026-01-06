import styles from "@/styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <section className="Footer bg-black">
      <div className="container">
        <div className="columWrap flex flex-wrap pb-[248px] ipad:pb-[70px] md:block md:pb-[70px]">
          <div
            className={`itemSmall ${styles.itemSmall} w-[34%] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%]`}
          >
            <div className="logoWrap  max-w-[111px]  overflow-hidden">
              <a href="" data-cursor-expand="">
                <Image
                  width={100}
                  height={100}
                  src="/images/compny-logo-new.png"
                  alt="D Group logo"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="locationWrap flex items-center mt-[40px]">
              <div className="logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden">
                <a
                  href="https://www.google.com/maps/place/1570+The+Alameda+%23330,+San+Jose,+CA+95126,+USA/@37.335805,-121.915187,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcb68c56d2719:0xd3ee03e8b8d94a2c!8m2!3d37.335805!4d-121.915187!16s%2Fg%2F11qp4cqtsx?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                  data-cursor-expand=""
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/map-pin.svg"
                    alt="Clear logo"
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="locationTitle w-[80%]">
                <p className="text-white">
                  H-4, Krishna Vihar Devli Arab Road, Borkheda Kota, Rajasthan
                </p>
              </div>
            </div>
            <div className="contactWrap flex items-center mt-[30px]">
              <div className="logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden">
                <a href="tel:408.246.0000" data-cursor-expand="">
                  <Image
                    width={100}
                    height={100}
                    src="/images/smartphone.svg"
                    alt="smartphone logo"
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="locationTitle w-[80%]">
                <p>
                  <a class="contact-link text-white" href="tel:9529476568">
                    9529476568
                  </a>
                </p>
              </div>
            </div>
            <div className="socialIcon mt-[30px] w-full">
              <div className="socialWrpa">
                <ul className="flex">
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z"
                        fill="#989898"
                      />
                      <path
                        d="M18.0954 8.26691C17.9804 7.95525 17.7969 7.67316 17.5585 7.4416C17.327 7.20319 17.0451 7.0197 16.7332 6.90469C16.4803 6.80646 16.1003 6.68954 15.4005 6.65768C14.6435 6.62316 14.4165 6.61572 12.5 6.61572C10.5833 6.61572 10.3564 6.62297 9.59953 6.65749C8.89972 6.68954 8.51958 6.80646 8.26686 6.90469C7.95501 7.0197 7.67291 7.20319 7.44155 7.4416C7.20313 7.67316 7.01965 7.95506 6.90444 8.26691C6.80621 8.51983 6.68929 8.89996 6.65744 9.59977C6.62292 10.3566 6.61548 10.5836 6.61548 12.5003C6.61548 14.4168 6.62292 14.6438 6.65744 15.4008C6.68929 16.1006 6.80621 16.4805 6.90444 16.7334C7.01965 17.0453 7.20294 17.3272 7.44136 17.5588C7.67291 17.7972 7.95482 17.9807 8.26667 18.0957C8.51958 18.1941 8.89972 18.311 9.59953 18.3429C10.3564 18.3774 10.5831 18.3846 12.4998 18.3846C14.4167 18.3846 14.6437 18.3774 15.4003 18.3429C16.1002 18.311 16.4803 18.1941 16.7332 18.0957C17.3592 17.8542 17.854 17.3594 18.0954 16.7334C18.1937 16.4805 18.3106 16.1006 18.3426 15.4008C18.3771 14.6438 18.3844 14.4168 18.3844 12.5003C18.3844 10.5836 18.3771 10.3566 18.3426 9.59977C18.3108 8.89996 18.1938 8.51983 18.0954 8.26691ZM12.5 16.1858C10.4643 16.1858 8.81408 14.5358 8.81408 12.5001C8.81408 10.4644 10.4643 8.81432 12.5 8.81432C14.5356 8.81432 16.1858 10.4644 16.1858 12.5001C16.1858 14.5358 14.5356 16.1858 12.5 16.1858ZM16.3315 9.52996C15.8558 9.52996 15.4702 9.14429 15.4702 8.6686C15.4702 8.19291 15.8558 7.80724 16.3315 7.80724C16.8072 7.80724 17.1929 8.19291 17.1929 8.6686C17.1927 9.14429 16.8072 9.52996 16.3315 9.52996Z"
                        fill="#989898"
                      />
                      <path
                        d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541602 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0ZM8.86514 19.0789H6.13816V10.2944H8.86514V19.0789ZM7.5 9.09539C7.18617 9.09669 6.87899 9.00491 6.6173 8.83167C6.35561 8.65842 6.15115 8.41148 6.02978 8.12206C5.9084 7.83264 5.87555 7.51373 5.93539 7.20565C5.99522 6.89756 6.14505 6.61413 6.36593 6.39118C6.58681 6.16823 6.86883 6.01577 7.17635 5.95306C7.48386 5.89036 7.80306 5.92023 8.0936 6.03891C8.38414 6.15758 8.63298 6.35972 8.80865 6.61979C8.98433 6.87985 9.07897 7.18616 9.0806 7.5C9.08148 7.92083 8.9157 8.3249 8.61952 8.62386C8.32333 8.92282 7.92083 9.09235 7.5 9.09539ZM19.0789 19.0789H16.3536V14.8026C16.3536 13.7829 16.3339 12.4753 14.9359 12.4753C13.5378 12.4753 13.2911 13.5839 13.2911 14.7286V19.0789H10.5757V10.2944H13.1924V11.4918H13.2303C13.5938 10.801 14.4836 10.0724 15.8109 10.0724C18.5707 10.0724 19.0789 11.8914 19.0789 14.2533V19.0789Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`itemMedium ${styles.itemMedium} w-[17%] pl-[50px] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%] md:pl-[0] md:pt-[40px]`}
          >
            <div className="listItem">
              <ul>
                <li>
                  <a href="/">Work</a>
                </li>
                <li>
                  <a href="/">Approach</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="itemLarge w-[49%] ipad:w-[100%] ipad:pt-[50px] md:w-[100%] md:pt-[40px] ">
            <div className="innerWrap flex flex-wrap">
              <div className="imgItem w-[30%] md:w-[100%]">
                <div className="imgWrap h-full max-w-[215px] max-h-[253px] overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src="/images/conversatison.jpg"
                    alt="Conversatison"
                  />
                </div>
              </div>
              <div className="contentItem w-[70%] pl-[40px] md:w-[100%] md:pl-[0] md:pt-[40px]">
                <div className="innerContent">
                  <h4 className="text-white">
                    Hello! I'm Ajay — Your Web Experience Developer
                  </h4>
                  <p className="text-white mt-[15px]">
                    Hello! I'm Ajay — Your Web Experience Developer
                  </p>
                  <div className="btnWrap mt-[20px]">
                    <a
                      href="#"
                      className="link-white text-white"
                      data-cursor-expand=""
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outerWrap border-b-[2px] border-white pb-[51px]">
          <div className="innerContent">
            <h4 className="text-white ">
             Hello! I'm Ajay — Your Web Experience <span class="text-pink">Developer</span>.
            </h4>
          </div>
        </div>
        <div className="wrapper flex pt-[48px] md:block">
          <div className="companyLogo w-[8%] md:w-[100%]">
            <div className="logoWrap flex flex-wrap max-[115px] w-[75px] h-[75px] overflow-hidden">
              <a href="" data-cursor-expand="">
               
                <img className="object-contain" src="/images/compny-logo.png" alt="Tables and a sofa" />
              </a>
            </div>
          </div>
          <div
            className={`titleWrap ${styles.titleWrap} w-[92%] pl-[30px] md:w-[100%] md:pl-[0] md:pt-[20px]`}
          >
            <h5 className="text-white">
              Hello! I'm Ajay — Your Web Experience Developer
            </h5>
            <p>
              Hello! I'm Ajay — Your Web Experience Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
