/* eslint-disable react/prop-types */
import MobileBanking from "./MobileBanking";
// import PaymentMethodTab from "./PaymentMethodTab";

const DonateForm = ({ donate }) => {
  const { images, projectName } = donate || {};

  return (
    <>
      <section className="md:w-7/12 mx-auto rounded-3xl md:shadow-xl px-4 mt-10 md:mt-20 mb-8 py-10">
        <div className=" flex items-center gap-5">
          <div className=" w-44 shadow-xl rounded-2xl">
            <img
              className=" rounded-2xl"
              src={images[0]?.data?.display_url}
              alt={projectName}
            />
          </div>
          <h3 className="font-medium">
            আপনি সমর্থন করছেন |
            <span className=" font-bold text-slate-900"> {projectName}</span>
          </h3>
        </div>
        <hr className="mt-10 md:mt-14 mb-10 md:mb-14" />
        {/* Payment method*/}
        <section className="">
          <h2 className=" text-4xl font-bold text-center mb-4 text-green-700">
            পেমেন্ট পদ্ধতি
          </h2>
          <div className=" text-center mb-6">
            <h2 className=" text-xl font-bold">
              আপনার সামর্থ্য অনুযায়ী দান করুন
            </h2>
            <p className=" font-semibold mt-1">জাযাকাল্লাহু খাইরান</p>
          </div>
          {/* <PaymentMethodTab /> */}
          <MobileBanking />
        </section>
      </section>
    </>
  );
};

export default DonateForm;
