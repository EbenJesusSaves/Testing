import React from 'react'

interface Props{
name: string

}

export const SampleTest:  React.FC<Props> = ({name}) => {
  return (
    <div>SampleTest {name}</div>
  )
}
