export { oceanicNextFull as theme } from 'code-surfer'

import {slides as introduction} from './pages/Introduction.mdx'
import {slides as reason} from './pages/WhatAndReason.mdx' 
import {slides as installation} from './pages/Installation.mdx'

export const slides = [
  ...introduction,
  ...reason,
  ...installation,
]