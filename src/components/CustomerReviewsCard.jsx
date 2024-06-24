import { star } from "../assets/icons";

const CustomerReviewsCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-contain w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="mt-4 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3>{customerName}</h3>
    </div>
  );
};

export default CustomerReviewsCard;
