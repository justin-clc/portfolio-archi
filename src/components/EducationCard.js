const EducationCard = ({ name, image, course, start, end }) => {
    const yearDifference = end - start;
    const yearsText = yearDifference > 1 ? `${yearDifference} years` : `${yearDifference} year`;

    return (
        <div className="flex flex-col bg-bgMedium p-6 rounded max-w-sm">
            <div className="flex flex-col-reverse xs:flex-row gap-4 items-center justify-between">
                <h4
                    className="font-primary font-bold md:text-2xl text-xl text-bgLight
                 text-left leading-tight text-center xs:text-left">
                    {name}
                </h4>
                <img src={image} alt="EduLogo" height={98} width={98} className="rounded" />
            </div>

            <div className="font-secondary text-bgLight text-center xs:text-left mt-3 xs:mt-0">
                <p className="text-accent font-bold md:text-xl text-l">{course}</p>
                <span>
                    {start} - {end} | {yearsText}
                </span>
            </div>
        </div>
    );
};

export default EducationCard;
