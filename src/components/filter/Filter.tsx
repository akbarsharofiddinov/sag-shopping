import { Slider } from "antd";
import { useState } from "react";

const Filter = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);

  const changeSlider = (newValue: number[]) => {
    setMin(newValue[0]);
    setMax(newValue[1]);
  };

  return (
    <div className="filter">
      <div className="top">
        <h1 className="title">Сортировать по:</h1>
        <p className="price">Цена</p>
      </div>
      <div className="slider-box">
        <Slider range value={[min, max]} onChange={changeSlider} />
        <p>
          <span>{min}</span>
          <span>{max}</span>
        </p>
      </div>
    </div>
  );
};

export default Filter;
