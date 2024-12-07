"use client"
import { FormEvent } from 'react';
import { AddNewModelForm } from './components/AddNewModelForm';

/** Модуль создания новой модели */
export const AddNewModelModule = () => {
  const onSubmit = (e: FormEvent) => {
    e.stopPropagation();

  }
  return (
    <div className="w-full">
      <h1 className="text-5xl font-medium">Новая модель</h1>
      <div className="mt-12.5">
        <AddNewModelForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}
