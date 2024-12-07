"use client"
import { FC, FormEvent } from 'react';
import {
  Icons, T
} from "src/uiKit";

interface AddNewModelFormProps {
  onSubmit: (e: FormEvent) => void;
}

export const AddNewModelForm: FC<AddNewModelFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>

        {/* FileArea */}
        <div className="w-full border-2 border-borderDefault rounded-2xl p-7 pt-12 flex flex-wrap text-center">
          <div className="w-full flex flex-wrap justify-center"><Icons.AttachFile className="size-11" /></div>
          <div className="w-full mt-8"><T primary>Перетащите ваши файлы сюда</T></div>
          <div className="w-full"><T>Или выберите их на компьютере</T> <input type={'file'} title={'Выбрать'} /></div>
          <div className="w-full"><T secondary>Поддерживаемые файлы: stl, obj, thing, scad, jpg, png</T>
          </div>
        </div>


      </div>
    </form>
  )
}
