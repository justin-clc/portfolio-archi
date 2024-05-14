const EducationCard = ({ name, image, course, start, end }) => {
  const yearDifference = end - start;
  const yearsText =
    yearDifference > 1 ? `${yearDifference} years` : `${yearDifference} year`;

  return (
    <div className="flex max-w-sm flex-col gap-3 rounded bg-bgDark p-6 xs:gap-4">
      <div className="flex flex-col-reverse items-center justify-between gap-4 xs:flex-row">
        <h4 className="font-primary text-center text-xl font-bold leading-tight text-secondary xs:text-left">
          {name}
        </h4>
        <img
          src={image}
          alt="EduLogo"
          height={120}
          width={120}
          className="rounded"
        />
      </div>

      <div className="font-secondary text-center xs:mt-0 xs:text-left">
        <p className="text-l font-bold text-bgLight md:text-xl">{course}</p>
        <span className="mt-2 block w-fit rounded bg-bgMedium px-2 py-1 text-bgLight">
          {start} - {end} | <strong className="text-accent">{yearsText}</strong>
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
