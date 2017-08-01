import React from 'react';
import { LabelWrapper, Selector, NumberInput, RadioButton } from '../InputWidgets';
import './EditWidgetMain.scss';

const timeOptions = [
  {
    text: 'Mobile Time',
    value: 'mobile_time'
  }
];

const dateOptions = [
  {
    text: 'Weekly',
    value: 'weekly'
  }
];

const EditWidgetMain = () => (
  <div className='widget-edit'>
    <LabelWrapper label='Number of Users' forHtml='number_of_users'>
      <NumberInput min='1' max='5' id='number_of_users' />
    </LabelWrapper>
    <LabelWrapper label='Activity'>
      <LabelWrapper label='Highest' forHtml='highest' direction='row'>
        <RadioButton name='activity' id='highest' defaultChecked />
      </LabelWrapper>
      <LabelWrapper label='Lowest' forHtml='lowest' direction='row'>
        <RadioButton name='activity' id='lowest' />
      </LabelWrapper>
    </LabelWrapper>
    <LabelWrapper label='Time' forHtml='time'>
      <Selector options={timeOptions} id='time' disabled />
    </LabelWrapper>
    <LabelWrapper label='Date' forHtml='date'>
      <Selector options={dateOptions} id='date' disabled />
    </LabelWrapper>
  </div>
);

export default EditWidgetMain;
