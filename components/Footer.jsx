import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-contas-pink-light bg-contas-purple-dark">
      <div className="max-w-screen-xl py-12 mx-auto space-y-8 overflow-hidden sm:px-16 lg:px-16">
        <nav className="flex flex-wrap justify-center gap-10 -mx-5 -my-2x">
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold leading-6 uppercase text-opacity-70 text-contas-pink-light">
              Informação
            </h3>
            <div className="mt-4">
              <Link href={'/quem-somos'}>
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Quem somos
                </a>
              </Link>
            </div>
            <div>
              <Link href={'/perguntas-frequentes'}>
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Perguntas Frequentes
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center mx-14">
            <h3 className="text-base font-semibold leading-6 uppercase text-opacity-70 text-contas-pink-light">
              Contato
            </h3>
            <div className="mt-4">
              <div className="flex gap-1">
                <div className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="#FFB4C2"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="inline text-base leading-6 underline text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  <a href="mailto:lojacontasdefadas@gmail.com">
                    lojacontasdefadas@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold leading-6 uppercase text-opacity-70 text-contas-pink-light">
              Formas de Pagamento
            </h3>
            <AcceptedPayments />
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/contasdefadas/"
            className="text-contas-pink-light text-opacity-70 hover:text-opacity-100"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-opacity-70 text-contas-pink-light">
          Contas de Fadas © 2022. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const AcceptedPayments = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="flex scale-150">
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26 4.2H2v15.245h24V4.2z" fill="#fff"></path>
          <path
            d="M25.604 16.968H2.401v2.081h23.203v-2.081z"
            fill="#F8B600"
          ></path>
          <path
            d="M25.604 4.6H2.401v2.082h23.203V4.601zM13.802 8.971l-1.227 5.717h-1.477l1.221-5.717h1.483zm6.22 3.694l.782-2.149.444 2.15h-1.226zm1.651 2.024h1.372L21.847 8.97h-1.26a.676.676 0 00-.633.42l-2.216 5.312h1.555l.304-.845h1.898l.178.83zm-3.863-1.864c0-1.512-2.086-1.594-2.072-2.27 0-.203.198-.42.628-.483.497-.045.997.043 1.449.256l.256-1.212a3.92 3.92 0 00-1.381-.251c-1.449 0-2.492.772-2.502 1.888 0 .82.734 1.28 1.294 1.555.56.275.773.459.768.71 0 .386-.459.555-.883.56a3.037 3.037 0 01-1.522-.362l-.256 1.26c.524.203 1.08.306 1.642.304 1.555 0 2.574-.768 2.58-1.955zM11.682 8.96L9.268 14.68h-1.54l-1.18-4.554a.632.632 0 00-.352-.483 6.147 6.147 0 00-1.448-.483l.033-.169h2.53a.695.695 0 01.687.585l.623 3.308 1.535-3.893 1.526-.029z"
            fill="#1A1F71"
          ></path>
        </svg>
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26 19.6H2V4.356h24V19.6z" fill="#fff"></path>
          <path d="M2.4 17.122h23.2V19.2H2.4v-2.078z" fill="#F6AF1A"></path>
          <path
            d="M2.4 6.833h23.2V4.756H2.4v2.077zM13.539 8.71l-1.167 5.433H10.96l1.166-5.433h1.412zm5.91 3.511l.745-2.044.422 2.044H19.45zm1.578 1.922h1.3L21.183 8.71h-1.2c-.267 0-.5.156-.6.4l-2.111 5.034h1.489l.289-.812h1.8l.177.811zm-3.677-1.777c.01-1.434-1.978-1.511-1.967-2.145 0-.2.189-.4.6-.455.2-.023.755-.045 1.389.244l.244-1.155a3.775 3.775 0 00-1.31-.245c-1.4 0-2.379.745-2.39 1.8-.01.778.7 1.222 1.234 1.478.544.267.733.433.733.678 0 .366-.433.522-.844.533-.712.011-1.123-.189-1.445-.344l-.255 1.188c.333.156.933.278 1.566.29 1.478 0 2.445-.734 2.445-1.867zM11.527 8.71L9.25 14.143H7.76L6.64 9.81c-.067-.267-.123-.367-.334-.478-.333-.189-.9-.355-1.389-.466l.034-.156h2.389c.3 0 .577.2.644.556l.589 3.144 1.478-3.7h1.477zM15.338 15.641h-.566v.534h.644v.155h-.833v-1.477h.8v.166h-.611v.467h.566v.155zM15.7 14.778h.189v1.555h-.19v-1.555zM16.944 15.7c0-.122-.055-.31-.267-.31-.2 0-.277.177-.3.31h.567zm-.567.134c0 .255.167.367.367.367a.632.632 0 00.289-.056l.033.133c-.066.045-.177.078-.344.078-.322 0-.522-.222-.522-.533 0-.311.189-.567.489-.567.344 0 .433.3.433.5 0 .044 0 .067-.011.089.01-.011-.734-.011-.734-.011zM18.178 16.296a.8.8 0 01-.3.067c-.322 0-.522-.223-.522-.545 0-.322.222-.567.567-.567.11 0 .21.034.266.056l-.044.144a.576.576 0 00-.233-.044c-.245 0-.378.178-.378.4 0 .244.155.4.366.4a.424.424 0 00.234-.056l.044.145zM18.718 15.02v.255h.278v.145h-.278v.566c0 .134.034.212.145.212.055 0 .078 0 .111-.012l.011.145a.697.697 0 01-.178.022c-.089 0-.155-.022-.2-.078-.055-.055-.078-.155-.078-.277v-.578h-.166v-.145h.166v-.2l.19-.055zM19.263 15.604c0-.122 0-.233-.011-.333h.167l.01.211h.012c.044-.144.167-.233.289-.233h.055v.189h-.066c-.134 0-.234.1-.256.244 0 .022-.011.056-.011.089v.567h-.189v-.734zM20.132 15.806c0 .233.133.41.322.41s.322-.177.322-.41c0-.178-.089-.4-.322-.4-.222-.011-.322.2-.322.4zm.833-.011c0 .388-.267.566-.522.566-.29 0-.511-.211-.511-.544 0-.356.233-.556.522-.556.311-.011.511.211.511.534zM21.265 15.56c0-.11 0-.2-.011-.289h.167l.022.178c.055-.1.178-.2.355-.2.145 0 .378.09.378.456v.633h-.2v-.61c0-.168-.066-.312-.244-.312a.273.273 0 00-.256.2c-.01.011-.022.044-.022.078v.644h-.189v-.778z"
            fill="#243C7B"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.59 19.545v.04h.038a.04.04 0 00.02-.005.018.018 0 00.008-.015.017.017 0 00-.007-.015.036.036 0 00-.02-.005h-.038zm.039-.029c.019 0 .034.005.044.014.011.008.016.02.016.035a.04.04 0 01-.012.03.06.06 0 01-.036.016l.05.057h-.04l-.045-.057h-.015v.057h-.032v-.151h.07zm-.01.204a.13.13 0 00.116-.078.13.13 0 000-.099.13.13 0 00-.067-.067.133.133 0 00-.099 0 .122.122 0 00-.068.068.123.123 0 00-.01.049c0 .017.004.034.01.05a.118.118 0 00.027.04.128.128 0 00.09.037zm0-.29a.164.164 0 01.117.048.16.16 0 01.036.178.168.168 0 01-.088.087.167.167 0 01-.219-.087.155.155 0 01-.013-.063.158.158 0 01.048-.115.167.167 0 01.119-.048zm-15.315-.583c0-.289.189-.526.498-.526.295 0 .494.227.494.526 0 .299-.199.525-.494.525-.309 0-.498-.237-.498-.525zm1.329 0v-.82h-.357v.199a.622.622 0 00-.518-.24c-.46 0-.822.36-.822.86 0 .502.361.863.822.863a.622.622 0 00.518-.24v.198h.357v-.82zm12.061 0c0-.289.19-.526.498-.526.296 0 .495.227.495.526 0 .299-.2.525-.495.525-.309 0-.498-.237-.498-.525zm1.33 0v-1.48h-.358v.859a.622.622 0 00-.518-.24c-.46 0-.821.36-.821.86 0 .502.36.863.82.863a.622.622 0 00.52-.24v.198h.357v-.82zm-8.96-.542c.23 0 .377.144.415.398h-.852c.038-.237.182-.398.436-.398zm.006-.32c-.48 0-.817.35-.817.862 0 .522.35.862.841.862a.998.998 0 00.673-.23l-.175-.265a.785.785 0 01-.477.172c-.23 0-.44-.106-.491-.402h1.219c.003-.044.007-.09.007-.137-.004-.512-.32-.862-.78-.862zm4.31.862c0-.289.19-.526.498-.526.295 0 .495.227.495.526 0 .299-.2.525-.495.525-.309 0-.498-.237-.498-.525zm1.33 0v-.82h-.358v.199a.623.623 0 00-.518-.24c-.46 0-.821.36-.821.86 0 .502.36.863.82.863a.623.623 0 00.52-.24v.198h.356v-.82zm-3.346 0c0 .498.347.862.876.862a.86.86 0 00.59-.196l-.17-.289a.722.722 0 01-.43.148c-.285-.003-.495-.21-.495-.525 0-.316.21-.522.495-.526.154 0 .295.052.43.148l.17-.288a.86.86 0 00-.59-.196c-.529 0-.876.364-.876.862zm4.602-.862a.485.485 0 00-.433.24v-.199h-.353v1.641h.357v-.92c0-.271.117-.422.35-.422.073 0 .148.01.223.041l.11-.336a.761.761 0 00-.254-.045zm-9.568.172c-.171-.113-.408-.172-.67-.172-.415 0-.683.2-.683.526 0 .267.2.432.567.484l.168.024c.196.027.288.079.288.171 0 .127-.13.2-.374.2a.875.875 0 01-.546-.172l-.168.278c.196.144.443.213.71.213.475 0 .75-.224.75-.536 0-.288-.217-.44-.574-.49l-.168-.025c-.155-.02-.278-.051-.278-.161 0-.12.116-.192.312-.192.21 0 .412.079.512.14l.154-.288zm4.606-.172a.483.483 0 00-.433.24v-.199h-.354v1.641h.357v-.92c0-.271.117-.422.35-.422a.58.58 0 01.224.041l.11-.336a.761.761 0 00-.254-.045zm-3.046.041h-.584v-.497h-.36v.497H9.68v.327h.333v.748c0 .38.148.608.57.608a.838.838 0 00.447-.127l-.103-.306a.661.661 0 01-.316.093c-.179 0-.237-.11-.237-.275v-.741h.584v-.327zM5.62 19.667v-1.03c0-.387-.247-.648-.646-.652a.636.636 0 00-.577.292.603.603 0 00-.543-.292.543.543 0 00-.48.244v-.203h-.358v1.641h.36v-.91c0-.284.159-.436.403-.436.237 0 .357.155.357.433v.913h.36v-.91c0-.284.165-.436.402-.436.244 0 .36.155.36.433v.913h.362z"
            fill="#231F20"
          ></path>
          <path
            d="M21.811 14.21v-.24h-.062l-.073.165-.072-.165h-.062v.24h.044v-.18l.068.155h.046l.067-.156v.181h.044zm-.396 0v-.199h.08v-.04h-.204v.04h.08v.199h.044z"
            fill="#F79410"
          ></path>
          <path d="M14.704 15.241H9.295V5.522h5.41v9.72z" fill="#FF5F00"></path>
          <path
            d="M9.642 10.38a6.17 6.17 0 012.36-4.858 6.181 6.181 0 100 9.719 6.17 6.17 0 01-2.36-4.86z"
            fill="#EB001B"
          ></path>
          <path
            d="M22 10.38a6.181 6.181 0 01-10.003 4.86 6.17 6.17 0 002.361-4.86 6.169 6.169 0 00-2.361-4.858A6.181 6.181 0 0122 10.382z"
            fill="#F79E1B"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.051 19.6v-1.02a.6.6 0 00-.175-.465.614.614 0 00-.469-.178.638.638 0 00-.577.289.604.604 0 00-.543-.29.545.545 0 00-.48.242v-.2H5.45V19.6h.36V18.7a.376.376 0 01.098-.31.385.385 0 01.304-.12c.237 0 .357.151.357.427v.902h.36V18.7a.38.38 0 01.1-.308.389.389 0 01.303-.123c.244 0 .36.152.36.428v.902h.359zm2.009-.81v-.81h-.361v.197a.624.624 0 00-.515-.238.853.853 0 00-.833.849c0 .459.369.835.833.849.2.007.392-.081.515-.238v.197h.357l.004-.806zm-1.328 0a.494.494 0 01.514-.462c.27.01.482.231.478.498a.494.494 0 01-.493.483.494.494 0 01-.367-.15.483.483 0 01-.135-.37h.003zm8.957-.85c.117 0 .234.023.343.065.21.082.378.244.465.45.09.218.09.461 0 .679a.825.825 0 01-.465.45.981.981 0 01-.703 0 .834.834 0 01-.462-.45.892.892 0 010-.68.834.834 0 01.46-.449.934.934 0 01.358-.07l.004.006zm0 .34a.536.536 0 00-.204.037.479.479 0 00-.272.277.582.582 0 000 .421.478.478 0 00.272.277.563.563 0 00.578-.107.492.492 0 00.109-.17.583.583 0 000-.421.494.494 0 00-.11-.17.49.49 0 00-.17-.107.537.537 0 00-.206-.047l.003.01zm-5.69.51c0-.51-.32-.85-.777-.85a.86.86 0 00-.738.436.84.84 0 00.013.849.86.86 0 00.75.414c.243.007.483-.074.67-.228l-.17-.262a.787.787 0 01-.479.17.454.454 0 01-.49-.398h1.217c.005-.042.005-.084.005-.132zm-1.22-.143a.42.42 0 01.431-.392.405.405 0 01.416.393l-.847-.001zm2.723-.255a1.066 1.066 0 00-.515-.14c-.196 0-.312.073-.312.192 0 .118.123.138.277.159l.172.023c.357.052.573.201.573.486s-.274.53-.746.53a1.193 1.193 0 01-.71-.21l.172-.276c.158.116.35.176.546.17.244 0 .375-.071.375-.197 0-.091-.093-.142-.289-.17l-.171-.024c-.368-.05-.567-.213-.567-.478 0-.323.268-.52.687-.52a1.24 1.24 0 01.667.17l-.16.285zm1.717-.092h-.583v.732c0 .17.06.273.238.273a.665.665 0 00.315-.093l.104.302a.84.84 0 01-.447.126c-.422 0-.57-.224-.57-.6V18.3h-.333v-.322h.333v-.493h.36v.493h.583v.322zm1.234-.363c.086 0 .173.015.254.044l-.11.34a.585.585 0 00-.223-.04c-.233 0-.343.149-.343.417v.908h-.358v-1.621h.354v.197a.485.485 0 01.433-.238l-.008-.007h.001zm2.468 1.426c.045 0 .087.016.12.046a.157.157 0 01-.054.261.162.162 0 01-.066.014.17.17 0 01-.154-.098.158.158 0 01.036-.177.172.172 0 01.11-.046h.008zm0 .288a.123.123 0 00.09-.037.124.124 0 00.029-.138.13.13 0 00-.209-.04.124.124 0 000 .17.127.127 0 00.09.038v.007zm.01-.203c.017 0 .033.004.046.014.01.009.016.022.014.035a.038.038 0 01-.01.031.06.06 0 01-.037.015l.05.057h-.04l-.046-.057h-.016v.057h-.032v-.157l.072.005zm-.036.03v.04h.037a.037.037 0 00.02 0 .017.017 0 000-.015.017.017 0 000-.016.037.037 0 00-.02 0l-.037-.01z"
            fill="#000"
          ></path>
          <path d="M9.296 5.61h5.408v9.608H9.296V5.61z" fill="#7673C0"></path>
          <path
            d="M9.64 10.414A6.078 6.078 0 0112 5.607c-2.534-1.97-6.173-1.683-8.36.659a6.064 6.064 0 000 8.294c2.187 2.342 5.826 2.629 8.36.659a6.078 6.078 0 01-2.36-4.805z"
            fill="#EB001B"
          ></path>
          <path
            d="M21.999 10.414a6.107 6.107 0 01-3.48 5.495A6.237 6.237 0 0112 15.22a6.089 6.089 0 002.361-4.806c0-1.876-.87-3.647-2.361-4.806a6.237 6.237 0 016.52-.692A6.107 6.107 0 0122 10.412l-.001.002z"
            fill="#00A1DF"
          ></path>
        </svg>
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.687 5H6.785c-1.283.07-2.33.663-2.633 1.886-.158.638-.245 1.339-.368 2C3.156 12.25 2.6 15.704 2 19h22.593c1.746 0 2.945-.424 3.27-2.016.15-.74.294-1.578.438-2.39C28.863 11.424 29.425 8.256 30 5H9.687z"
            fill="#B82126"
          ></path>
          <path
            d="M20.807 13.516c-.312.323-1.188.415-1.098-.358.074-.643.734-.78 1.45-.687-.054.352-.115.798-.352 1.045zm-.986-2.507c-.03.178-.075.338-.112.508.357-.095 1.47-.386 1.576.119.036.168-.026.346-.07.477-1.006-.1-1.825.077-2.041.836-.145.508.016 1.009.324 1.149.592.269 1.313-.04 1.562-.463a2.06 2.06 0 00-.042.478h.52c.006-.53.079-.957.155-1.433.066-.405.189-.806.17-1.163-.045-.82-1.325-.53-2.042-.508zm5.223 2.76c-.408.01-.61-.258-.62-.7-.016-.777.305-1.64.957-1.717.304-.036.524.04.746.12-.204.872-.13 2.276-1.083 2.297zm1.35-4.102c-.051.482-.12.945-.21 1.387-1.485-.498-2.396.66-2.38 2.089.004.276.049.55.212.746.281.337 1.086.417 1.492.134.079-.055.16-.155.211-.224.04-.052.102-.188.113-.149-.021.152-.053.292-.056.463h.549c.105-1.609.432-2.983.675-4.446h-.605zM10.898 13.53c-.324.363-1.12.358-1.182-.254-.027-.266.066-.545.113-.82.046-.28.08-.546.126-.791.32-.413 1.256-.463 1.351.224.083.596-.14 1.34-.408 1.64zm.479-2.522c-.512-.204-1.137.04-1.407.271 0 .01-.007.012-.015.013l.015-.012v-.003c.004-.1.037-.169.042-.269H9.49c-.217 1.53-.475 3.018-.746 4.491h.605c.088-.573.145-1.178.267-1.716.139.565 1.041.457 1.422.24.786-.451 1.392-2.595.338-3.015zm2.871 1.075h-1.421c.045-.347.339-.728.802-.746.436-.018.748.17.62.746zm-.577-1.134c-.437.035-.807.169-1.07.462-.322.36-.583 1.156-.506 1.88.109 1.034 1.323.997 2.294.746.017-.181.058-.337.085-.507-.4.158-1.095.38-1.507.104-.31-.208-.312-.735-.21-1.193a32.998 32.998 0 011.984 0c.041-.325.16-.68.056-1-.137-.423-.627-.533-1.126-.492zm-5.32.06c-.017.002-.016.023-.015.044a46.42 46.42 0 01-.506 3.059h.605c.145-1.065.312-2.106.52-3.104H8.35zm15.793.014c-.535-.283-.98.193-1.155.478.05-.147.053-.343.099-.493h-.535a48.584 48.584 0 01-.52 3.104h.619c.004-.412.08-.716.14-1.12.13-.86.32-1.805 1.267-1.521.032-.146.045-.311.085-.448zm-6.799 2.358c-.056-.153-.07-.405-.056-.597.031-.431.18-.956.408-1.194.316-.328.939-.273 1.436-.09.015-.177.049-.335.07-.506-.815-.142-1.589-.054-1.999.402-.401.447-.664 1.473-.478 2.119.217.755 1.194.796 1.984.507.035-.152.054-.321.085-.477-.432.238-1.258.361-1.45-.164zm-.338-2.373c-.537-.23-.958.159-1.154.523.044-.162.063-.352.098-.523h-.534c-.131 1.075-.324 2.084-.507 3.104h.605c.085-.605.122-1.42.31-2 .15-.462.544-.856 1.112-.641.008-.17.054-.3.07-.463zM7.252 9.756a81.854 81.854 0 01-.282 1.76c-.627.008-1.267.034-1.872-.014.114-.57.196-1.175.31-1.746h-.676C4.49 11.211 4.27 12.688 4 14.113h.69c.108-.731.21-1.47.352-2.164.588-.015 1.293-.042 1.858.015-.117.722-.258 1.418-.366 2.149h.69c.221-1.476.455-2.94.731-4.357h-.703zm1.717.657c.12-.088.276-.49.098-.657-.056-.053-.15-.068-.281-.045-.122.022-.192.066-.24.135-.076.11-.146.443-.028.567.116.12.374.056.45 0z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.02 6.025A9.955 9.955 0 0122 12c0 5.522-4.478 10-10 10S2 17.522 2 12C2 6.477 6.478 2 12 2a9.988 9.988 0 018.02 4.025z"
            fill="#050013"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.703 9.32a3.074 3.074 0 012.988 2.35l-1.238.543v-.003l-1.268.557-3.04 1.328a3.074 3.074 0 012.56-4.776h-.002zm1.32 1.91l-3.07 1.323a1.758 1.758 0 013.07-1.322v-.001zm.828 3.361c-1.101 1.044-2.557 1.146-3.835.37l.722-1.099c.728.435 1.46.364 2.194-.211l.92.94zm1.25-.761l-.007-5.81h1.101v5.654c0 .053.007.101.078.13l.957.372-.43 1.122-1.123-.475c-.425-.18-.574-.44-.574-.993"
            fill="#fff"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.248 13.732a1.75 1.75 0 01-.132-2.656l-.712-1.153a3.088 3.088 0 00.172 4.976l.672-1.167"
            fill="#009DD7"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.73 10.697a1.755 1.755 0 012.235 1.032l1.362-.113a3.093 3.093 0 00-4.166-2.133l.569 1.214"
            fill="#FFF200"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.075 12.433a1.754 1.754 0 01-2.18 1.616l-.534 1.237a3.089 3.089 0 004.05-2.811l-1.336-.042z"
            fill="#E33206"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.351 6.758l11.216-2.675a3.068 3.068 0 013.684 2.276l2.666 11.25a3.07 3.07 0 01-.43 2.405H4.348l-2.266-9.56A3.078 3.078 0 014.35 6.757z"
            fill="#E46C2A"
          ></path>
          <path
            d="M4.327 11.357v4.807h1.088v-2.011H7.2v2.011h1.08v-4.807H7.2v1.847H5.415v-1.847H4.327zM17.639 14.766c.014-.078.035-.242.035-.428 0-.863-.426-1.74-1.55-1.74-1.208 0-1.755.977-1.755 1.861 0 1.092.675 1.776 1.855 1.776.47 0 .903-.071 1.259-.214l-.143-.734c-.291.092-.59.142-.96.142-.504 0-.945-.214-.98-.663h2.239zm-2.247-.742c.029-.292.214-.706.669-.706.497 0 .611.443.611.706h-1.28zm2.629 2.14h1.08v-1.769c0-.085.008-.171.022-.242.07-.335.341-.55.74-.55.12 0 .213.015.29.03v-1.02c-.077-.015-.127-.015-.227-.015-.334 0-.76.214-.938.72h-.029l-.035-.641h-.932c.015.299.029.634.029 1.148v2.339z"
            fill="#FFFFFE"
          ></path>
          <path
            d="M9.38 11.164a.556.556 0 11-.002 1.113.556.556 0 01.002-1.113z"
            fill="#FFE80F"
          ></path>
          <path
            d="M11.662 15.351h.542c.545 0 .791-.35.791-.714 0-.365-.026-1.19-.7-1.19-.772 0-.647 1.024-.644 1.56.001.115.008.23.011.345zm-2.838-2.68h1.111v1.966c0 .364.202.714.648.714.003-.884 0-1.795-.03-2.68h.928c.02.17.039.342.055.513.439-.88 1.821-.686 2.286.056.48.768.644 2.964-1.618 2.964h-.526c.005.446.006.892.006 1.339h-1.111c0-.429.003-.878.005-1.34-1.2-.003-1.754-.768-1.754-1.566v-1.965z"
            fill="#FFFFFE"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.983 20.989H3V3h17.983v17.989z" fill="#fff"></path>
          <path
            d="M20.983 12.748V3H3v18h17.983v-5.261c-.038 0 0-3.002 0-3.002"
            fill="#2E70B5"
          ></path>
          <path
            d="M18.785 11.745h1.379V8.577h-1.5v.443l-.283-.443h-1.279v.554l-.244-.554h-2.364c-.077 0-.16.039-.238.039-.077 0-.122.044-.2.083-.077.039-.12.039-.198.078v-.2H7.086l-.21.515-.2-.52H5.082v.554l-.238-.554h-1.29L3 9.94v1.805h.92l.187-.437h.321l.161.443h7.026v-.405l.277.405h1.966v-.244c.038.044.116.044.16.083.044.039.116.039.16.078a.503.503 0 00.239.038h1.44l.16-.437h.321l.16.437h1.966v-.398l.321.437zM21 15.75v-2.964H9.97l-.282.4-.276-.4H6.206v3.163h3.206l.276-.399.283.399h2.004v-.681h-.083c.245.006.49-.034.72-.117v.842h1.461v-.404l.277.404h5.958c.233-.061.46-.146.675-.255l.017.011z"
            fill="#fff"
          ></path>
          <path
            d="M20.308 14.99H19.2v.438h1.04a.657.657 0 00.72-.68.553.553 0 00-.636-.6h-.482a.205.205 0 010-.403h.919l.2-.438h-1.058a.651.651 0 00-.72.643c0 .398.238.598.642.598h.482a.194.194 0 01.2.2c.038.16-.045.243-.2.243zm-1.966 0h-1.08v.438h1.042a.664.664 0 00.72-.68c0-.4-.239-.6-.643-.6H17.9a.205.205 0 010-.403h.925l.2-.438h-1.075a.659.659 0 00-.725.643.556.556 0 00.642.598h.482a.221.221 0 110 .443h-.006zm-1.4-1.284v-.438H15.28v2.121h1.662v-.442h-1.207v-.438h1.162v-.432h-1.162v-.399h1.201l.006.028zm-2.725 0a.243.243 0 01.277.244c0 .116-.077.238-.277.238h-.603v-.52l.603.038zm-.603.925h.244l.636.758h.604l-.72-.803a.637.637 0 00.554-.636.664.664 0 00-.72-.682h-1.107v2.121h.481l.028-.758zm-1.279-.643a.256.256 0 01-.282.277h-.643v-.554h.604a.286.286 0 01.295.166.289.289 0 01.026.117v-.006zm-1.4-.72v2.121h.475v-.72h.643a.708.708 0 00.764-.72.698.698 0 00-.726-.725l-1.157.044zm-.737 2.121h.603l-.841-1.08.841-1.04h-.603l-.52.68-.521-.68H8.57l.842 1.04-.842 1.042h.598l.52-.682.51.72zm-1.8-1.661v-.438h-1.66v2.122h1.66v-.443h-1.19v-.438h1.157v-.454H7.208v-.399h1.201l-.01.05zm9.734-3.766l.841 1.285h.637V9.092h-.481v1.401l-.117-.199-.791-1.202h-.637v2.127h.476V9.78l.072.183zm-2.082-.039l.16-.443.156.443.205.482h-.715l.194-.482zm.842 1.324h.52L16.5 9.092h-.643l-.919 2.127h.52l.2-.443h1.04l.195.47zm-2.248 0l.205-.443h-.111a.553.553 0 01-.554-.598v-.045a.552.552 0 01.554-.598h.52v-.47h-.553a.957.957 0 00-1.002 1.04v.067a.932.932 0 00.957 1.041l-.016.006zm-1.8 0h.482v-2.11h-.47v2.088l-.012.022zm-1.04-1.662c.199 0 .276.117.276.238a.244.244 0 01-.277.244h-.592v-.52l.604.038h-.012zm-.604.92h.244l.636.764h.604l-.72-.803a.642.642 0 00.554-.643.666.666 0 00-.704-.73h-1.107v2.126h.482l.039-.764-.028.05zm-.88-.92v-.493H8.659v2.127h1.66v-.443H9.13v-.443h1.163v-.438H9.129v-.398h1.202l-.011.088zm-3.644 1.662h.438l.603-1.723v1.723H8.2V9.092h-.77l-.481 1.446-.504-1.446h-.797v2.127h.476V9.502l.553 1.745zM4.107 9.9l.16-.443.161.443.2.482H3.88l.227-.482zm.842 1.324h.52l-.946-2.133h-.604L3 11.225h.52l.2-.444h1.04l.189.444z"
            fill="#2E70B5"
          ></path>
        </svg>
      </div>
      <div className="flex gap-1">
        <img
          src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1636225482/boleto-logo-1_psgo1k.png"
          alt="boleto"
        />
        <img
          src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1636225482/pix-bc-logo_klhjgp.png"
          alt="PIX"
        />
      </div>
    </div>
  );
};
