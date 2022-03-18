import AutoIncrementFactory from 'mongoose-sequence';

/**
 * 해당 스키마에 자동 증가 필드를 추가
 * @param {Schema} schema
 * @param {Mongoose} mongoose
 * @param {string} name
 * @param {string} inc_field
 */
export default (schema, mongoose, name, inc_field) => {
  const AutoIncrement = AutoIncrementFactory(mongoose);
  const option = { id: `${name}_${inc_field}`, inc_field };
  schema.plugin(AutoIncrement, option);
};