import React from 'react';
import { connect } from 'react-redux';
import { changeEditWidgetSetting } from '../../store/actions';
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

const noop = () => {};

const EditWidgetMain = ({ settings: { slice, sort, time, date }, onChange }) => (
  <div className='widget-edit' onChange={onChange}>
    <LabelWrapper label='Number of Users' forHtml='slice'>
      <NumberInput min='1' max='5' id='slice' value={slice} onChange={noop} />
    </LabelWrapper>
    <LabelWrapper label='Activity'>
      <LabelWrapper label='Highest' forHtml='highest' direction='row'>
        <RadioButton name='sort' value='DESC' id='highest' checked={sort === 'DESC'} onChange={noop} />
      </LabelWrapper>
      <LabelWrapper label='Lowest' forHtml='lowest' direction='row'>
        <RadioButton name='sort' value='ASC' id='lowest' checked={sort === 'ASC'} onChange={noop} />
      </LabelWrapper>
    </LabelWrapper>
    <LabelWrapper label='Time' forHtml='time'>
      <Selector options={timeOptions} id='time' disabled value={time} />
    </LabelWrapper>
    <LabelWrapper label='Date' forHtml='date'>
      <Selector options={dateOptions} id='date' disabled value={date} />
    </LabelWrapper>
  </div>
);

const mapStateToProps = ({ editing }) => ({
  ...editing
});

const mapDispatchToProps = (dispatch) => ({
  onChange(widgetId, e) {
    const { id, name, value } = e.target;
    dispatch(changeEditWidgetSetting(widgetId, name || id, value));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  onChange: (e) => dispatchProps.onChange(stateProps.id, e),
  ...ownProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditWidgetMain);
