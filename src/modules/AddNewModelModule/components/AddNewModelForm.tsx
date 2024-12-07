"use client"
import { FC, FormEvent } from 'react';
import {
  Icons, SecondaryText
} from "src/uiKit";

interface AddNewModelFormProps {
  onSubmit: (e: FormEvent) => void;
}

export const AddNewModelForm: FC<AddNewModelFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {/* FileArea */}
      <div className="w-full border-2 border-borderDefault rounded-2xl p-7 pt-12 flex flex-wrap text-center">
        <div className="w-full flex flex-wrap justify-center"><Icons.AttachFile className="size-11" /></div>
        <div className="w-full">Перетащите ваши файлы сюда</div>
        <div className="w-full">Или выберите их на компьютере <input type={'file'} title={'Выбрать'} /></div>
        <div className="w-full"><SecondaryText>Поддерживаемые файлы: stl, obj, thing, scad, jpg, png</SecondaryText>
        </div>
      </div>

    </form>
  )
}
