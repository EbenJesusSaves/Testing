import { render, screen } from "@testing-library/react"
import { SampleTest } from "./SampleTest"



test('first Test', ()=>{
render(<SampleTest/>)
const testOne = screen.getByText(/Sampletest/i)
expect(testOne).toBeInTheDocument()

})

test( 'secondTest', ()=>{

render (<SampleTest name='Hellooo'/>)
const testTwo = screen.getAllByText( /Sampletest hellooo/i)

})