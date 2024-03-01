export interface SliderProps {
  links: { href: string[]; github: string };
  img: { src: string[]; alt: string };
  description: string;
  bulletpoints?: string[];
  slide?: number;
}

const Slider: React.FC<SliderProps> = ({
  links,
  img,
  description,
  bulletpoints,
  slide,
}) => {
  return (
    <div className="slider">
      <div
        className="slider__reel"
        style={{
          width: `${100 * img.src.length}%`,
          transform: `translateX(-${slide}%)`,
        }} // add gaps
      >
        {img.src.map((imgPath, i) => (
          <div className="prj__img-box slide">
            <img src={imgPath} alt={img.alt} />

            <div className="img__overlay">
              <p>{description}</p>
              <ul>
                {bulletpoints?.map((bp) => (
                  <li>{bp}</li>
                ))}
              </ul>
              <nav>
                <a href={links.href[i]}>
                  <i className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href={links.github}>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </nav>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
