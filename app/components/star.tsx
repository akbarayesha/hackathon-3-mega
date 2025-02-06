export const SmallStars = ({
  rating = 0,
  total = 5,
  filledColor = 'yellow-400',
  emptyColor = 'gray-300',
}) => {
  const ariaLabel = `Rating: ${rating} out of ${total}`;

  return (
    <div className="flex space-x-1" aria-label={ariaLabel} role="img">
      {Array.from({ length: total }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${
            index < rating ? `text-${filledColor}` : `text-${emptyColor}`
          }`}
          aria-hidden="true"
        >
          <path d="M12 2.25l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.27l-6.18 3.25 1.18-6.88-5-4.87 6.91-.99L12 2.25z" />
        </svg>
      ))}
    </div>
  );
};
