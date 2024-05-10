const EducationCard = ({ name, image, course, start, end }) => {
  const yearDifference = end - start;
  const yearsText =
    yearDifference > 1 ? `${yearDifference} years` : `${yearDifference} year`;

  return (
    <div className="flex flex-col gap-3 xs:gap-4 bg-bgDark p-6 rounded max-w-sm">
      <div className="flex flex-col-reverse xs:flex-row gap-4 items-center justify-between">
        <h4 className="font-primary font-bold text-xl text-secondary leading-tight text-center xs:text-left">
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

      <div className="font-secondary text-center xs:text-left xs:mt-0">
        <p className="text-bgLight font-bold md:text-xl text-l">{course}</p>
        <span className="block w-fit bg-bgMedium rounded py-1 px-2 mt-2 text-bgLight">
          {start} - {end} | <strong className="text-accent">{yearsText}</strong>
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
