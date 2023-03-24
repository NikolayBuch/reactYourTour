import React, { useState } from "react";
import st from "../Main.module.css";
import s from "./CollectTour.module.css";
import cx from "classnames";
import MyInput from "./Input/MyInput";
import MySelect from "./Select/MySelect";
import Textarea from "./Textarea/Textarea";
import RadioBtn from "./RadioBtn/RadioBtn";
import Agreement from "./Agreement/Agreement";
import BtnSubmit from "../../Buttons/BtnSubmit/BtnSubmit";
import BtnReset from "../../Buttons/BtnReset/BtnReset";
import BlockName from "../BlockName/BlockName";

const CollectTour = () => {
    // const [ type, setType ] = useState('text');
    // const onFocus = () => setType('date');
    // const onBlur = () => console.log('onBlur')

  return (
    <div className={s.container} id="create_a_tour">
      <div className={st.wrapperInfo}>
        <BlockName
          title="Собери свой тур"
          description="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
        />
      </div>
      <form className={s.form}>
        <div className={cx(s.group, st.pNormal)}>
          <MyInput
            label="Имя"
            type="text"
            required
            placeholder="Введите Ваше имя"
          />
          <MySelect 
          label="Направление" 
          defaultValue='Выберите пункт'
          options={[
            {value: 'Пункт1', name: 'Пункт выбран',},
            {value: 'Пункт2', name: 'Пункт выбран',},
            {value: 'Пункт3', name: 'Пункт выбран',}

          ]}/>
        </div>
        <div className={cx(s.group, st.pNormal)}>
          <MyInput
            label="Email"
            type="Email"
            required
            placeholder="example@mail.com"
          />
          <MyInput
            label="Телефон"
            type="number"
            required
            placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
          />
        </div>
        <div className={cx(s.group, st.pNormal)}>
          <MyInput
            type='date'
            label="Дата от"
            placeholder="ДД.ММ.ГГГГ"
            // onFocus={onFocus}
          />
          <MyInput type='date' label="Дата до" placeholder="ДД.ММ.ГГГГ" 
          />
        </div>
        <Textarea />
        <div className={cx(s.have18, st.pNormal)}>
          <p>Вам есть 18 лет?</p>
          <div className={s.answer}>
            <RadioBtn value="yes" label="Да" />
            <RadioBtn value="no" label="Нет" />
          </div>
        </div>
        <Agreement />
        <div className={s.btm}>
          <BtnSubmit value="Найти тур" />
          <BtnReset value="Сбросить" />
        </div>
      </form>
    </div>
  );
};

export default CollectTour;
