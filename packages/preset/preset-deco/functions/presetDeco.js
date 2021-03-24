import { ATLAS, AZURE, MOSS, SUBTLE } from '@palett/presets'
import { DecoConfig }                 from '../src/DecoConfig'

export const CONF_DECO = {
  depth: 8, // 展示级别
  vert: 0, // 在此级别以下均设为竖排
  unit: 32, // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排
  width: 80, // 字符超过此, 则换行
  string: {} // 设置字符串
}

export const presetDeco = p => {
  const conf = DecoConfig.build(p).replenishConfigs(CONF_DECO).defaultPresets(AZURE, MOSS)
  conf.string = DecoConfig.build(conf.string).defaultPresets(ATLAS, SUBTLE)
  return conf
}