import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => i < fullStars || (hasHalf && i === fullStars) ? "★" : "☆");
  return (
    <div className="flex items-center space-x-2">
      <div className="text-yellow-500 text-sm">{stars.join(" ")}</div>
      <div className="text-xs text-gray-500">({rating.toFixed(1)})</div>
    </div>
  );
};

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-start">
      <div className="flex-shrink-0">
        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="w-24 h-24 rounded-lg object-cover border-2 border-gray-100"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{mentor.name}</h3>
              {mentor.verified && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  {/* add shield verified icon instead of this */}
                  {/* ✔ */}
                  {mentor.verified && (
<svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l7 4v6c0 5-3.8 9.4-7 10-3.2-.6-7-5-7-10V6l7-4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4"
      />
    </svg>
)}

                </span>
              )}
            </div>
            <div className="text-sm text-gray-600">{mentor.title}</div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <button className="px-3 py-1 rounded-md border bg-gradient-to-b from-gray-50 to-white text-sm">
              View profile
            </button>
            <div className="text-xs text-gray-500"> </div>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
          {mentor.bio}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <StarRating rating={mentor.rating} />
            </div>
            <div className="text-xs text-gray-500">{mentor.reviewsCount} Reviews</div>
          </div>

          <div className="text-xs text-gray-400"> {/* placeholder for extra info */} </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
