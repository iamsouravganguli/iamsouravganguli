import { useCallback } from "react";

const Header = () => {
  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About" to the project
  }, []);

  const onBuyersTextClick = useCallback(() => {
    // Please sync "Buyers" to the project
  }, []);

  const onSuppliersTextClick = useCallback(() => {
    // Please sync "Suppliers" to the project
  }, []);

  const onProductsTextClick = useCallback(() => {
    // Please sync "Products" to the project
  }, []);

  const onMediaTextClick = useCallback(() => {
    // Please sync "Media" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onDropdwonClick = useCallback(() => {
    // Please sync "Sign-in" to the project
  }, []);

  return (
    <div className="relative bg-darkslategray w-full h-[78px] flex flex-row py-2.5 px-[81px] box-border items-center justify-start gap-[128px] text-left text-base text-extended-true-gray-300 font-montserrat">
      <img
        className="relative w-[134px] h-[39px] shrink-0 overflow-hidden"
        alt=""
        src="../logo.svg"
      />
      <div className="relative w-[684px] h-[27px] shrink-0">
        <div className="absolute top-[0px] left-[0px] w-16 h-[27px] text-extended-cool-gray-300">
          <div className="absolute top-[24px] left-[0px] bg-default-yellow-400 w-16 h-[3px]" />
          <div className="absolute top-[0px] left-[4px] tracking-[-0.02em] leading-[24px] font-semibold inline-block w-14">
            Home
          </div>
        </div>
        <div
          className="absolute top-[0px] left-[471px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[86px] cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About Us.
        </div>
        <div
          className="absolute top-[0px] left-[86px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[62px] cursor-pointer"
          onClick={onBuyersTextClick}
        >
          Buyers
        </div>
        <div
          className="absolute top-[0px] left-[174px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[83px] cursor-pointer"
          onClick={onSuppliersTextClick}
        >
          Suppliers
        </div>
        <div
          className="absolute top-[0px] left-[283px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[81px] cursor-pointer"
          onClick={onProductsTextClick}
        >
          Products
        </div>
        <div
          className="absolute top-[0px] left-[390px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[55px] cursor-pointer"
          onClick={onMediaTextClick}
        >
          Media
        </div>
        <div
          className="absolute top-[0px] left-[583px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[101px] cursor-pointer"
          onClick={onContactUsTextClick}
        >
          Contact Us.
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[205px] h-[42px] shrink-0"
        autoFocus
      >
        <button
          className="cursor-pointer p-0 bg-[transparent] absolute top-[0px] left-[46px] rounded-[31px] box-border w-[159px] h-[42px] overflow-hidden border-[1px] border-solid border-default-gray-400"
          autoFocus
          onClick={onDropdwonClick}
        >
          <img
            className="absolute top-[9px] left-[10px] w-6 h-6 overflow-hidden"
            alt=""
            src="../frame.svg"
          />
          <div className="absolute top-[9px] left-[46px] text-sm leading-[24px] font-medium font-text-base-leading-6-font-medium text-extended-cool-gray-300 text-left">
            Account
          </div>
          <img
            className="absolute top-[9px] left-[124px] w-6 h-6 overflow-hidden"
            alt=""
            src="../frame1.svg"
          />
        </button>
        <img
          className="absolute top-[9px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="../frame2.svg"
        />
      </button>
    </div>
  );
};

export default Header;
